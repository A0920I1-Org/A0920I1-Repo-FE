import { Injectable } from '@angular/core';
import {TypeMeetingRoom} from '../model/TypeMeetingRoom';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


const baseUrl = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class TypeMeetingRoomService {
  private readonly API_URL = 'http://localhost:8080/listTypeMeetingRoom';

  constructor(private httpClient: HttpClient) {
  }
  public getTypesMeetingRoom(): Observable<TypeMeetingRoom[]>{
    return this.httpClient.get<TypeMeetingRoom[]>(this.API_URL);
  }
}
