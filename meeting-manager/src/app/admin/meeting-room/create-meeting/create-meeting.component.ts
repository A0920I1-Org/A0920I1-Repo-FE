import {Component, Inject, OnInit} from '@angular/core';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {MatDialog} from '@angular/material/dialog';
import {ChooseEquipmentComponent} from './choose-equipment/choose-equipment.component';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypeMeetingRoom} from '../../../model/entity/TypeMeetingRoom';
import {Area} from '../../../model/entity/Area';
import {RoomStatus} from '../../../model/entity/RoomStatus';
import {OrderEquipment} from 'src/app/model/entity/OrderEquipment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
  areaList: Area[];
  typeMeetingRoom: TypeMeetingRoom[];
  statusRoomList: RoomStatus[];
  orderEquipmentList: OrderEquipment[];
  valueNull = null;

  ref: AngularFireStorageReference;
  defaultImage = 'https://thumbs.dreamstime.com/b/online-conference-icon-meeting-room-153070922.jpg';
  // createMeetingRoom: FormGroup;
  filePath: string = null;
  inputImage: any = null;

  constructor(
    private toastService: ToastrService,
    private meetingService: MeetingRoomService,
    private router: Router, private form: FormBuilder,
    public dialog: MatDialog,
    @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) {

  }

  validation_messages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên phòng.'},
      {type: 'maxlength', message: 'Tên phòng nhập tối đa 50 kí tự bao gồm khoảng trắng.'},
      {type: 'minlength', message: 'Vui lòng nhập tên phòng có ít nhất 4 kí tự.'},
      {type: 'pattern', message: 'Nhập tên phòng không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
    ],
    floors: [
      {type: 'required', message: 'Vui lòng nhập số tầng.'},
      {type: 'minlength', message: 'không được nhập chữ và ít nhất 1 số.'},
      {type: 'maxlength', message: 'Nhập tối đa 10 kí tự.'}

    ],
    areaDto: [
      {type: 'required', message: 'Vui lòng chọn khu vực.'},
    ],
    roomStatusDto: [
      {type: 'required', message: 'Vui lòng chọn trạng thái phòng.'}
    ],
    typeMeetingRoomDto: [
      {type: 'required', message: 'Vui lòng chọn loại phòng.'}
    ],
    imageUrl: [
      {type: 'required', message: 'Vui lòng chọn ảnh.'},
      {type: 'pattern', message: 'Bạn chọn không đúng file ảnh.'}
    ],
    equipment: [
      {}
    ]
  };
  createMeetingRoom = this.form.group({
    name: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/),
      Validators.maxLength(50), Validators.minLength(4)]],
    floors: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$'),
      Validators.maxLength(10), Validators.minLength(1)]],
    area: ['', [Validators.required]],
    roomStatus: ['', [Validators.required]],
    typeMeetingRoom: ['', [Validators.required]],
    imageUrl: ['', [Validators.required, Validators.pattern('')]],
    // equipment: this.form.array([''])
  });

  ngOnInit(): void {

    this.createMeetingRoom.reset();
    this.getArea();
    this.getRoomStatus();
    this.getTypeMeetingRoom();
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

  onSubmit() {
    if (this.inputImage != null) {
      this.toastService.error("Bạn chưa chọn ảnh phòng họp.", "Thông báo lỗi");
      this.router.navigateByUrl('/create-meeting');
    } else {
      const nameImage = this.getCurrentDateTime() + this.inputImage.name;
      const fileRef = this.storage.ref(nameImage);


      this.storage.upload(nameImage, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.createMeetingRoom.patchValue({imageUrl: url});

            this.meetingService.addMeetingRoom(this.createMeetingRoom.value).subscribe(() => {
              this.router.navigateByUrl('/list-meeting').then(e => this.toastService.success("Thêm mới thành công!", "Thông báo"))
            }, error => this.toastService.error("Lỗi thêm mới!", "Thông báo"))
          })
        })
      ).subscribe();
    }
  }

  openDialogEquipment() {
    const dialogRef = this.dialog.open(ChooseEquipmentComponent,
      {width: '700px'});
  }

  getArea() {
    this.meetingService.getArea().subscribe((data) => {
      this.areaList = data;
    }, error => console.log('data area error'))
  }

  getTypeMeetingRoom() {
    this.meetingService.getTypeMeetingRoom().subscribe((data) => {
      this.typeMeetingRoom = data;
    }, error => console.log('data type meeting room error'))
  }

  getRoomStatus() {
    this.meetingService.getRoomStatus().subscribe((data) => {
      this.statusRoomList = data;
    }, error => console.log('data Room status error'))
  }


  showImage($event: any) {
    this.inputImage = $event.target.files[0];

    this.createMeetingRoom.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.inputImage);
  }

  getImageUrl() {
    if (this.filePath != null) {
      return this.filePath;
    }
    if (this.createMeetingRoom.value.imageUrl != null) {
      return this.createMeetingRoom.value.imageUrl;
    }
    console.log(this.defaultImage)
    return this.defaultImage;
  }
}
