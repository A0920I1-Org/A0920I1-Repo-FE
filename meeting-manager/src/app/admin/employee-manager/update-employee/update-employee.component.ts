import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../service/employeeService';
import {ToastrService} from 'ngx-toastr';
import {AngularFireStorage} from '@angular/fire/storage';
import {EmployeeCreateDto} from '../employeeDTO/EmployeeCreateDto';
import {EmployeeUpdateDto} from '../employeeDTO/EmployeeUpdateDto';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private employeeService: EmployeeService,
              private toastrService: ToastrService,
              private route: ActivatedRoute,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  employeeCreateForm: FormGroup;

  filePath: string = null;
  inputImage: any = null;
  employeeUpdate: EmployeeUpdateDto = null;
  employee: EmployeeUpdateDto;
  uploading: boolean;
  id: number;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';
  roles = [];
  validationMessage = {
    username: [
      {type: 'required', message: 'Tên đăng nhập không được để trống!'},
      {type: 'minlength', message: 'Tên đăng nhập tối thiểu 4 ký tự'},
      {type: 'maxlength', message: 'Tên đăng nhập tối đa 32 ký tự'},
      {type: 'pattern', message: 'Tên đăng nhập không chứa dấu ký tự đặc biệt hoặc khoảng trắng'}
    ],
    password: [
      {type: 'required', message: 'Mật khẩu không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu tối thiểu 4 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu tối đa 32 ký tự'}
    ],
    fullName: [
      {type: 'required', message: 'Họ và tên không được để trống!'},
      {type: 'maxlength', message: 'Họ và tên dài tối đa 300 ký tự'},
      {type: 'pattern', message: 'Họ và tên không chứa ký tự số hoặc ký tự đặc biệt'}
    ],
    email: [
      {type: 'required', message: 'Email không được để trống!'},
      {type: 'email', message: 'Email không đúng định dạng'}
    ],
    phone: [
      {type: 'required', message: 'Số điện thoại không được để trống!'},
    ],
    imageUrl: [
      {type: 'pattern', message: 'Chỉ chấp nhận file jpg, png, jpeg'}
    ]
  };

  ngOnInit(): void {
    this.roles = [{id: 1, name: 'admin'},
      {id: 2, name: 'user'}];
    this.getId();
    this.getStaffById(this.id);
  }

  getId() {
    this.id = this.route.snapshot.params.id;
  }

  getStaffById(id: number) {
    this.employeeService.getByEmployeeId(id).subscribe((data) => {
      this.employeeUpdate = data;
      console.log(data);
      this.initForm();
      // console.log(this.staffUpdate.imageURL);
      // console.log(this.staffUpdate.account.username);
      this.filePath = this.employeeUpdate.imageUrl;
    });
  }

  initForm() {
    this.employeeCreateForm = this.formBuilder.group({
      id: this.formBuilder.control(this.employeeUpdate.id),
      password: this.formBuilder.control(this.employeeUpdate.password),
      username: this.formBuilder.control(this.employeeUpdate.username),
      fullname: this.formBuilder.control(this.employeeUpdate.fullname, [
        Validators.required,
        Validators.maxLength(300),
        Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/)
      ]),
      roleId: this.formBuilder.control(this.employeeUpdate.roleId, [
        Validators.required
      ]),
      division: this.formBuilder.control(this.employeeUpdate.division, [
        Validators.required
      ]),
      email: this.formBuilder.control(this.employeeUpdate.email, [
        Validators.required
      ]),
      phone: this.formBuilder.control(this.employeeUpdate.phone, [
        Validators.required
      ]),
      imageUrl: this.formBuilder.control(this.employeeUpdate.imageUrl, [
        Validators.required
      ]),
    });
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.employeeCreateForm.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.inputImage);
  }

  getImageUrl() {
    if (this.filePath != null) {
      return this.filePath;
    }
    return this.defaultImage;
  }

  onSubmit() {
    // this.employeeService.update(this.employeeCreateForm.value).subscribe(data => {
    //   this.router.navigateByUrl('/empList');
    // });
    if (this.inputImage != null) {
      const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.employeeService.update({...this.employeeCreateForm.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('/emp-list').then(
                  r => this.toastrService.success(
                    'Chỉnh sửa thành công',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              },
              (error: HttpErrorResponse) => {
                this.router.navigateByUrl('/emp-list').then(
                  r => this.toastrService.error(
                    'Chỉnh sửa thất bại',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              });
          });
        })
      ).subscribe();
    }else {
      this.employeeService.update(this.employeeCreateForm.value).subscribe(
        () => {
          this.router.navigateByUrl('/emp-list').then(
            r => this.toastrService.success(
              'Chỉnh sửa thành công',
              'Thông báo',
              {timeOut: 3000, extendedTimeOut: 1500})
          );
        },
        (error: HttpErrorResponse) => {
          this.router.navigateByUrl('/emp-list').then(
            r => this.toastrService.error(
              'Chỉnh sửa thất bại',
              'Thông báo',
              {timeOut: 3000, extendedTimeOut: 1500})
          );
        });
    }
  }
}
