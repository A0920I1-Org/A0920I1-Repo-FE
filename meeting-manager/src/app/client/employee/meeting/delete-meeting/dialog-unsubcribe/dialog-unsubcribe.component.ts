import {Component, Inject, OnInit} from '@angular/core';
import {RegisterHistoryService} from '../../../../../service/RegisterHistoryService';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-unsubcribe',
  templateUrl: './dialog-unsubcribe.component.html',
  styleUrls: ['./dialog-unsubcribe.component.css'],
  providers: [RegisterHistoryService]
})
export class DialogUnsubcribeComponent implements OnInit {
  id: number;
  constructor(
    private registerHistoryService: RegisterHistoryService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
  }


  onSubmit(id: number) {
    this.registerHistoryService.deleteOrderMeeting(id).subscribe(
      (data) => {
        this.router.navigateByUrl('');
      }, error => console.log(error)
    );
  }
}
