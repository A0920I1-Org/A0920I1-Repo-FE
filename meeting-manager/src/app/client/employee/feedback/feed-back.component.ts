import { Component, OnInit } from '@angular/core';
import {FeedBack} from "../../../model/FeedBack";
import {FeedbackTechnicalService} from "../../../service/FeedbackTechnical/feedback-technical.service";

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {}

}
