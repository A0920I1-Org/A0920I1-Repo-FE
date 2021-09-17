import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TypeMeetingRoom} from '../model/entity/TypeMeetingRoom';



@Injectable({
  providedIn: 'root'
})
export class TypeMeetingRoomService {
  private readonly API_TYPE_MEETING_ROOM_URL = 'http://localhost:8080/meeting/typeMeetingRoom';

  constructor(private httpClient: HttpClient) {
  }

  // Hoàng
  public getTypesMeetingRoom(): Observable<TypeMeetingRoom[]>{
    return this.httpClient.get<TypeMeetingRoom[]>(this.API_TYPE_MEETING_ROOM_URL);
  }
}
