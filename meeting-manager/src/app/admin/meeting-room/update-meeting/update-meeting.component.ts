import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EquipmentService} from '../../../service/equipment.service';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {TypeMeetingRoom} from '../../../model/entity/TypeMeetingRoom';
import {RoomStatus} from '../../../model/entity/RoomStatus';
import {OrderEquipment} from '../../../model/entity/OrderEquipment';
import {MeetingRoom} from '../../../model/entity/MeetingRoom';
import {Area} from '../../../model/entity/Area';
import {ChooseEquipmentComponent} from "../create-meeting/choose-equipment/choose-equipment.component";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {
  idMeeting: number;
  areaList: Area[];
  typeMeetingRoom: TypeMeetingRoom[];
  statusRoomList: RoomStatus[];
  equipmentList: OrderEquipment[];
  imgUpdate: any;
  editMeetingRoom: FormGroup;
  meetingRoom: MeetingRoom;
  filePath: string =  null;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';
  constructor(
    private fb: FormBuilder,
    private equipmentService: EquipmentService,
    private meetingRoomService: MeetingRoomService,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    private active: ActivatedRoute,
    private router: Router,
    @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) {
  }

  ngOnInit(): void {

    this.editMeetingRoom = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\\+]*$'), Validators.minLength(4), Validators.maxLength(10)]],
      floors: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$')]],
      area: ['', [Validators.required]],
      roomStatus: ['', [Validators.required]],
      typeMeetingRoom: ['', [Validators.required]],
      // capacity: ['', Validators.required],
      imageUrl: ['']
      // orderEquipmentList: ['', Validators.required]
    });

    //list khu vực
    this.meetingRoomService.getArea().subscribe((data) => {
      this.areaList = data;

      //list trạng thái phòng
      this.meetingRoomService.getRoomStatus().subscribe((data) => {
        this.statusRoomList = data;

        // list loại phòng
        this.meetingRoomService.getTypeMeetingRoom().subscribe((data) => {

          this.typeMeetingRoom = data;

          this.active.paramMap.subscribe((paramMap: ParamMap) => {
            this.idMeeting = parseInt(paramMap.get('id'));
            this.meetingRoomService.getMeetingById(this.idMeeting).subscribe((data) => {
              this.meetingRoom = data;
              // console.log(this.editMeetingRoom);
              this.editMeetingRoom.patchValue({
                id: this.meetingRoom.id,
                name: this.meetingRoom.name,
                floors: this.meetingRoom.floors,
                area: this.meetingRoom.area.id,
                roomStatus: this.meetingRoom.roomStatus.id,
                typeMeetingRoom: this.meetingRoom.typeMeetingRoom.id,
                // capacity:this.meetingRoom.typeMeetingRoom.capacity,
                imageUrl: this.meetingRoom.imageUrl
              });
            });
          });
        });
      });
    });
  }

  validation_messages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên phòng.'},
      {type: 'minlength', message: 'Vui lòng nhập tên phòng có ít nhất 4 kí tự.'},
      {type: 'maxlength', message: 'Vui lòng nhập tên phòng có nhiều nhất 10 kí tự.'},
      {type: 'pattern', message: 'Nhập tên phòng không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
    ],
    floors: [
      {type: 'required', message: 'Vui lòng nhập số tầng.'},
      {type: 'minlength', message: 'Vui lòng nhập ít nhất 1 số.'},
      {type: 'maxlength', message: 'tối đa 10 số.'},
      {type: 'pattern', message: 'Nhập tầng không hợp lệ.'}

    ],
    area: [
      {type: 'required', message: 'Vui lòng chọn khu vực!'},
    ],
    roomStatus: [
      {type: 'required', message: 'Vui lòng chọn trạng thái phòng!'}
    ],
    typeMeetingRoom: [
      {type: 'required', message: 'Vui lòng chọn loại phòng!'}
    ],
    imageUrl: [
      {type: 'required', message: 'Vui lòng chọn ảnh!'},
      {type: 'pattern', message: 'Bạn chọn không đúng file ảnh!'}
    ]
  };

  updateMeetingRoom() {
    this.meetingRoomService.updateMeetingRoom(this.editMeetingRoom.value).subscribe( data =>{

      this.toastrService.success('Bạn đã sửa thành công!', 'Thông báo');
      this.router.navigateByUrl('/list-meeting');

      }
    );

  }
  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
  onSubmit(){
    const nameImage = this.getCurrentDateTime() + this.imgUpdate.name;
    const fileRef = this.storage.ref(nameImage);

    // chưa set name khi up firebase
    this.storage.upload(nameImage, this.imgUpdate).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.editMeetingRoom.patchValue({imageUrl: url});
          this.updateMeetingRoom();
        });
      })
    ).subscribe();
  }
  showImage($event: any) {
    this.imgUpdate = $event.target.files[0];
  }

  openDialogEquipment(){
    const dialogRef = this.dialog.open(ChooseEquipmentComponent,
      { width: '700px'});
  }

  getImageUrl(){
    if (this.filePath != null){
      return this.filePath;
    }
    if (this.editMeetingRoom.value.imageUrl != null){
      return this.editMeetingRoom.value.imageUrl;
    }
    return this.defaultImage;
  }

}

