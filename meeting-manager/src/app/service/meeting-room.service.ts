import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../models/MeetingRoom';
import {Area} from '../models/Area';
import {TypeMeetingRoom} from '../models/TypeMeetingRoom';
import {RoomStatus} from '../models/RoomStatus';
import {OrderEquipment} from '../models/OrderEquipment';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  private readonly API_MEETINGROOM_URL = 'http://localhost:8080/meeting';
  private readonly API_MEETINGROOM_AREA_URL = 'http://localhost:8080/meeting/area';
  private readonly API_TPYE_MEETINGROOM_URL = 'http://localhost:8080/meeting/typeMeeting';
  private readonly API_MEETINGROOM_STATUS_URL = 'http://localhost:8080/meeting/status';
  private readonly API_EQUIPMENT_URL = 'http://localhost:8080/meeting/equipment';

  constructor(private httpClient: HttpClient) { }

  public getMeetingRoom(): Observable<MeetingRoom[]> {
    return this.httpClient.get<MeetingRoom[]>(this.API_MEETINGROOM_URL);
  }

  public getEquipment(): Observable<OrderEquipment[]>{
    return this.httpClient.get<OrderEquipment[]>(this.API_EQUIPMENT_URL);
  }

  public getArea(): Observable<Area[]>{
    return this.httpClient.get<(Area[])>(this.API_MEETINGROOM_AREA_URL);
  }

  public getTypeMeetingRoom(): Observable<TypeMeetingRoom[]>{
    return this.httpClient.get<(TypeMeetingRoom[])>(this.API_TPYE_MEETINGROOM_URL);
  }

  public getRoomStatus(): Observable<RoomStatus[]>{
    return this.httpClient.get<(RoomStatus[])>(this.API_MEETINGROOM_STATUS_URL);
  }

  public addMeetingRoom(meetingRoom: MeetingRoom): Observable<void> {
    return this.httpClient.post<void>(this.API_MEETINGROOM_URL, meetingRoom);
  }

  public findMeetingRoomById(id: number): Observable<MeetingRoom> {
    return this.httpClient.get<MeetingRoom>(this.API_MEETINGROOM_URL + '/' + (id));
  }
}
