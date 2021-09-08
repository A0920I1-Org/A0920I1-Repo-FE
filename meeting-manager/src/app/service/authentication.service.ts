import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Account} from '../model/Account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  account: Account;

  urlAccount = 'http://localhost:8080/findAccount';


  constructor(private httpClient: HttpClient) { }

  //sau khi xac thuc thanh cong, luu username, token va role vao sessionStorage - [Tu]
  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
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

  //kiem tra da login hay chua - [Tu]
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  //chuc nang logout - [Tu]
  logOut() {
    sessionStorage.clear();
  }

  //kiem tra role co phai admin hay ko, neu co hien thi man hinh admin - [Tu]
  checkRoleAdmin(){
    let roleAdmin = sessionStorage.getItem('role');
    // console.log(roleAdmin);
    return (roleAdmin === '[ROLE_ADMIN]');
  }

  //lay account bang username - [Tu]
  findAccountByUser(){
    let username = sessionStorage.getItem('username');
    return this.httpClient.get<Account>(`${this.urlAccount}?username=${username}`).subscribe(data =>{
      return this.account = data;
    })
    ;
  }

}
