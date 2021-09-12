import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Account} from '../model/Account';
import {Observable} from 'rxjs';
import {AccountDTO} from '../model/AccountDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  account: Account;

  loginURL = 'http://localhost:8080/login';


  constructor(private httpClient: HttpClient) { }

  //sau khi xac thuc thanh cong, luu username, token va role vao sessionStorage - [TuHC]
  authenticate(username, password) {
    return this.httpClient.post<any>(this.loginURL + '/authenticate',{username,password}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          let role = userData.role;
          sessionStorage.setItem('role', role);
          return userData;
        }
      )
    );
  }

  //kiem tra da login hay chua - [TuHC]
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  //chuc nang logout - [TuHC]
  logOut() {
    sessionStorage.clear();
  }

  //kiem tra role co phai admin hay ko, neu co hien thi man hinh admin va nguoc lai - [TuHC]
  checkRoleAdmin(){
    let roleAdmin = sessionStorage.getItem('role');
    return (roleAdmin === '[ROLE_ADMIN]');
  }

  //lay account bang username - [TuHC]
  findAccountByUser() {
    let username = sessionStorage.getItem('username');
    // console.log(username);
    return this.httpClient.get<Account>(`${this.loginURL + '/findAccount'}?username=${username}`)
  }
}
