import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {FeedbackService} from '../../../../service/feedback.service';
import {FeedbackTypeService} from '../../../../service/feedback-type.service';
import {FeedBack} from '../../../../model/entity/FeedBack';
import {FeedBackType} from '../../../../model/entity/FeedBackType';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})

// VietNT list-feedback
export class FeedbackListComponent implements OnInit {

  public feedback: FeedBack[];
  public feedbackType: FeedBackType[];
  page = 1;
  constructor(private  feedbackTypeService: FeedbackTypeService,
              private router: Router,
              private  feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.feedbackService.findAll().subscribe(data => {
      this.feedback = data;


    });
    this.feedbackService.findAllFeedbackType().subscribe(data => {

    });
  }
}
