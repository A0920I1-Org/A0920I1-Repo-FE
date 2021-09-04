import { Component, OnInit } from '@angular/core';
import {RegisterHistoryService} from '../../../../service/RegisterHistoryService';
import {TypeMeetingRoomService} from '../../../../service/TypeMeetingRoomService';
import {StatusRoomService} from '../../../../service/StatusRoomService';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeMeetingRoom} from '../../../../model/entity/TypeMeetingRoom';
import {RoomStatus} from '../../../../model/entity/RoomStatus';
import {Router} from '@angular/router';
import {OrderMeeting} from '../../../../model/entity/OrderMeeting';
import {MatDialog} from '@angular/material/dialog';
import {DialogUnsubcribeComponent} from '../delete-meeting/dialog-unsubcribe/dialog-unsubcribe.component';

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
    private statusRoomService: StatusRoomService,
    // private router: Router,
    private dialog: MatDialog
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
    this.registerHistoryService.getRegisterHistory().subscribe(
      (data) => {
        this.registerHistory = data;
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
  }

  onSubmit(findRegisterHistory: FormGroup) {
    this.registerHistoryService.searchRegistration(findRegisterHistory.value).subscribe(
    (data) => {
      this.registerHistory = data;
    }
    );
  }

  openDialogUnsubcire(id: number) {
    const dialogRef = this.dialog.open(DialogUnsubcribeComponent, {
      data : {
        id
      },
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }
}
