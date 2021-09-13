import { Component, OnInit } from '@angular/core';
import {FeedBack} from "../../../model/FeedBack";
import {FeedbackTechnicalService} from "../../../service/FeedbackTechnical/feedback-technical.service";

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  FeedBack :FeedBack[];
  constructor(
    private feedBackService:FeedbackTechnicalService
  ) { }

  ngOnInit(): void {
    this.feedBackService.getFeedback().subscribe(
      (data) =>{
        console.log(data);
        this.FeedBack = data;
      }
    )
  }

}
