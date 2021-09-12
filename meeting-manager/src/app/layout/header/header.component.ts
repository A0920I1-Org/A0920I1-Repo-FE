import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Account} from '../../model/Account';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  account: Observable<Account>;
  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.displayUsername()
  }

  displayUsername(){
    this.account = this.authService.findAccountByUser();
    console.log(this.account);
  }
}
