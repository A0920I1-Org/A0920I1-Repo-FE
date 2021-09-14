import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {Area} from '../../../models/Area';
import {TypeMeetingRoom} from '../../../models/TypeMeetingRoom';
import {RoomStatus} from '../../../models/RoomStatus';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderEquipment} from '../../../models/OrderEquipment';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {MatDialog} from '@angular/material/dialog';
import {ChooseEquipmentComponent} from './choose-equipment/choose-equipment.component';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

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

  selectedFile: any;
  ref: AngularFireStorageReference;
  downloadURL: string;
  checkUpLoadAvt = false;
  @Output()
  giveURL = new EventEmitter<string>();

  constructor(
    private toastService: ToastrService,
    private meetingService: MeetingRoomService,
    private router: Router, private form: FormBuilder,
    public dialog: MatDialog,
  @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) { }

  createMeetingRoom = this.form.group({
    name:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\\+]*$')]],
    floors:['', [Validators.required, Validators.pattern('^[0-9]{1,10}$')]],
    areaDto:['', [Validators.required]],
    roomStatusDto:['', [Validators.required]],
    typeMeetingRoomDto:['', [Validators.required]],
    imageUrl:['', [Validators.required]],
    // equipment: this.form.array([''])
  });

  validation_messages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên phòng!'},
      {type: 'minlength', message: 'Vui lòng nhập tên phòng có ít nhất 4 kí tự!'},
      {type: 'pattern', message: 'Nhập tên không hợp lệ!'}
    ],
    floors: [
      {type: 'required', message: 'Vui lòng nhập số tầng!'},
      {type: 'minlength', message: 'Vui lòng nhập ít nhất 1 số!'},

    ],
    areaDto: [
      {type: 'required', message: 'Vui lòng chọn khu vực!'},
    ],
    roomStatusDto: [
      {type: 'required', message: 'Vui lòng chọn trạng thái phòng!'}
    ],
    typeMeetingRoomDto: [
      {type: 'required', message: 'Vui lòng chọn loại phòng!'}
    ],
    imageUrl: [
      {type: 'required', message: 'Vui lòng chọn ảnh!'},
      {type: 'pattern', message: 'Bạn chọn không đúng file ảnh!'}
    ]
  };

  ngOnInit(): void {
    this.getArea();
    this.getRoomStatus();
    this.getTypeMeetingRoom();
  }

  onUpLoad(){
    this.checkUpLoadAvt = true;
    const id = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile)
      .then(snapshot =>{
        return snapshot.ref.getDownloadURL();
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.giveURL.emit(this.downloadURL)
        this.checkUpLoadAvt = false;
        return downloadURL;
      })
      .catch(error => {
        console.log('error');
      })
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

  onSubmit(){
    const nameImage = this.getCurrentDateTime() + this.selectedFile.name;
    const fileRef = this.storage.ref(nameImage);


    // chưa set name khi up firebase
    this.storage.upload(nameImage, this.selectedFile).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.downloadURL = url;
          this.createMeetingRoom.patchValue({imageUrl: url});

          this.meetingService.addMeetingRoom(this.createMeetingRoom.value).subscribe(() => {
            this.router.navigateByUrl('').then(e => this.toastService.success("Thêm mới thành công!", "Thông báo"))
          }, error => this.toastService.error("Lỗi thêm mới!", "Thông báo"))
        })
      })
    ).subscribe();
  }

  openDialogEquipment(){
    const dialogRef = this.dialog.open(ChooseEquipmentComponent,
      { width: '700px'});
  }

  getArea(){
    this.meetingService.getArea().subscribe((data) => {
      this.areaList = data;
    }, error => console.log('data area error'))
  }

  getTypeMeetingRoom(){
    this.meetingService.getTypeMeetingRoom().subscribe((data) => {
      this.typeMeetingRoom = data;
    }, error => console.log('data type meeting room error'))
  }

  getRoomStatus(){
    this.meetingService.getRoomStatus().subscribe((data) => {
      this.statusRoomList = data;
    }, error => console.log('data Room status error'))
  }


  showImage($event: any) {
    this.selectedFile = $event.target.files[0];
  }
}
