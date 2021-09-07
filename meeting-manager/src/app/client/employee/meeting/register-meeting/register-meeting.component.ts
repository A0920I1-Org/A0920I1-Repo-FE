import {Component, OnInit} from '@angular/core';
import {RegisterHistoryService} from '../../../../service/RegisterHistoryService';
import {TypeMeetingRoomService} from '../../../../service/TypeMeetingRoomService';
import {StatusRoomService} from '../../../../service/StatusRoomService';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeMeetingRoom} from '../../../../model/entity/TypeMeetingRoom';
import {RoomStatus} from '../../../../model/entity/RoomStatus';
import {OrderMeeting} from '../../../../model/entity/OrderMeeting';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

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
    private toastrService: ToastrService,
    private router: Router
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
      nameRoom: new FormControl(null),
      dateCheckin: new FormControl(null),
      dateCheckout: new FormControl(null),
      statusRoom: new FormControl(null),
      typeMeetingRoom: new FormControl(null),
      createAt: new FormControl(null)
    });
    // đưa tham số account id vào getRegisterHistory
    this.registerHistoryService.getRegisterHistory().subscribe(
      (data) => {
        console.log(data);
        this.registerHistory = data;
      }
    );
    this.typeMeetingRoomService.getTypesMeetingRoom().subscribe(
      (data) => {
        console.log(data);
        this.typesMeetingRoom = data;
      }
    );
    this.statusRoomService.getStatusRoom().subscribe(
      (data) => {
        console.log(data);
        this.statusRoom = data;
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

  checkIsDelete(idOrder: any) {
    console.log('Id Oder' + idOrder);
    this.registerHistoryService.checkIsDelete(idOrder).subscribe(
      (data) => {
        // tslint:disable-next-line:triple-equals
        if (data === true) {
          this.toastrService.error('Bạn đã huỷ đặt phòng này!',
            'Thông báo');
          // this.router.navigateByUrl('register');
        }
        if (data === false) {
          this.router.navigate(['/deleteRegisterMeeting/', idOrder]);
        }
      }
    );
  }
}
