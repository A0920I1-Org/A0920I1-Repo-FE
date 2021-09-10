import { Component, OnInit } from '@angular/core';
import {FeedBackType} from "../../../model/FeedBackType";
import {FeedbackTechnicalService} from "../../../service/FeedbackTechnical/feedback-technical.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FeedBackTechnical} from "../../../model/FeedBackTechnical";

@Component({
  selector: 'app-feedback-technical-create',
  templateUrl: './feedback-technical-create.component.html',
  styleUrls: ['./feedback-technical-create.component.css']
})
export class FeedbackTechnicalCreateComponent implements OnInit {
  feedbackTechnical: FeedBackTechnical[];
  constructor(
    private feedBacks:FeedbackTechnicalService,
    private router: Router,
    public snackBar: MatSnackBar) { }

    createFeedbackTech = new FormGroup({
      title:new FormControl('',[Validators.required]),
      sender:new FormControl('',[Validators.required]),
      dateFeedback:new FormControl('',[Validators.required]),
      nameRome:new FormControl('',[Validators.required]),
      contents:new FormControl('',[Validators.required]),
      imageFeedBackList:new FormControl('',[Validators.required]),
      handlingStaff:new FormControl('',[Validators.required]),
      contentHandle:new FormControl('',[Validators.required])
    })


  ngOnInit(): void {
   this.addFeedbackTech();
  }

  addFeedbackTech(){
    this.feedBacks.addFeedback(this.createFeedbackTech.value).subscribe(()=>{
     /* this.snackBar.open("Create successfully!", "Done");*/
    }, error => console.log(error))
  }

}
