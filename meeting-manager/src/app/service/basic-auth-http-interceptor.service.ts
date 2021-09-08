import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor{

  //moi request tiep theo sau khi dang nhap se dc dinh kem token trong header
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    }

    return next.handle(httpRequest);

  }
}
