import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../model/MeetingRoom';


const baseUrl = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  private readonly API_URL = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) {
  }

  get(id: string): Observable<any>{
    return this.httpClient.get(baseUrl + '/' + id);
  }

  public getMeetingRoom(): Observable<MeetingRoom[]>{
    return this.httpClient.get<MeetingRoom[]>(baseUrl);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(baseUrl + '/' + id);
  }
}
