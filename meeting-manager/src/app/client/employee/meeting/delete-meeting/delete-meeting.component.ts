import {Component, OnInit} from '@angular/core';
import {MeetingRoom} from '../../../../model/entity/MeetingRoom';
import {MeetingRoomSerivce} from '../../../../service/MeetingRoomSerivce';
import {TypeMeetingRoomService} from '../../../../service/TypeMeetingRoomService';
import {RegisterHistoryService} from '../../../../service/RegisterHistoryService';
import {TypeMeetingRoom} from '../../../../model/entity/TypeMeetingRoom';
import {OrderMeeting} from '../../../../model/entity/OrderMeeting';

@Component({
  selector: 'app-delete-meeting',
  templateUrl: './delete-meeting.component.html',
  styleUrls: ['./delete-meeting.component.css'],
  providers: [
    MeetingRoomSerivce,
    TypeMeetingRoomService,
    RegisterHistoryService,
  ]
})
export class DeleteMeetingComponent implements OnInit {
  meetingRoom: MeetingRoom;
  typeMeetingRoom: TypeMeetingRoom;
  registerHistory: OrderMeeting;

  constructor(
    private meetingRoomService: MeetingRoomSerivce,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private registerHistoryService: RegisterHistoryService,
  ) {
    // this.meetingRoomService.getMeetingRoom().subscribe(
    //   (data) => {
    //     this.meetingRoom = data;
    //   }
    // );
    // this.typeMeetingRoomService.getTypesMeetingRoom().subscribe(
    //   (data) => {
    //     this.typeMeetingRoomService
    //   }
    // )
  }

  ngOnInit(): void {
  }

}
