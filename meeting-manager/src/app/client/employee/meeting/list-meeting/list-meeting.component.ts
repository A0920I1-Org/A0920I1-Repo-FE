import { Component, OnInit } from '@angular/core';
import {MeetingRoom} from '../../../../models/MeetingRoom';
import {MeetingRoomService} from '../../../../service/meeting-room.service';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {

  page = 1;
  meetingRoomList: MeetingRoom[] = [];
  constructor(
    private meetingService: MeetingRoomService
  ) { }

  ngOnInit(): void {
    this.meetingService.getMeetingRoom().subscribe((data) => {
      this.meetingRoomList = data;
      console.log("success~");
    }, error => console.log("Error in list component"))
  }

}
