import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Account} from '../model/entity/Account';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username: string;
  account: Account;
  idAccount: number;

  constructor(public authService: AuthenticationService, private router: Router) {
  }

// - [TuHC]
  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.authService.findAccountByUser().subscribe(data => {
        this.account = data;
        this.idAccount = this.account.id;
      })
    }
  }
  logout() {
    this.authService.logOut();
  }

}