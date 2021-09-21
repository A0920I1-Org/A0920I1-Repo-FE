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
  }

// - [TuHC]
  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.authService.newUsername.subscribe(data => {
        this.authService.findAccountByUser().subscribe(data => {
          this.account = data;
          this.idAccount = this.account.id;
          this.username = this.account.username;
        });

      });
    }
  }

  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('http://localhost:4200/');
  }

}
