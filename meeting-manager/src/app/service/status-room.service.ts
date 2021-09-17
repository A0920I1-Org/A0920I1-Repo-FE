import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RoomStatus} from '../model/entity/RoomStatus';

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
