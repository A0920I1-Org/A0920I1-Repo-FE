import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private authService: AuthenticationService, private jwtHelper: JwtHelperService) {
  }

  //phan quyen - TuHC
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    // console.log(expectedRole);
    const token = sessionStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = this.jwtHelper.decodeToken(token);
    // console.log(tokenPayload.role);
    if (!this.authService.isUserLoggedIn() || route.data.expectedRole.indexOf(tokenPayload.role) === -1) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
    }
}
