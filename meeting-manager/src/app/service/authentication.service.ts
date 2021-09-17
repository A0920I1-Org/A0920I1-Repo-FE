import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Account} from '../model/Account';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  account: Account;

  loginURL = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) { }

  //sau khi xac thuc thanh cong, luu username, token va role vao sessionStorage - [TuHC]
  authenticate(username, password) {
    return this.httpClient.post<any>(this.loginURL + '/authenticate',{username,password}).pipe(
      map(
        userData => {
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }

  // kiem tra da login hay chua - [TuHC  ]
  isUserLoggedIn() {
    const token = sessionStorage.getItem('token');
    if(token) {
      // decode the token to get its payload
      const tokenPayload = this.jwtHelper.decodeToken(token);
      let user = tokenPayload.sub;
      // console.log(!(user === null))
      return !(user === null)
    }
    return false;
  }

  //chuc nang logout - [TuHC]
  logOut() {
    sessionStorage.clear();
  }
  //
  // //kiem tra role co phai admin hay ko, neu co hien thi man hinh admin va nguoc lai - [TuHC]
  checkRoleAdmin(){
    const token = sessionStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = this.jwtHelper.decodeToken(token);
    let roleAdmin = tokenPayload.role;
    return (roleAdmin === 'ROLE_ADMIN');
  }

  // //lay account bang username - [TuHC]
  findAccountByUser() {
    const token = sessionStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    let username = tokenPayload.user;
    // console.log(username);
    return this.httpClient.get<Account>(`${this.loginURL + '/findAccount'}?username=${username}`)
  }
}
