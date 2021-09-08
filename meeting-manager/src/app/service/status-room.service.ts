import {Injectable} from '@angular/core';
import {RoomStatus} from '../model/RoomStatus';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusRoomService {
  private readonly API_URL = 'http://localhost:8080/listRoomStatus';

  constructor(private httpClient: HttpClient) {
  }

  public getStatusRoom(): Observable<RoomStatus[]> {
    return this.httpClient.get<RoomStatus[]>(this.API_URL);
  }
}
