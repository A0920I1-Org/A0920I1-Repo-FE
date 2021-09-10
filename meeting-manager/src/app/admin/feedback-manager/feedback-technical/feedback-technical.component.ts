import { Component, OnInit } from '@angular/core';
import {FeedBack} from "../../../model/FeedBack";
import {FeedbackTechnicalService} from "../../../service/FeedbackTechnical/feedback-technical.service";

@Component({
  selector: 'app-feedback-technical',
  templateUrl: './feedback-technical.component.html',
  styleUrls: ['./feedback-technical.component.css']
})
export class FeedbackTechnicalComponent implements OnInit {

  feedback: FeedBack[];
  p:number =1;
  firstName:any;
  constructor(
    private feedbackService:FeedbackTechnicalService
  ) { }

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe(
      (data ) =>{
        console.log(data);
        this.feedback = data;
      }
    )
  }

  key:string = 'id';
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


}
