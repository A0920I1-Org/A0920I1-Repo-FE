import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderMeeting} from '../model/entity/OrderMeeting';
import {Statistic} from '../model/dto/Statistic';
@Injectable({
  providedIn: 'root'
})
export class StatisticalService {
  // AnhLT
  private readonly API_URL = 'http://localhost:8080/statistical';
  constructor(private httpClient: HttpClient) {
  }
  // AnhLT
  public statisticByDate(statistic: Statistic): Observable<OrderMeeting[]>{
    console.log(this.API_URL + '/statisticByDate');
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/statistic-by-date', statistic);
  }
  // AnhLT
  public statisticByRoom(statistic: Statistic): Observable<OrderMeeting[]>{
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/statistic-by-room', statistic);
  }
// AnhLT
  public calculateTotalsOfUses(): Observable<Object[]>{
    return this.httpClient.get<Object[]>(this.API_URL + '/cal-performance-totals-of-uses');
  }
}
