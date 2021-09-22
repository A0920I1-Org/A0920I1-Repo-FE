import {Component, OnInit} from '@angular/core';
import {FeedbackTypeService} from '../../../service/feedback-type.service';
import {Router} from '@angular/router';
import {FeedbackService} from '../../../service/feedback.service';
import {DeleteFeedbackComponent} from '../delete-feedback/delete-feedback.component';
import {MatDialog} from '@angular/material/dialog';
// @ts-ignore
import {ToastrService} from 'ngx-toastr';
import {FeedBack} from '../../../model/entity/FeedBack';

@Component({
  selector: 'app-list-feedbackadmin',
  templateUrl: './list-feedbackadmin.component.html',
  styleUrls: ['./list-feedbackadmin.component.css']
})
export class ListFeedbackadminComponent implements OnInit {

  public feedback: FeedBack[];
  page: 1;

  constructor(private  feedbackTypeService: FeedbackTypeService,
              private router: Router,
              private  feedbackService: FeedbackService,
              private  dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.feedbackService.findAll().subscribe(data => {
      this.feedback = data

    });
  }

  actionFeedbackType(id:number,idFeedback:number) {
    if(id == 1){
      this.router.navigateByUrl('handle-feedback/'+idFeedback)
    }
    else  if (id==2){
      this.router.navigateByUrl('update-feedback-technical/'+idFeedback)
    }

  }

  openDialogDelete(feedbackId): void {
    this.feedbackService.findById(feedbackId).subscribe(data => {
      const dialogReg = this.dialog.open(DeleteFeedbackComponent, {
        width: '500px',
        data: {dataFeedback: data},
        disableClose: true
      });
      dialogReg.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
}
