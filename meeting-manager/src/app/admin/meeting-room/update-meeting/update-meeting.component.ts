import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypeMeetingRoom} from '../../../model/TypeMeetingRoom';
import {RoomStatus} from '../../../model/RoomStatus';
import {TypeMeetingRoomService} from '../../../service/type-meeting-room.service';
import {StatusRoomService} from '../../../service/status-room.service';
import {AreaMeetingRoomService} from '../../../service/area-meeting-room.service';
import {Area} from '../../../model/Area';
import {EquipmentService} from '../../../service/equipment.service';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {OrderEquipment} from '../../../model/OrderEquipment';
import {MeetingRoom} from '../../../model/MeetingRoom';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
// @ts-ignore
import {ToastrService} from 'ngx-toastr';
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
  editMeetingRoom:FormGroup;
  meetingRoom: MeetingRoom;
  filePath: string =  null;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';
  constructor(
    private fb: FormBuilder,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private areaService: AreaMeetingRoomService,
    private statusRoomService: StatusRoomService,
    private equipmentService: EquipmentService,
    private meetingRoomService: MeetingRoomService,
    private snackBar: MatSnackBar,
    private toastrService: ToastrService,
    private active: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) {
  }




  ngOnInit(): void {

    this.editMeetingRoom = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      floors: ['', Validators.required],
      area: ['', Validators.required],
      roomStatus: ['', Validators.required],
      typeMeetingRoom: ['', Validators.required],
      // capacity: ['', Validators.required],
      imageUrl: ['']
      // orderEquipmentList: ['', Validators.required]
    });


    //list khu vực
    this.areaService.getAllArea().subscribe((data) => {
      this.areaList = data;

      //list trạng thái phòng
      this.statusRoomService.getStatusRoom().subscribe((data) => {
        this.statusRoomList = data;

        // list loại phòng
        this.typeMeetingRoomService.getTypesMeetingRoom().subscribe((data) => {

          this.typeMeetingRoom = data;

          this.active.paramMap.subscribe((paramMap: ParamMap) => {
            this.idMeeting = parseInt(paramMap.get('id'));
            this.meetingRoomService.getMeetingById(this.idMeeting).subscribe((data) => {
              this.meetingRoom = data;
              // console.log(this.editMeetingRoom);
              this.editMeetingRoom.patchValue({
                id : this.meetingRoom.id,
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

          //get meeting room
          // this.meetingRoomService.getMeetingById(this.active.snapshot.params.id).subscribe(data => {
          //   this.editMeetingRoom.setValue(data);
          //   console.log(data);
          // });
        });
      });
    });
  }

  updateMeetingRoom() {
    this.meetingRoomService.updateMeetingRoom(this.editMeetingRoom.value).subscribe( data =>{
      this.toastrService.success('Bạn đã sửa thành công!');
      this.router.navigateByUrl('');
      // this.snackBar.open('Đã sữa thành công !', 'xong',{duration:2000});
      }
    );

  }
  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
  onSubmit(editMeetingRoom: FormGroup){
    const nameImage = this.getCurrentDateTime() + this.imgUpdate.name;
    const fileRef = this.storage.ref(nameImage);
    console.log(this.imgUpdate);
    // chưa set name khi up firebase
    this.storage.upload(nameImage, this.imgUpdate).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.editMeetingRoom.patchValue({imageUrl: url});
          console.log(this.imgUpdate);

          this.updateMeetingRoom();
        });
      })
    ).subscribe();
  }
  showImage($event: any) {
    this.imgUpdate = $event.target.files[0];
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
