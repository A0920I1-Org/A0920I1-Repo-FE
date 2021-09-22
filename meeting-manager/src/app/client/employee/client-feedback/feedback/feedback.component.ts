import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {FeedbackService} from '../../../../service/feedback.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FeedBack} from '../../../../model/entity/FeedBack';
import {Account} from "../../../../model/entity/Account";
import {MeetingRoom} from "../../../../model/entity/MeetingRoom";
import {FeedBackType} from "../../../../model/entity/FeedBackType";
import {FeedbackTechnicalService} from "../../../../service/FeedbackTechnical/feedback-technical.service";
import {MeetingRoomService} from "../../../../service/meeting-room.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  formCreateFeedback: FormGroup;
  feedback: FeedBack[];
  account : Account[];
  meetingRoom:MeetingRoom[];
  feedBackType: FeedBackType[];


  constructor( private  router: Router,
               private  feedbackService: FeedbackService,
            private meetingService: MeetingRoomService
  ) { }
  public maxDate = new Date();
  public minDate = new Date(2000 ,1,1);
  // VietNT feedback
  ngOnInit(): void {
    this.getAllMeetingroom()
    this.getAllFeedbackType();
    this.formCreateFeedback = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('' , [Validators.required, Validators.minLength(6)] ),
      description: new  FormControl('', [Validators.required, Validators.minLength(6)]),
      dateFeedback:  new  FormControl('', [Validators.required]),
      Handle:  new  FormControl('', [Validators.required]),
      feedBackType:  new  FormControl('', [Validators.required]),
      account:  new  FormControl('', [Validators.required, ]),
      meetingRoom:  new  FormControl('', [Validators.required, ]),
    });
  }
  getAllFeedbackType(){
    this.feedbackService.findAllFeedbackType().subscribe(data =>{

      this.feedBackType = data;
    });
  }
  getAllMeetingroom(){
    this.meetingService.getMeetingRoom().subscribe(data =>{

      this.meetingRoom= data;
    })
  }
  save(){
    this.formCreateFeedback.patchValue({dateFeedback: this.maxDate})
    this.feedbackService.create(this.formCreateFeedback.value).subscribe(data => {


      this.router.navigateByUrl('list');
    });

  }

  // VietNT : toastrService here
}
