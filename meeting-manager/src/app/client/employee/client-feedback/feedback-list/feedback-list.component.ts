import { Component, OnInit } from '@angular/core';
import {FeedBack} from '../../../../model/FeedBack';

import {Router} from '@angular/router';
import {FeedbackService} from '../../../../service/feedback.service';
import {FeedBackType} from '../../../../model/FeedBackType';
import {FeedbackTypeService} from '../../../../service/feedback-type.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})

// VietNT list-feedback
export class FeedbackListComponent implements OnInit {

  public feedback: FeedBack[];
  public feedbackType: FeedBackType[];
  private page = 1;
  constructor(private  feedbackTypeService: FeedbackTypeService,
              private router: Router,
              private  feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.feedbackService.findAll().subscribe(data => {
      this.feedback = data;
      console.log(data);

    });
    this.feedbackService.findAllFeedbackType().subscribe(data => {
      console.log(data);
    });
  }
}
