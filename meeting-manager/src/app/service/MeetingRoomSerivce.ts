import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../model/entity/MeetingRoom';
@Injectable({
  providedIn: 'root'
})
export class MeetingRoomSerivce {
  private readonly API_URL = 'http://localhost:3000/meeting-rooms';
  constructor(private httpClient: HttpClient) {
  }
  public getMeetingRoom(): Observable<MeetingRoom[]>{
    return this.httpClient.get<MeetingRoom[]>(this.API_URL);
  }

}
