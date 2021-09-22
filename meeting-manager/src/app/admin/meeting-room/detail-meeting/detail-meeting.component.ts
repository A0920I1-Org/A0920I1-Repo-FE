import { Component, OnInit } from '@angular/core';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MeetingRoom} from '../../../model/entity/MeetingRoom';
import {OrderEquipment} from '../../../model/entity/OrderEquipment';
import {OrderEquipmentServiceService} from "../../../service/order-equipment-service.service";


@Component({
  selector: 'app-detail-meeting',
  templateUrl: './detail-meeting.component.html',
  styleUrls: ['./detail-meeting.component.css']
})
export class DetailMeetingComponent implements OnInit {

  meetingDetails: MeetingRoom;
  numberOfUses: '10 lần';
  equipmentList: OrderEquipment[];
  images = ['../../assets/images/meeting-room.jpeg','../../assets/images/meeting-room1.jpeg','../../assets/images/meeting-room3.jpeg'];

  constructor(
    private meetingService: MeetingRoomService,
    private equipmentService: OrderEquipmentServiceService,
    private form: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.meetingService.findMeetingRoomById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.meetingDetails = data;
    }, error => console.log('error'))

    this.getEquipment();
  }

  getEquipment(){
    this.meetingService.listEquipmentByIdMeetingRoom(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.equipmentList = data;
    console.log(data);
    })

  }
}
