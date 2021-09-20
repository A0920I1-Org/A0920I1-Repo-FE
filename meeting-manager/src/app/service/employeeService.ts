import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IEmployeeDto } from '../admin/employee-manager/employeeDTO/EmployeeListDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions: any;
//   AUTH_API = environment.apiBaseUrl;
  private url = 'http://localhost:8080/api';


  constructor(
    private httpClient: HttpClient,
    // private tokenStorage: TokenStorageService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ` + this.tokenStorage.getToken()
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  getAllEmployee(page: number): Observable<any>{
    return this.httpClient.get<any>(this.url + '/account/list-page?page=' + page );
  }

  createEmployee(employee: any): Observable<any> {
    return this.httpClient.post<any>(this.url + '/account/create-account', employee, this.httpOptions);
  }

  public deleteEmployeeById(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/api/public/account/' + id , this.httpOptions);
  }

  public getByEmployeeId(id: number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/api/public/account/' + id , this.httpOptions);
  }

  public update(employee: any) {
    return this.httpClient.put<any>(this.url + '/api/public/account', employee, this.httpOptions);
  }


}
