import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeCreateDto} from '../employeeDTO/EmployeeCreateDto';
import {Router} from '@angular/router';
import {EmployeeService} from '../../../service/employeeService';
import {ToastrService} from 'ngx-toastr';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private toastrService: ToastrService,
    @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) { }

  employeeCreateForm: FormGroup;
  filePath: string =  null;
  inputImage: any = null;
  employee: EmployeeCreateDto;
  uploading: boolean;
  roles = [];

  listError: any = '';

  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';

  validationMessage = {
    username: [
      { type: 'required', message: 'Tên đăng nhập không được để trống!' },
      { type: 'minlength', message: 'Tên đăng nhập tối thiểu 4 ký tự' },
      { type: 'maxlength', message: 'Tên đăng nhập tối đa 32 ký tự' },
      { type: 'pattern', message: 'Tên đăng nhập không chứa dấu ký tự đặc biệt hoặc khoảng trắng' }
    ],
    password: [
      { type: 'required', message: 'Mật khẩu không được để trống!' },
      { type: 'minlength', message: 'Mật khẩu tối thiểu 4 ký tự' },
      { type: 'maxlength', message: 'Mật khẩu tối đa 32 ký tự' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Xác nhận mật khẩu không được để trống!' },
      { type: 'match', message: 'Xác nhận mật khẩu không trùng khớp' },
      { type: 'failConfirmPassword', message: 'Xác nhận mật khẩu phải trùng với mật khẩu' },
    ],
    fullName: [
      { type: 'required', message: 'Họ và tên không được để trống!' },
      { type: 'maxlength', message: 'Họ và tên dài tối đa 300 ký tự' },
      { type: 'pattern', message: 'Họ và tên không chứa ký tự số hoặc ký tự đặc biệt' }
    ],
    birthday: [
      { type: 'required', message: 'Số điện thoại không được để trống !' },
      { type: 'past', message: 'Ngày sinh phải là ngày trong quá khứ' },
      { type: 'notEnoughAge', message: 'Bạn chưa đủ tuổi để đăng kí' },
      { type: 'tooAge', message: 'Bạn không thể quá 100 tuổi' }
    ],
    email: [
      { type: 'required', message: 'Email không được để trống!' },
      { type: 'email', message: 'Email không đúng định dạng' }
    ],
    imageUrl: [
      { type: 'pattern', message: 'Chỉ chấp nhận file jpg, png, jpeg' }
    ]
  };

  ngOnInit(): void {
    this.initForm();
    this.roles = [{id: 1, name: 'admin'},
      {id: 2, name: 'user'}];
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employeeCreateForm.value).subscribe(data => {
      this.router.navigateByUrl('/empList');
    });
    if (this.inputImage != null) {
      const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.employeeService.createEmployee({...this.employeeCreateForm.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('/empList').then(
                  r => this.toastrService.success(
                    'Tạo mới thành công',
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
                  'Tạo mới thất bại',
                  'Thông báo',
                  {timeOut: 3000, extendedTimeOut: 1500});

              });
          });
        })
      ).subscribe();
    }else {
      this.employeeService.createEmployee(this.employeeCreateForm.value).subscribe(
        () => {
          this.router.navigateByUrl('/empList').then(
            r => this.toastrService.success(
              'Tạo mới thành công',
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
            'Tạo mới thất bại',
            'Thông báo',
          );
        });
    }
  }

  initForm() {
    this.employeeCreateForm = this.formBuilder.group({
      username: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32),
      ]),
      password: (''),
      fullName: this.formBuilder.control('', [
        Validators.required,
        Validators.maxLength(300),
        Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/)
      ]),
      roleId: this.formBuilder.control('', [
        Validators.required]),
      division: this.formBuilder.control('', [
        Validators.required
      ]),
      email: this.formBuilder.control('', [
        Validators.email
      ]),
      phone: this.formBuilder.control('', [
        Validators.required
      ]),
      imageURL: this.formBuilder.control(null, [
        Validators.required
      ])
    });
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.employeeCreateForm.get('imageURL').updateValueAndValidity();
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
    if (this.employeeCreateForm.value.imageUrl != null){
      return this.employeeCreateForm.value.imageUrl;
    }
    return this.defaultImage;
  }


}
