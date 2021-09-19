import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomStatus} from '../model/entity/RoomStatus';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StatusRoomService {
  private readonly API_URL = 'http://localhost:8080/status-room';

  constructor(private httpClient: HttpClient) {
  }
  // AnhLT
  public getStatusRoom(): Observable<RoomStatus[]>{
    return this.httpClient.get<RoomStatus[]>(this.API_URL+'/list');
  }
}
