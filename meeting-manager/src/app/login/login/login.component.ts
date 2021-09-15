import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  submitted = false;
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required && Validators.pattern('^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$')]),
      password: new FormControl('', [Validators.required && Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,32}$')])
    });
  }

  //kiem tra username va password - [TuHC]
  checkLogin() {
    this.submitted = true;

    //neu khong dung format du lieu thi ko gui request ve backend
    if (this.loginForm.invalid) {
      return;
    }

    //dung format du lieu, gui ve backend kiem tra username va password
    this.authService.authenticate(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
      data => {
        this.router.navigateByUrl('/detail-meeting');
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;

      }
    );
  }
}
