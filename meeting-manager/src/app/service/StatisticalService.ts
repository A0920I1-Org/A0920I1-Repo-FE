import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderMeeting} from '../model/entity/OrderMeeting';
import {StatisticByDate} from '../model/dto/StatisticByDate';
import {StatisticByRoom} from '../model/dto/StatisticByRoom';
@Injectable({
  providedIn: 'root'
})
export class StatisticalService {
  private readonly API_URL = 'http://localhost:8080/statistical';
  constructor(private httpClient: HttpClient) {
  }
  public statisticByDate(statistic: StatisticByDate): Observable<OrderMeeting[]>{
    console.log(this.API_URL + '/statisticByDate');
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/statisticByDate', statistic);
  }
  public statisticByRoom(statistic: StatisticByRoom): Observable<OrderMeeting[]>{
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/statistic-by-room', statistic);
  }
  public calculatePerformance(): Observable<number[]>{
    return this.httpClient.get<number[]>(this.API_URL + '/calculate-performance');
  }
  public calculateTotalsOfUses(): Observable<number[]>{
    return this.httpClient.get<number[]>(this.API_URL + 'calculate-totals-of-uses');
  }
}
