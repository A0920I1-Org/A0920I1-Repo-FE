import { Component, OnInit } from '@angular/core';
import {MeetingRoom} from '../../../../model/MeetingRoom';
import {MeetingRoomService} from '../../../../service/meeting-room.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteMeetingComponent} from '../delete-meeting/delete-meeting.component';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {

  page = 1;
  meetingRoomList: MeetingRoom[] = [];
  constructor(
    private meetingRoomService : MeetingRoomService ,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.meetingRoomService.getMeetingRoom().subscribe((data) => {
      this.meetingRoomList = data;
    });
  }

  openDialogDelete(id){
    this.meetingRoomService.get(id).subscribe( data => {
      // console.log(data);
      const dialogRef =   this.dialog.open(DeleteMeetingComponent , {
        width: '700px',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe( result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
