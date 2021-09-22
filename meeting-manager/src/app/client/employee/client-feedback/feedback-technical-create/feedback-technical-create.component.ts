import {Component, Inject, OnInit} from '@angular/core';
import {FeedbackTechnicalService} from "../../../../service/FeedbackTechnical/feedback-technical.service";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/storage";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {formatDate} from "@angular/common";
import {finalize} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-feedback-technical-create',
  templateUrl: './feedback-technical-create.component.html',
  styleUrls: ['./feedback-technical-create.component.css']
})
export class FeedbackTechnicalCreateComponent implements OnInit {

  constructor(  private feedbackService:FeedbackTechnicalService,
                private router: Router,
                private toastrService: ToastrService,
                private formBuilder: FormBuilder,
                @Inject(AngularFireStorage) private storage: AngularFireStorage) { }

  public maxDate = new Date();

  listError: any = '';
  filePath: string =  null;
  inputImage: any = null;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';
//feedTech TriNH


  ngOnInit(): void {
  }
  createFeedbackTech = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(4),
      Validators.maxLength(32)]),
    description:new FormControl('',[Validators.required]),
    IsHandle:new FormControl('',[Validators.required]),
    feedBackType:new FormControl('',[Validators.required]),
    dateFeedback:new FormControl('',[Validators.required]),
    meetingRoom:new FormControl('',[Validators.required]),
    imageFeedBackList:new FormControl('',[Validators.required]),
    account:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required])

  });
//feedTech TriNH

  addFeedbackTech(createFeedbackTech:FormGroup){
    this.feedbackService.addFeedback(createFeedbackTech.value).subscribe(()=>{
      this.router.navigateByUrl('/list-feedback-admin');
    });
    if (this.inputImage != null) {
      const imageName = this.getCurrentDateTime() + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.feedbackService.addFeedback({...this.createFeedbackTech.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('/list-feedback-admin').then(
                  re => this.toastrService.success(
                    'Bạn đã thêm mới thành công',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              },
              (error: HttpErrorResponse) => {
                console.log(error);
                if (error.status === 400) {
                  console.log(error.error);
                  this.listError = error.error;
                }
                this.toastrService.error(
                  'Bạn đã thêm mới thất bại',
                  'Thông báo',
                  {timeOut: 3000, extendedTimeOut: 1500});

              });
          });
        })
      ).subscribe();
    }else {
      this.feedbackService.addFeedback(this.createFeedbackTech.value).subscribe(
        () => {
          this.router.navigateByUrl('/list-feedback-admin').then(
            r => this.toastrService.success(
              'Bạn đã thêm mới thành công',
              'Thông báo',
              {timeOut: 3000, extendedTimeOut: 1500})
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          // tslint:disable-next-line:triple-equals
          if (error.status == 400) {
            console.log(error.error);
            this.listError = error.error;
          }

          this.toastrService.error(
            'Bạn đã thêm mới thất bại',
            'Thông báo',
          );
        });
    }

  }

  validationMessage = {
    title: [
      {type: 'required', message: 'Vui lòng nhập tiêu đề!'},
      {type: 'minlength', message: 'Vui lòng nhập tiêu đề có ít nhất 2 kí tự!'},
      {type: 'pattern', message: 'Nhập title không hợp lệ!'}
    ],
    description: [
      {type: 'required', message: 'Vui lòng nhập loại lỗi!'},
      {type: 'minlength', message: 'Vui lòng nhập ít nhất 2 ký tư!'},
      {type: 'maxlength', message: 'Nhập tối đa 100 kí tự !'}

    ],
    content: [
      {type: 'required', message: 'Vui lòng nhập nội dung lỗi!'},
      {type: 'minlength', message: 'Vui lòng nhập ít nhất 2 ký tư!'},
      {type: 'maxlength', message: 'Nhập tối đa 100 kí tự !'}

    ],
    dateFeedback: [
      {type: 'required', message: 'Vui lòng nhập ngày!'},
    ],
    imageFeedBackList: [
      { type: 'pattern', message: 'Chỉ chấp nhận file jpg, png, jpeg' }
    ]
  };

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.createFeedbackTech.get('imageFeedBackList').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.inputImage);
  }

  getImageUrl(){
    if (this.filePath != null){
      return this.filePath;
    }
    if (this.createFeedbackTech.value.imageUrl != null){
      return this.createFeedbackTech.value.imageUrl;
    }
    return this.defaultImage;
  }

}
