import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Account} from '../model/entity/Account';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  account: Account;
  username: string;
  currentUser: BehaviorSubject<any>;
  newUser: Observable<any>;

  loginURL = 'http://localhost:8081/api';

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) {
    this.currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('account')));
    this.newUser = this.currentUser.asObservable();
  }

  //sau khi xac thuc thanh cong, luu username, token va role vao sessionStorage - [TuHC]
  authenticate(username, password) {
    return this.httpClient.post<any>(this.loginURL + '/authenticate', {username, password}).pipe(
      map(
        userData => {
          let tokenStr = 'Bearer ' + userData.token;
          localStorage.setItem('token', tokenStr);

          const token = localStorage.getItem('token');
          const tokenPayload = this.jwtHelper.decodeToken(token);
          let username = tokenPayload.sub;
          this.findAccountByUser(username).subscribe(data =>{
            this.account = data;
            this.currentUser.next(this.account);
            localStorage.setItem("account", JSON.stringify(this.account));
          })

          return userData;
        })
    );
  }
  public get currentUserValue() {
    return this.currentUser.value;
  }


// kiem tra da login hay chua - [TuHC  ]
  isUserLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      // decode the token to get its payload
      const tokenPayload = this.jwtHelper.decodeToken(token);
      let user = tokenPayload.sub;
      // console.log(!(user === null))
      return !(user === null);
    }
    return false;
  }

//chuc nang logout - [TuHC]
  logOut() {
    localStorage.clear();
  }


// //kiem tra role co phai admin hay ko, neu co hien thi man hinh admin va nguoc lai - [TuHC]
  checkRoleAdmin() {
    const token = localStorage.getItem('token');
    // giai ma token de lay thong tin
    const tokenPayload = this.jwtHelper.decodeToken(token);
    let roleAdmin = tokenPayload.role;
    return (roleAdmin === 'ROLE_ADMIN');
  }

// //lay account bang username - [TuHC]
  findAccountByUser(username: string) {
    return this.httpClient.get<Account>(`${this.loginURL + '/findAccount'}?username=${username}`);
  }
}
