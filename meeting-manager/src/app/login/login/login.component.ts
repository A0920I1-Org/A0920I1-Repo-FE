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
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  //kiem tra username va password - [Tu]
  checkLogin() {
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
