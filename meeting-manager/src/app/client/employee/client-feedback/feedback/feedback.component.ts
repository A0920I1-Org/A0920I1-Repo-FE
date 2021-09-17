import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FeedBack} from '../../../../model/FeedBack';
import { Router} from '@angular/router';
import {FeedbackService} from '../../../../service/feedback.service';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  formCreateFeedback: FormGroup;
  public feedback: FeedBack[];

  constructor( private  router: Router,
               private  feedbackService: FeedbackService,
               private  snackBar: MatSnackBar
            ) { }
  public maxDate = new Date();
  public minDate = new Date(2000, 1, 1);
  // VietNT feedback
  ngOnInit(): void {
   // @ts-ignore
    // @ts-ignore
    this.formCreateFeedback = new FormGroup({
     id: new FormControl(''),
    title: new FormControl('' , [Validators.required, Validators.minLength(6)] ),
    description: new  FormControl('', [Validators.required, Validators.minLength(6)]),
    dateFeedback:  new  FormControl('', [Validators.required]),
    IsHandle:  new  FormControl('', [Validators.required]),
    feedBackType:  new  FormControl('', [Validators.required]),
    account:  new  FormControl('', [Validators.required, ]),
    meetingRoom:  new  FormControl('', [Validators.required, ]),
   });
  }
  get title(){
    return this.formCreateFeedback .get('title');
  }
  get description(){
    return this.formCreateFeedback .get('description');
  }
  get dateFeedback(){
    return this.formCreateFeedback .get('dateFeedback');
  }
  get IsHandle(){
    return this.formCreateFeedback .get('IsHandle');
  }
  get feedBackType(){
    return this.formCreateFeedback .get('feedBackType');
  }
  get account(){
    return this.formCreateFeedback .get('account');
  }
  get meetingRoom(){
    return this.formCreateFeedback .get('meetingRoom');
  }

   save(){
            this.feedbackService.create(this.formCreateFeedback.value).subscribe(data => {
             console.log(data);

             this.router.navigateByUrl('list');
            });

   }

  snackbar(message, action) {
    this.snackBar.open(message, action);

  }
}
