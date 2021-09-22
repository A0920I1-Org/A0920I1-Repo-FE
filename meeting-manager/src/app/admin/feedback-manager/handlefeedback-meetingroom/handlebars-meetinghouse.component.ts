import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../../service/feedback.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FeedBack} from '../../../model/entity/FeedBack';

import {MeetingRoom} from "../../../model/entity/MeetingRoom";
import {Account} from "../../../model/entity/Account";
import {FeedBackType} from "../../../model/entity/FeedBackType";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-handlefeedback-meetingroom',
  templateUrl: './handlebars-meetinghouse.component.html',
  styleUrls: ['./handlebars-meetinghouse.component.css']
})
export class HandlebarsMeetinghouseComponent implements OnInit {

  idFeedback: number;
  editFeedback: FeedBack;
  account:Account[];
  handleFeedback: FormGroup
  meetingRoom:MeetingRoom[];
  feedbackType:FeedBackType[];

  constructor(private feedbackService: FeedbackService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private  toastrService: ToastrService) {
  }



  ngOnInit(): void {
    this.getAllFeedbackType()
    this.getAllMeetingroom()
    this.getAllAccount();
    this.handleFeedback = this.fb.group({
      id: [('')],
      title: [('')],
      description: [('')],
      dateFeedback: [('')],
      handle: [('')],
      feedBackType: [('')],
      account: ['',[Validators.required]],
      meetingRoom: [('')],
      content: ['',[Validators.required, Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợở' +
        'ỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$'),
        Validators.maxLength(250)]],
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {

      this.idFeedback = parseInt(paramMap.get('id'));


      this.idFeedback = parseInt(paramMap.get('idFeedback'));

      this.feedbackService.findById(this.idFeedback).subscribe((data) => {
        this.editFeedback = data;
        console.log(this.editFeedback);
        this.handleFeedback.patchValue({
          id: this.editFeedback.id,
          title: this.editFeedback.title,
          description: this.editFeedback.description,
          dateFeedback: this.editFeedback.dateFeedback,
          handle: true,
          feedBackType: this.editFeedback.feedBackType.id,
          account: this.editFeedback.account.fullname,
          meetingRoom: this.editFeedback.meetingRoom.id,
          accounts: this.editFeedback.account.username,
          content: this.editFeedback.content,

        });
      });
    });
  }
  getAllAccount(){
    this.feedbackService.getAccount().subscribe((data) =>{
      this.account =data;

    })
  }
  getAllFeedbackType(){
    this.feedbackService.findAllFeedbackType().subscribe(data =>{

      this.feedbackType = data;
    });
  }
  getAllMeetingroom(){
    this.feedbackService.getMeetingRoom().subscribe(data =>{

      this.meetingRoom= data;
    })
  }

  handle() {
    if (this.handleFeedback.invalid) {
      this.toastrService.error('Bạn đã xử lý phản hồi không thành công!', 'Thông báo')
      return;
    }
    this.feedbackService.updateFeedback(this.handleFeedback.value).subscribe((data) => {
      this.toastrService.success('Bạn đã xử lý phản hồi  thành công!', 'Thông báo')
      this.router.navigateByUrl('list-feedback-admin')
    });
  }
}
