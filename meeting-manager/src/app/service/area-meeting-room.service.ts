import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Area} from '../model/Area';

@Injectable({
  providedIn: 'root'
})
export class AreaMeetingRoomService {

  private readonly API_AREA_URL = 'http://localhost:8080/meeting/area';

  constructor(private httpClient: HttpClient) {
  }

  public getAllArea(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(this.API_AREA_URL);
  }
}
