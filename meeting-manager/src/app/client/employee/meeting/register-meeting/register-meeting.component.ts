import { Component, OnInit } from '@angular/core';
import {RegisterHistoryService} from '../../../../service/RegisterHistoryService';
import {TypeMeetingRoomService} from '../../../../service/TypeMeetingRoomService';
import {StatusRoomService} from '../../../../service/StatusRoomService';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeMeetingRoom} from '../../../../model/entity/TypeMeetingRoom';
import {RoomStatus} from '../../../../model/entity/RoomStatus';
import {OrderMeeting} from '../../../../model/entity/OrderMeeting';

@Component({
  selector: 'app-register-meeting',
  templateUrl: './register-meeting.component.html',
  styleUrls: ['./register-meeting.component.css'],
  providers: [RegisterHistoryService, TypeMeetingRoomService, StatusRoomService]
})
export class RegisterMeetingComponent implements OnInit {
  findRegisterHistoryForm: FormGroup;
  typesMeetingRoom: TypeMeetingRoom[];
  statusRoom: RoomStatus[];
  registerHistory: OrderMeeting[];
  page = 1;

  constructor(
    private registerHistoryService: RegisterHistoryService,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private statusRoomService: StatusRoomService
  ) {
    this.typeMeetingRoomService.getTypesMeetingRoom().subscribe(
      (data) => {
        this.typesMeetingRoom = data;
      }
    );
    this.statusRoomService.getStatusRoom().subscribe(
      (data) => {
        this.statusRoom = data;
      }
    );
  }

  ngOnInit(): void {
    this.findRegisterHistoryForm = new FormGroup({
      nameRoom : new FormControl(null),
      dateCheckin : new FormControl(null),
      dateCheckout : new FormControl(null),
      statusRoom : new FormControl(null),
      typeMeetingRoom : new FormControl(null),
      createAt : new FormControl(null)
    });
    // đưa tham số account id vào getRegisterHistory
    this.registerHistoryService.getRegisterHistory().subscribe(
      (data) => {
        console.log(data);
        this.registerHistory = data;
      }
    );
  }

  onSubmit(findRegisterHistory: FormGroup) {
    console.log(findRegisterHistory.value);
    this.registerHistoryService.searchRegistration(findRegisterHistory.value, '1').subscribe(
    (data) => {
      console.log(data);
      this.registerHistory = data;
    }
    );
  }
}
