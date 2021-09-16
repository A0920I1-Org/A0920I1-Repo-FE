import { Component, OnInit } from '@angular/core';
import {FeedbackTechnicalService} from "../../../service/FeedbackTechnical/feedback-technical.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../../model/Account";
import {MeetingRoom} from "../../../model/MeetingRoom";
import {FeedBack} from "../../../model/FeedBack";

@Component({
  selector: 'app-feedback-technical-update',
  templateUrl: './feedback-technical-update.component.html',
  styleUrls: ['./feedback-technical-update.component.css']
})
export class FeedbackTechnicalUpdateComponent implements OnInit {
//feedBackTech TriNH
  public maxDate = new Date();
  public minDate = new Date(1900, 1,1);
  account : Account[];
  meetingRoom:MeetingRoom[];
  IdFeedback:any;
  feedBack: FeedBack;

  constructor(
    private feedBacks:FeedbackTechnicalService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
//feedBackTech TriNH

    this.getAllNameMeetingList();
    this.getAllAccountList();

    this.router.paramMap.subscribe((paramMap: ParamMap) => {
        this.IdFeedback = (paramMap.get('id'));
        console.log(this.IdFeedback);
        // neu IdFeedback co gia tri
      }
    );
    this.feedBacks.findFeedbackById(this.router.snapshot.params.id).subscribe((result) => {
      this.updateFeedbackTech.setValue(result);
      this.feedBack = result;
      console.log(this.feedBack);
    });
  }
//feedBackTech TriNH

  updateFeedbackTech = new FormGroup({
    id: new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
   /* IsHandle:new FormControl('',[Validators.required]),*/
    feedBackType:new FormControl('',[Validators.required]),
    dateFeedback:new FormControl('',[Validators.required]),
    meetingRoom:new FormControl('',[Validators.required]),
    /*imageFeedBackList:new FormControl('',[Validators.required]),*/
    account:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required])

  });
  //feedBackTech TriNH

  onSubmit(updateFeedbackTech: FormGroup) {
    // @ts-ignore
    this.feedBacks.updateFeedbackTech(updateFeedbackTech.value).subscribe(
      (data) => {
        /*this.route.navigateByUrl('list');*/
      }, error => console.log(error)
    );
  }
//feedBackTech TriNH

  editFeedbackTech(){
    // @ts-ignore
    this.feedBacks.updateFeedbackTech(this.router.snapshot.params.id).subscribe((result) =>{
      console.log(result,'data update success');
    })
  }
//feedBackTech TriNH

  getAllAccountList(){
    this.feedBacks.getAccount().subscribe((data )=> {
      console.log(data);
      this.account = data;
    });
  }
//feedBackTech TriNH

  getAllNameMeetingList(){
    this.feedBacks.getMeetingRoom().subscribe((data )=> {
      console.log(data);
      this.meetingRoom = data;
    });
  }


//feedBackTech TriNH

  validation_messages = {
    content: [
      {type: 'required', message: 'Vui lòng nhập nội dung xử lý!'},
      {type: 'minlength', message: 'Vui lòng nhập nội dung có ít nhất 4 kí tự!'},
      {type: 'pattern', message: 'Nhập content không hợp lệ!'}
    ],
    account: [
      {type: 'required', message: 'Vui lòng chọn nhân viên xử lý!'}
    ]

  };

}
