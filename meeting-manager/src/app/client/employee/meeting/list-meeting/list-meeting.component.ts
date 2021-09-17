import {Component, OnInit} from '@angular/core';

import {MeetingRoomService} from '../../../../service/meeting-room.service';
import {MatDialog} from '@angular/material/dialog';

import {TypeMeetingRoomService} from '../../../../service/type-meeting-room.service';
import {AreaMeetingRoomService} from '../../../../service/area-meeting-room.service';
import {StatusRoomService} from '../../../../service/status-room.service';
import {Router} from '@angular/router';
import {DeleteMeetingRoomComponent} from '../../../../admin/meeting-room/delete-meeting/delete-meeting-room.component';
import {Area} from '../../../../model/entity/Area';
import {TypeMeetingRoom} from '../../../../model/entity/TypeMeetingRoom';
import {RoomStatus} from '../../../../model/entity/RoomStatus';
import {MeetingRoom} from '../../../../model/entity/MeetingRoom';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {

  areaList: Area[];
  typeMeetingRoomList: TypeMeetingRoom[];
  statusRoomList: RoomStatus[];


  nameMeeting: any;
  floors: any;
  area_id: any;
  room_status_id: any;
  type_meeting_room_id: any;
  capacity: any;
  page = 1;
  meetingRoomList: MeetingRoom[] = [];
  searchNull: null ;

  key: string = 'id';
  reverse: boolean = false;
  private totalPage: any;

  constructor(
    private typeMeetingRoomService: TypeMeetingRoomService,
    private areaService: AreaMeetingRoomService,
    private statusRoomService: StatusRoomService,
    private meetingRoomService: MeetingRoomService,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //danh sách khu vực
    this.areaService.getAllArea().subscribe((data) => {
      this.areaList = data;
      //danh sách loại phòng
      this.typeMeetingRoomService.getTypesMeetingRoom().subscribe((data) => {
        this.typeMeetingRoomList = data;
        // danh sách trạng thái
        this.statusRoomService.getStatusRoom().subscribe((data) => {
          this.statusRoomList = data;
          //danh sách phòng họp
          this.meetingRoomService.getMeetingRoom().subscribe((data) => {
            this.meetingRoomList = data;
          });
        });

      });

    });

  }

  openDialogDelete(id) {
    this.meetingRoomService.getMeetingById(id).subscribe(data => {
      // console.log(data);
      const dialogRef = this.dialog.open(DeleteMeetingRoomComponent, {
        width: '700px',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  search() {
    this.meetingRoomService.search(this.nameMeeting, this.floors, this.area_id, this.room_status_id, this.type_meeting_room_id, this.capacity).subscribe(data => {
      this.meetingRoomList = data;
      this.page = 1;
    });
  }


  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }


  // getListEmployee(): void {
  //   this.meetingRoomService.getMeetingRoom(this.page).subscribe((data) => {
  //     this.meetingRoomList = data.content;
  //     console.log(data);
  //     this.totalPage = data.totalPages;
  //   });
  // }

  backToListMeeting():void {
  window.location.reload();
}
}
