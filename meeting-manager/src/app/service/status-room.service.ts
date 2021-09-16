import {Injectable} from '@angular/core';
import {RoomStatus} from '../model/RoomStatus';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusRoomService {
  private readonly API_MEETING_ROOM_STATUS_URL = 'http://localhost:8080/meeting/roomStatus';

  constructor(private httpClient: HttpClient) {
  }
// Hoàng
  public getStatusRoom(): Observable<RoomStatus[]> {
    return this.httpClient.get<RoomStatus[]>(this.API_MEETING_ROOM_STATUS_URL);
  }
}
