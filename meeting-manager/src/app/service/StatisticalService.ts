import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderMeeting} from '../model/entity/OrderMeeting';
import {Statistic} from '../model/dto/Statistic';
import {DataChart} from '../model/dto/dataChart';
@Injectable({
  providedIn: 'root'
})
export class StatisticalService {
  private readonly API_URL = 'http://localhost:8080/statistical';
  constructor(private httpClient: HttpClient) {
  }
  public statisticByDate(statistic: Statistic): Observable<OrderMeeting[]>{
    console.log(this.API_URL + '/statisticByDate');
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/statisticByDate', statistic);
  }
  public statisticByRoom(statistic: Statistic): Observable<OrderMeeting[]>{
    return this.httpClient.put<OrderMeeting[]>(this.API_URL + '/statisticByRoom', statistic);
  }
  public calculatePerformance(): Observable<number[]>{
    return this.httpClient.get<number[]>(this.API_URL + '/calculate-performance');
  }
  public calculateTotalsOfUses(): Observable<DataChart[]>{
    return this.httpClient.get<DataChart[]>(this.API_URL + '/totalsOfUses');
  }
}
