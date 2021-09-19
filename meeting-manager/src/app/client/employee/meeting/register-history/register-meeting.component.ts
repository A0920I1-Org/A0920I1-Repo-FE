import {Component, Input, OnInit} from '@angular/core';
import {RegisterHistoryService} from '../../../../service/RegisterHistoryService';
import {TypeMeetingRoomService} from '../../../../service/TypeMeetingRoomService';
import {StatusRoomService} from '../../../../service/StatusRoomService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeMeetingRoom} from '../../../../model/entity/TypeMeetingRoom';
import {RoomStatus} from '../../../../model/entity/RoomStatus';
import {OrderMeeting} from '../../../../model/entity/OrderMeeting';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthenticationService} from '../../../../service/authentication.service';
import {Account} from '../../../../model/entity/Account';

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
  // hien thi lich su dang ki : tu man hinh meeting room (idMeetingRoom)
  idMeetingRoom: any;
  idAccount: any;
  page = 1;
  number: 0;
  dayNowSys: Date = new Date();
  dayNow: string;
  isResult = true;
  account: Account;

  constructor(
    private registerHistoryService: RegisterHistoryService,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private statusRoomService: StatusRoomService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    console.log('constructor');
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
    this.dayNow = this.dayNowSys.toLocaleDateString();
    console.log(this.dayNow);

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.idMeetingRoom = (paramMap.get('idMeetingRoom'));
        console.log(this.idMeetingRoom);
        // neu idMeetingRoom co gia tri
        if (this.idMeetingRoom != null) {
          this.registerHistoryService.findOrderByIdMeetingRoom(this.idMeetingRoom).subscribe(
            (data) => {
              this.registerHistory = data;
            }
          );
        }
      }
    );
    // đưa tham số account id vào getRegisterHistory
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.idAccount = (paramMap.get('idAccount'));
        console.log(this.idAccount);
        if (this.idAccount != null) {
          this.registerHistoryService.getRegisterHistory(this.idAccount).subscribe(
            (data) => {
              console.log(data);
              this.registerHistory = data;
            }
          );
        }
      }
    );
    this.findRegisterHistoryForm = new FormGroup({
      nameRoom: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')]),
      dateCheckin: new FormControl(null),
      dateCheckout: new FormControl(null),
      statusRoom: new FormControl(null),
      idTypeMeetingRoom: new FormControl(null),
      createDate: new FormControl(null)
    });
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
    // if (findRegisterHistory.value === null) {
    //   console.log(null);
    // } else {
    this.registerHistoryService.searchRegistration(findRegisterHistory.value).subscribe(
      (data) => {
        if (data.length === 0){
          this.isResult = false;
          this.registerHistory = data;
          this.toastrService.info('Không tìm thấy kết quả phù hợp', 'Thông báo');
        }
        else {
        console.log(data);
        this.registerHistory = data;
        }
      }
    );
    // }
  }

  checkIsDelete(idOrder: any) {
    console.log('Id Oder' + idOrder);
    this.registerHistoryService.checkIsDelete(idOrder).subscribe(
      (data) => {
        // tslint:disable-next-line:triple-equals
        if (data === true) {
          this.toastrService.error('Bạn đã huỷ đặt phòng này hoặc đã hết hiệu lực!',
            'Thông báo');
          this.router.navigateByUrl('register');
        }
        if (data === false) {
          this.router.navigate(['/delete-register-meeting/', idOrder]);
        }
      }
    );
  }

  resetInput() {
    this.findRegisterHistoryForm.reset();
  }
}
