import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderMeeting} from '../model/entity/OrderMeeting';
import {SearchRegistrationDTO} from '../model/dto/SearchRegistrationDTO';
@Injectable({
  providedIn: 'root'
})
export class RegisterHistoryService {
  private readonly API_URL = 'http://localhost:3000/register-history';
  constructor(private httpClient: HttpClient) {
  }
  public getRegisterHistory(): Observable<OrderMeeting[]>{
    return this.httpClient.get<OrderMeeting[]>(this.API_URL);
  }
  public searchRegistration(search: SearchRegistrationDTO): Observable<OrderMeeting[]>{
    return this.httpClient.put<OrderMeeting[]>(this.API_URL, search);
  }
  // public findRegisterHistory()
  public deleteOrderMeeting(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

}
