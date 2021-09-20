import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FeedbackService} from '../../../service/feedback.service';
import {ToastrService} from "ngx-toastr";
import {FeedBack} from "../../../model/entity/FeedBack";

@Component({
  selector: 'app-delete-feedback',
  templateUrl: './delete-feedback.component.html',
  styleUrls: ['./delete-feedback.component.css']
})
export class DeleteFeedbackComponent implements OnInit {
  public titleFeedback;
  public idFeedback;
  public feedback: FeedBack[];


  constructor(private  feedbackService: FeedbackService,
              public dialogRef: MatDialogRef<DeleteFeedbackComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.titleFeedback = this.data.dataFeedback.title
    this.idFeedback = this.data.dataFeedback.id

  }

  deleteFeedback() {
    this.feedbackService.findById(this.idFeedback).subscribe((data) => {
      this.dialogRef.close();
      // this._snackBar.open('Bạn đã xóa thành công!', 'OK');
      this.toastrService.success('Bạn đã xóa thành công!', 'Thông báo');

    });
  }
}
