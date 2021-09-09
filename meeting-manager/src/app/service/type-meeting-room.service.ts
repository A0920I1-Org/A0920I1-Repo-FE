import { Injectable } from '@angular/core';
import {TypeMeetingRoom} from '../model/TypeMeetingRoom';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TypeMeetingRoomService {
  private readonly API_TYPE_MEETING_ROOM_URL = 'http://localhost:8080/meeting/typeMeetingRoom';

  constructor(private httpClient: HttpClient) {
  }
  public getTypesMeetingRoom(): Observable<TypeMeetingRoom[]>{
    return this.httpClient.get<TypeMeetingRoom[]>(this.API_TYPE_MEETING_ROOM_URL);
  }
}
