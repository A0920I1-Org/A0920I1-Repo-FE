import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  submitted = false;
  showErrorMessage = false;
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$')]),
      password: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,32}$')])
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  //kiem tra username va password - [TuHC]
  checkLogin() {
    this.submitted = true;

    //neu khong dung format du lieu thi ko gui request ve backend - [TuHC]
    if (this.loginForm.invalid) {
      return;
    }
    //dung format du lieu, gui ve backend kiem tra username va password - [TuHC]
    this.authService.authenticate(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
      data => {
        this.router.navigateByUrl('/list-meeting');
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
        this.showErrorMessage = true;
      }
    );

  }




  validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }
}
