import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TypeMeetingRoom} from '../../../model/TypeMeetingRoom';
import {RoomStatus} from '../../../model/RoomStatus';
import {TypeMeetingRoomService} from '../../../service/type-meeting-room.service';
import {StatusRoomService} from '../../../service/status-room.service';
import {AreaMeetingRoomService} from '../../../service/area-meeting-room.service';
import {Area} from '../../../model/Area';
import {Equipment} from '../../../model/Equipment';
import {EquipmentService} from '../../../service/equipment.service';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {

  listTypeMeetingRoom: TypeMeetingRoom[] = [];
  listRoomStatus: RoomStatus[] = [] ;
  listArea: Area[] = [] ;
  listEquipment: Equipment[] = [];


  constructor(
    private fb: FormBuilder,
    private typeMeetingRoomService: TypeMeetingRoomService ,
    private areaService: AreaMeetingRoomService,
    private statusRoomService: StatusRoomService,
    private equipmentService: EquipmentService,
    private meetingRoomService: MeetingRoomService,
    private snackBar: MatSnackBar,
    private active: ActivatedRoute,
    private router: Router,
  ){
  }

  editForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    floors: ['', Validators.required],
    imgUrl: ['', Validators.required],
    roomStatus: ['', Validators.required],
    // orderMeetingList: ['', Validators.required],
    typeMeetingRoom: ['', Validators.required],
    area: ['', Validators.required],
    orderEquipmentList: ['', Validators.required]
  });

  ngOnInit(): void {
    this.getAllTypeMeetingRoom();
    this.getAllRoomStatus();
    this.getAllArea();
    this.meetingRoomService.get(this.active.snapshot.params.id).subscribe( data => {
      this.editForm.setValue(data);
    });
  }

  updateMeetingRoom() {
    this.router.navigateByUrl('');
    this.snackBar.open('Đã sữa thành công !', 'xong');
  }

  getAllTypeMeetingRoom() {
    this.typeMeetingRoomService.getTypesMeetingRoom().subscribe( (data) => {
      console.log(data);
      this.listTypeMeetingRoom = data ;
      console.log(this.listTypeMeetingRoom);
    });

  }

  getAllRoomStatus(){
    this.statusRoomService.getStatusRoom().subscribe((data) => {
      this.listRoomStatus = data ;
      console.log(this.listRoomStatus);
    });
  }

  getAllArea(){
    this.areaService.getAllArea().subscribe((data) => {
      this.listArea = data ;
      console.log(this.listArea);
    });
  }

  getAllEquipment(){
    this.equipmentService.getEquipment().subscribe((data) => {
      this.listEquipment = data ;
      console.log(this.listEquipment);
    });
  }
}
