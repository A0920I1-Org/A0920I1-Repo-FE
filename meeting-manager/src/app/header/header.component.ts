import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Account} from '../model/entity/Account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username = '';
  account: Account;
  idAccount: number;
  constructor(public authService: AuthenticationService) { }

// - [TuHC]
  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.authService.findAccountByUser().subscribe(data =>{
        this.account = data;
        this.idAccount = this.account.id;
      })
    }
  }

}
