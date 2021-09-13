import { Component, OnInit } from '@angular/core';
import {FeedbackTechnicalService} from "../../../../service/FeedbackTechnical/feedback-technical.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FeedBack} from "../../../../model/FeedBack";

@Component({
  selector: 'app-feedback-technical',
  templateUrl: './feedback-technical.component.html',
  styleUrls: ['./feedback-technical.component.css'],

})
export class FeedbackTechnicalComponent implements OnInit {

  feedBack : FeedBack[];

  constructor(  private feedBacks:FeedbackTechnicalService,
                private router: Router,
                public snackBar: MatSnackBar) { }

  public maxDate = new Date();
  public minDate = new Date(1900, 1,1)

  ngOnInit(): void {
  }
  createFeedbackTech = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    dateFeedback:new FormControl('',[Validators.required]),
    imageFeedBackList:new FormControl('',[Validators.required]),
    account:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required])

  });

  addFeedbackTech(){
    this.feedBacks.addFeedback(this.createFeedbackTech.value).subscribe(()=>{
      this.router.navigateByUrl('feedback');
       this.snackBar.open("Create successfully!", "Done");
    }, error => console.log(error))
  }


}
