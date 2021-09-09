import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TypeMeetingRoom} from '../../../model/TypeMeetingRoom';
import {RoomStatus} from '../../../model/RoomStatus';
import {TypeMeetingRoomService} from '../../../service/type-meeting-room.service';
import {StatusRoomService} from '../../../service/status-room.service';
import {AreaMeetingRoomService} from '../../../service/area-meeting-room.service';
import {Area} from '../../../model/Area';
import {EquipmentService} from '../../../service/equipment.service';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderEquipment} from '../../../model/OrderEquipment';

@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {

  areaList: Area[];
  typeMeetingRoom: TypeMeetingRoom[];
  statusRoomList: RoomStatus[];
  equipmentList: OrderEquipment[];
  typeMeetingRoom1: TypeMeetingRoom;

  constructor(
    private fb: FormBuilder,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private areaService: AreaMeetingRoomService,
    private statusRoomService: StatusRoomService,
    private equipmentService: EquipmentService,
    private meetingRoomService: MeetingRoomService,
    private snackBar: MatSnackBar,
    private active: ActivatedRoute,
    private router: Router
  ) {
  }

  editForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    floors: ['', Validators.required],
    area: ['', Validators.required],
    // capacity: ['', Validators.required],
    typeMeetingRoom: ['', Validators.required]
    // imgUrl: ['', Validators.required],
    // orderEquipmentList: ['', Validators.required]
  });

  ngOnInit(): void {
    this.getArea();
    this.getRoomStatus();
    this.getTypeMeetingRoom();
    this.meetingRoomService.get(this.active.snapshot.params.id).subscribe( data => {
      this.editForm.setValue(data);
    });
    console.log(this.active.snapshot.params.id);
  }

  updateMeetingRoom() {
    // this.router.navigateByUrl('');
    // this.snackBar.open('Đã sữa thành công !', 'xong');
  }

  getArea() {
    this.areaService.getAllArea().subscribe((data) => {
      console.log(data);
      this.areaList = data;
      console.log(this.areaList);

    });
  }

  getTypeMeetingRoom() {
    this.typeMeetingRoomService.getTypesMeetingRoom().subscribe((data) => {
      console.log(data);
      this.typeMeetingRoom = data;
      console.log(this.typeMeetingRoom);

    });
  }

  getRoomStatus() {
    this.statusRoomService.getStatusRoom().subscribe((data) => {
      console.log(data);
      this.statusRoomList = data;
      console.log(this.statusRoomList);

    });
  }

  // getAllEquipment(){
  //   this.equipmentService.getEquipment().subscribe((data) => {
  //
  //   });
  // }
}
