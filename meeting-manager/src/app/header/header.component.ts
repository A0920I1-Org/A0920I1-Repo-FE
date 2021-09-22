import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Account} from '../model/entity/Account';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  account: Account;
  idAccount: number;


  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.newUser.subscribe(data =>{
      if(data != null){
        this.account = data;
        this.idAccount = this.account.id;
        this.username = this.account.username;
      }

    });
  }

// - [TuHC]
  ngOnInit(): void {

  }

  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('http://localhost:4200/');
  }

}
