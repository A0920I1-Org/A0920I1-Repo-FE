import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeMeetingRoom} from '../model/entity/TypeMeetingRoom';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TypeMeetingRoomService {
  private readonly API_URL = 'http://localhost:3000/types-meeting-room';
  constructor(private httpClient: HttpClient) {
  }
  public getTypesMeetingRoom(): Observable<TypeMeetingRoom[]>{
    return this.httpClient.get<TypeMeetingRoom[]>(this.API_URL);
  }
}
