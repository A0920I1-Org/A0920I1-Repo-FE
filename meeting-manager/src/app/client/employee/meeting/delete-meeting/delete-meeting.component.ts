import {Component, Input, OnInit} from '@angular/core';
import {MeetingRoomSerivce} from '../../../../service/MeetingRoomSerivce';
import {TypeMeetingRoomService} from '../../../../service/TypeMeetingRoomService';
import {RegisterHistoryService} from '../../../../service/RegisterHistoryService';
import {OrderMeeting} from '../../../../model/entity/OrderMeeting';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Location } from '@angular/common';


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
    private router: Router,
    private toastrService: ToastrService,
    private location: Location
  ) {
  }
  ngOnInit(): void {
    this.deleteForm = new FormGroup({
      reasonDelete: new FormControl(null)
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idOrder = (paramMap.get('idOrder'));
      this.registerHistoryService.findOrderById(this.idOrder).subscribe(
        (data) => {
          console.log(data);
          this.registerHistory = data;
          console.log(this.registerHistory.meetingRoom.imageUrl);
        }
      );
    });
  }
  onSubmitDelete(deleteForm: FormGroup) {
    console.log('notification');
    this.toastrService.success('Bạn đã huỷ đặt phòng thành công !');
    console.log(deleteForm.value);
    this.registerHistoryService.deleteOrderMeeting(this.idOrder, deleteForm.value).subscribe(
      () => {
        this.location.back();
      }, error => console.log(error)
    );
  }
  // push 12/9
  comebackRegisterHistory() {
    this.location.back();
  }
}
