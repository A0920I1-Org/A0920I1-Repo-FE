import {Component, OnInit} from '@angular/core';
import {MeetingRoomSerivce} from '../../../../service/MeetingRoomSerivce';
import {TypeMeetingRoomService} from '../../../../service/TypeMeetingRoomService';
import {RegisterHistoryService} from '../../../../service/RegisterHistoryService';
import {OrderMeeting} from '../../../../model/entity/OrderMeeting';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

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
  registerHistory: OrderMeeting;
  idOrder: any;
  deleteForm: FormGroup;
  constructor(
    private registerHistoryService: RegisterHistoryService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
    this.deleteForm = new FormGroup({
      reasonDelete: new FormControl(null)
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idOrder = (paramMap.get('id'));
      this.registerHistoryService.findOrderById(this.idOrder).subscribe(
        (data) => {
          this.registerHistory = data;
        }
      );
    });
  }
  onSubmitDelete(deleteForm: FormGroup) {
    console.log(deleteForm.value);
    this.registerHistoryService.deleteOrderMeeting(this.idOrder, deleteForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('register-history');
      }, error => console.log(error)
    );
  }
}
