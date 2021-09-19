import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderMeeting} from '../model/entity/OrderMeeting';
import {SearchRegistrationDTO} from '../model/dto/SearchRegistrationDTO';
@Injectable({
  providedIn: 'root'
})
export class RegisterHistoryService {
  // AnhLT
  private readonly API_URL = 'http://localhost:8080/api/registerHistory';
  constructor(private httpClient: HttpClient) {
  }
  // AnhLT
  // display lich su dang ki theo idAccount
  public getRegisterHistory(idAccount: any): Observable<OrderMeeting[]>{
    // truyen id Account vao URL
    console.log(this.API_URL + '/3');
    return this.httpClient.get<OrderMeeting[]>(this.API_URL + '/account/' + idAccount);
  }
  // AnhLT
  public searchRegistration(
    search: SearchRegistrationDTO,
  ): Observable<OrderMeeting[]>{
    console.log(this.API_URL + '/searchRegistrationHistory');
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/searchRegistrationHistory/', search);
  }
  // AnhLT
  // public findRegisterHistory()
  public deleteOrderMeeting(idOrder: number, reasonDelete: string): Observable<void>{
    return this.httpClient.put<void>(this.API_URL + '/deleteRegister/' + idOrder, reasonDelete);
  }
  // AnhLT
  public findOrderById(idOrder: string): Observable<OrderMeeting>{
    console.log(this.API_URL + '/' + idOrder);
    return this.httpClient.get<OrderMeeting>(this.API_URL + '/findOrderById/' + idOrder);
  }
// AnhLT
  public checkIsDelete(idOrder: number): Observable<boolean>{
    return this.httpClient.get<boolean>(this.API_URL + '/checkIsDelete/' + idOrder );
  }
// AnhLT
  public findOrderByIdMeetingRoom(idMeetingROom: any): Observable<OrderMeeting[]> {
    // truyen idMeetingRoom vao
      return this.httpClient.get<OrderMeeting[]>(this.API_URL + '/meetingRoom/' + idMeetingROom);
  }
}
