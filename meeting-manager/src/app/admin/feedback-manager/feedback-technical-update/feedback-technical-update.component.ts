import { Component, OnInit } from '@angular/core';
import {FeedbackTechnicalService} from "../../../service/FeedbackTechnical/feedback-technical.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-feedback-technical-update',
  templateUrl: './feedback-technical-update.component.html',
  styleUrls: ['./feedback-technical-update.component.css']
})
export class FeedbackTechnicalUpdateComponent implements OnInit {

  public maxDate = new Date();
  public minDate = new Date(1900, 1,1);

  constructor(
    private feedBacks:FeedbackTechnicalService,
    private router: ActivatedRoute,
    private route: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params.id);
    this.feedBacks.findFeedbackById(this.router.snapshot.params.id).subscribe((result) => {
      console.log(result);
      this.updateFeedbackTech.setValue(result);
      console.log(this.updateFeedbackTech);
    })
  }

  updateFeedbackTech = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    dateFeedback:new FormControl('',[Validators.required]),
    imageFeedBackList:new FormControl('',[Validators.required]),
    account:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required])

  });

  editFeedbackTech(){
    this.feedBacks.updateFeedbackTech(this.router.snapshot.params.id).subscribe((result) =>{
      console.log(result,'data update success');
    })
  }

  onSubmit(updateForm: FormGroup){
    this.feedBacks.updateFeedbackTech(updateForm.value).subscribe(
      (data)=>{
        this.snackBar.open("Update successfully!", "Done");
      },error => console.log(error)
    )
  }

}
