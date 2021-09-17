import {Component, Inject, OnInit} from '@angular/core';
import {FeedbackTechnicalService} from "../../../../service/FeedbackTechnical/feedback-technical.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FeedBack} from "../../../../model/FeedBack";
import {Account} from "../../../../model/Account";
import {AngularFireStorage} from "@angular/fire/storage";
//feedTech TriNH

@Component({

  selector: 'app-feedback-technical',
  templateUrl: './feedback-technical.component.html',
  styleUrls: ['./feedback-technical.component.css'],

})
export class FeedbackTechnicalComponent implements OnInit {
//feedTech TriNH


  constructor(  private feedBacks:FeedbackTechnicalService,
                private router: Router,
                public snackBar: MatSnackBar,
                @Inject(AngularFireStorage) private storage: AngularFireStorage) { }

  public maxDate = new Date();
  public minDate = new Date(1900, 1,1);


  filePath: string =  null;
  inputImage: any = null;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';
//feedTech TriNH


  ngOnInit(): void {
  }
  createFeedbackTech = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    IsHandle:new FormControl('',[Validators.required]),
    feedBackType:new FormControl(1,[Validators.required]),
    dateFeedback:new FormControl('',[Validators.required]),
    meetingRoom:new FormControl(1,[Validators.required]),
    imageFeedBackList:new FormControl('',[Validators.required]),
    account:new FormControl(1,[Validators.required]),
    content:new FormControl('',[Validators.required])

  });
//feedTech TriNH

  addFeedbackTech(createFeedbackTech:FormGroup){
    console.log(createFeedbackTech.value);
    this.feedBacks.addFeedback(createFeedbackTech.value).subscribe(()=>{
      /*this.router.navigateByUrl('feedback');*/
       this.snackBar.open("Create successfully!", "Done");
    }, error => console.log(error))
  }

  validation_messages = {
    title: [
      {type: 'required', message: 'Vui lòng nhập title!'},
      {type: 'minlength', message: 'Vui lòng nhập title có ít nhất 2 kí tự!'},
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
//feedTech TriNH

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.createFeedbackTech.get('imageURL').updateValueAndValidity();
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
