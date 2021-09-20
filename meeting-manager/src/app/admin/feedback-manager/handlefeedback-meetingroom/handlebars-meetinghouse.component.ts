import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../../service/feedback.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FeedBack} from '../../../model/entity/FeedBack';

import {MeetingRoom} from "../../../model/entity/MeetingRoom";

@Component({
  selector: 'app-handlefeedback-meetingroom',
  templateUrl: './handlebars-meetinghouse.component.html',
  styleUrls: ['./handlebars-meetinghouse.component.css']
})
export class HandlebarsMeetinghouseComponent implements OnInit {
  handleFeedback: FormGroup;
  idFeedback: number;
  editFeedback: FeedBack;
   account : Account[];
  meetingRoom:MeetingRoom[];

  constructor(private feedbackService: FeedbackService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllAccount();
    this.handleFeedback = this.fb.group({
      id: [('')],
      title: [('')],
      description: [('')],
      dateFeedback: [('')],
      handle: [('')],
      feedBackType: [('')],
      account: [('')],
      meetingRoom: [('')],
      content: [('')]
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.idFeedback = parseInt(paramMap.get('idfeedback'));
      this.feedbackService.findById(this.idFeedback).subscribe((data) => {
        this.editFeedback = data;
        console.log(this.editFeedback);
        this.handleFeedback.patchValue({
          id: this.editFeedback.id,
          title: this.editFeedback.title,
          description: this.editFeedback.description,
          dateFeedback: this.editFeedback.dateFeedback,
          IsHandle: this.editFeedback.handle,
          feedBackType: this.editFeedback.feedBackType.name,
          account: this.editFeedback.account.fullname,
          meetingRoom: this.editFeedback.meetingRoom.name,
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
  handle() {
    this.feedbackService.updateFeedback(this.handleFeedback.value).subscribe((data) => {
      this.router.navigateByUrl('list-feedbackadmin');
    });
  }
}

