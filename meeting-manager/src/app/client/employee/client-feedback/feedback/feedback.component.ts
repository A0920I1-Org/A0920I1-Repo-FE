import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FeedbackService} from '../../../../service/feedback.service';
import {FeedBack} from '../../../../model/entity/FeedBack';
import {Account} from "../../../../model/entity/Account";
import {MeetingRoom} from "../../../../model/entity/MeetingRoom";
import {FeedBackType} from "../../../../model/entity/FeedBackType";
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from "../../../../service/authentication.service";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: FeedBack[];
  account: Account[];
  meetingRoom: MeetingRoom[];
  feedBackType: FeedBackType[];
  idAccount: number;
  accounts: Account;



  constructor(private router: Router,
              private feedbackService: FeedbackService,
              private toastrService: ToastrService,
              public authService: AuthenticationService){
    this.authService.newUser.subscribe(data =>{
      if(data != null){
        this.accounts = data;
        this.idAccount = this.accounts.id;
      }

    });
  }


  validation_messages = {
    title: [
      {type: 'required', message: '*Tiêu đề không được bỏ trống.'},
      {type: 'maxlength', message: '*Tiêu đề đa 50 kí tự bao gồm khoảng trắng.'},
      {type: 'minlength', message: ' *Tiêu đề có ít nhất 4 kí tự.'},
      {type: 'pattern', message: '*Tiêu đề không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
    ],
    meetingRoom: [
      {type: 'required', message: '*Vui lòng chọn phòng cần phản hồi'},

    ],
    feedBackType: [
      {type: 'required', message: '*Vui lòng loại lỗicần phản hồi'},

    ],
    description: [
      {type: 'required', message: '*Nội dung không được bỏ trống.'},
      {type: 'maxlength', message: '*Nội dung đa 250 kí tự bao gồm khoảng trắng.'},
      {type: 'minlength', message: ' *Nội dung có ít nhất 20 kí tự.'},
      {type: 'pattern', message: '*Tiêu đề không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
    ],

  };

  public maxDate = new Date()
  formCreateFeedback = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/),
      Validators.required, Validators.maxLength(50), Validators.minLength(4)]),
    description: new FormControl('', [Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/),
      Validators.required, Validators.maxLength(250), Validators.minLength(20)]),
    dateFeedback: new FormControl('',),
    Handle: new FormControl('',),
    feedBackType: new FormControl('', [Validators.required]),
    account: new FormControl('',),
    meetingRoom: new FormControl('', [Validators.required,]),

  });

  // VietNT feedback
  ngOnInit(): void {

    this.formCreateFeedback.reset();
    this.getAllMeetingroom()
    this.getAllFeedbackType();


  }

  getAllFeedbackType() {
    this.feedbackService.findAllFeedbackType().subscribe(data => {
      console.log(data)
      this.feedBackType = data;
    });
  }

  getAllMeetingroom() {
    this.feedbackService.getMeetingRoom().subscribe(data => {
      console.log(data);
      this.meetingRoom = data;
    })
  }

  save() {
    if (this.formCreateFeedback.invalid) {
      this.toastrService.error(' Xin lỗi Bạn đã  phản hồi không thành công!', 'Thông báo')
      return;
    }
    this.formCreateFeedback.patchValue({account: this.idAccount})
    this.formCreateFeedback.patchValue({dateFeedback: this.maxDate})
    this.feedbackService.create(this.formCreateFeedback.value).subscribe(data => {
      this.toastrService.success('Bạn đã phản hồi thành công!', 'Thông báo')
      console.log(data)
      this.router.navigateByUrl('list-feedback-user');
    });

  }
}
