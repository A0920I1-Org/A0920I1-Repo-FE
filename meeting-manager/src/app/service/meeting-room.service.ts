import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../model/MeetingRoom';


const baseUrl = 'http://localhost:8080/meeting/';
@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  private readonly API_URL = 'http://localhost:8080/meeting/';
  constructor(private httpClient: HttpClient) {
  }

  get(id: string): Observable<MeetingRoom>{
    return this.httpClient.get<MeetingRoom>(this.API_URL + '/' + id);
  }

  public getMeetingRoom(): Observable<MeetingRoom[]>{
    return this.httpClient.get<MeetingRoom[]>(this.API_URL);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }
}
