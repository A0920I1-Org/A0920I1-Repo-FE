import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Area} from '../model/entity/Area';

@Injectable({
  providedIn: 'root'
})
export class AreaMeetingRoomService {

  private readonly API_AREA_URL = 'http://localhost:8081/meeting/area';

  constructor(private httpClient: HttpClient) {
  }

  // (Hoàng)
  public getAllArea(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(this.API_AREA_URL);
  }
}
