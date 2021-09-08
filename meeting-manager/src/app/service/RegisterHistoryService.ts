import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderMeeting} from '../model/entity/OrderMeeting';
import {SearchRegistrationDTO} from '../model/dto/SearchRegistrationDTO';
@Injectable({
  providedIn: 'root'
})
export class RegisterHistoryService {
  private readonly API_URL = 'http://localhost:8080/register-history';
  constructor(private httpClient: HttpClient) {
  }
  public getRegisterHistory(): Observable<OrderMeeting[]>{
    console.log(this.API_URL + '/3');
    return this.httpClient.get<OrderMeeting[]>(this.API_URL + '/3');
  }
  public searchRegistration(
    search: SearchRegistrationDTO,
    accountId: string
  ): Observable<OrderMeeting[]>{
    console.log(this.API_URL + '/searchRegistrationHistory');
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/searchRegistrationHistory/' + (accountId), search);
  }
  // public findRegisterHistory()
  public deleteOrderMeeting(idOrder: number, reasonDelete: string): Observable<void>{
    return this.httpClient.put<void>(this.API_URL + '/deleteRegister/' + idOrder, reasonDelete);
  }
  public findOrderById(idOrder: string): Observable<OrderMeeting>{
    console.log(this.API_URL + '/' + idOrder);
    return this.httpClient.get<OrderMeeting>(this.API_URL + '/findOrderById/' + idOrder);
  }

  public checkIsDelete(idOrder: number): Observable<boolean>{
    return this.httpClient.get<boolean>(this.API_URL + '/checkIsDelete/' + idOrder );
  }
}
