import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Account} from '../model/Account';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username = '';
  account: Account;
  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    // if (this.authService.isUserLoggedIn()) {
    //   this.authService.findAccountByUser().subscribe(data =>{
    //     this.account = data;
    //     this.username = this.account.username;
    //   })
    // }
  }


}
