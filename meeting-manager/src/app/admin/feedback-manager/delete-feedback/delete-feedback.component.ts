import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FeedbackService} from '../../../service/feedback.service';

@Component({
  selector: 'app-delete-feedback',
  templateUrl: './delete-feedback.component.html',
  styleUrls: ['./delete-feedback.component.css']
})
export class DeleteFeedbackComponent implements OnInit {
  public titleFeedback;
  public idFeedback;


  constructor(private  feedbackService: FeedbackService,
              public dialogRef: MatDialogRef<DeleteFeedbackComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.titleFeedback = this.data.data1.title;
    this.idFeedback = this.data.data1.id;

  }

  deleteFeedback() {
    this.feedbackService.deleteFeedback(this.idFeedback).subscribe((data) => {
      this.dialogRef.close();
    });
  }
}
