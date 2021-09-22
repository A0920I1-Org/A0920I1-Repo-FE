import {Component, Inject, OnInit} from '@angular/core';
import {FeedbackTechnicalService} from "../../../service/FeedbackTechnical/feedback-technical.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MeetingRoom} from '../../../model/entity/MeetingRoom';
import {FeedBack} from '../../../model/entity/FeedBack';
import {Account} from '../../../model/entity/Account';
import {AngularFireStorage} from "@angular/fire/storage";
import {ToastrService} from "ngx-toastr";
import {formatDate} from "@angular/common";
import {finalize} from "rxjs/operators";


@Component({
  selector: 'app-feedback-technical-update',
  templateUrl: './feedback-technical-update.component.html',
  styleUrls: ['./feedback-technical-update.component.css']
})
export class FeedbackTechnicalUpdateComponent implements OnInit {
//feedBackTech TriNH
  public maxDate = new Date();
  account: Account[];
  meetingRoom: MeetingRoom[];
  idFeedback: number;
  feedBackTech: FeedBack;
  imgUpdate: any;
  updateFeedbackTech: FormGroup;

  constructor(
      private feedbackTechnicalService: FeedbackTechnicalService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      @Inject(AngularFireStorage) private storage: AngularFireStorage, private fb: FormBuilder,
      private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.updateFeedbackTech = this.fb.group({
      id: [('')],
      title: [('')],
      description: [('')],
      dateFeedback: [('')],
      IsHandle: [('')],
      feedBackType: [('')],
      account: [('')],
      meetingRoom: [('')],
      content: [('')],
      imageFeedBackList: [('')]
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idFeedback = parseInt(paramMap.get('idFeedback'));
      this.feedbackTechnicalService.findFeedbackById(this.idFeedback).subscribe((data) => {
        this.feedBackTech = data;
        this.updateFeedbackTech.patchValue({
          id: this.feedBackTech.id,
          title: this.feedBackTech.title,
          description: this.feedBackTech.description,
          dateFeedback: this.feedBackTech.dateFeedback,
          IsHandle: this.feedBackTech.handle,
          feedBackType: this.feedBackTech.feedBackType.name,
          account: this.feedBackTech.account.fullname,
          meetingRoom: this.feedBackTech.meetingRoom.name,
          content: this.feedBackTech.content,
          imageFeedBackList: this.feedBackTech.imageFeedBackList
        });
      });
    });
    this.getAllNameMeetingList();
    this.getAllAccountList();
  }


  editFeedbackTech(updateFeedbackTech: FormGroup) {
    console.log(updateFeedbackTech.value);
    const nameImage = this.getCurrentDateTime() + this.imgUpdate.name;
    const fileRef = this.storage.ref(nameImage);
    this.storage.upload(nameImage, this.imgUpdate).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.updateFeedbackTech.patchValue({imageUrl: url});
            this.getEdit();
          });
        })
    ).subscribe();
  }

  getEdit() {
    // @ts-ignore
    this.feedbackTechnicalService.updateFeedbackTech(this.updateFeedbackTech.value).subscribe((data) => {
      this.router.navigateByUrl('list-feedback-admin').then(e => this.toastrService.success('Bạn đã cập nhật thành công!', 'Thông báo'));
    })
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
  getAllAccountList() {
    this.feedbackTechnicalService.getAccount().subscribe((data) => {
      // @ts-ignore
      this.account = data;
    });
  }

  getAllNameMeetingList() {
    this.feedbackTechnicalService.getMeetingRoom().subscribe((data) => {
      this.meetingRoom = data;
    });
  }

  showImage($event: any) {
    this.imgUpdate = $event.target.files[0];
  }

  validationMessage = {
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
