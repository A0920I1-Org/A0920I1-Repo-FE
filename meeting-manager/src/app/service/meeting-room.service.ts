import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../models/MeetingRoom';
import {Area} from '../models/Area';
import {TypeMeetingRoom} from '../models/TypeMeetingRoom';
import {RoomStatus} from '../models/RoomStatus';
import {OrderEquipment} from '../models/OrderEquipment';
import {Equipment} from '../models/Equipment';

@Injectable({
  providedIn: 'root'
})

export class MeetingRoomService {
  private readonly API_MEETINGROOM_URL = 'http://localhost:8081/meeting';
  private readonly API_MEETINGROOM_AREA_URL = 'http://localhost:8081/meeting/area';
  private readonly API_TPYE_MEETINGROOM_URL = 'http://localhost:8081/meeting/typeMeeting';
  private readonly API_MEETINGROOM_STATUS_URL = 'http://localhost:8081/meeting/status';
  private readonly API_EQUIPMENT_URL = 'http://localhost:8081/meeting/equipment';

  httpOptions ={
    header: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getMeetingRoom(): Observable<MeetingRoom[]> {
    return this.httpClient.get<MeetingRoom[]>(this.API_MEETINGROOM_URL);
  }

  public getEquipment(): Observable<Equipment[]>{
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT_URL);
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

  // public findMeetingRoomById(id: number): Observable<OrderEquipment> {
  //   return this.httpClient.get<OrderEquipment>(this.API_MEETINGROOM_URL + '/details-meeting-room/' + (id));
  // }

  public findMeetingRoomById(id: number): Observable<MeetingRoom> {
    return this.httpClient.get<MeetingRoom>(this.API_MEETINGROOM_URL + '/details-meeting-room/' + (id));
  }
  public listEquipmentByIdMeetingRoom(id: number): Observable<OrderEquipment[]>{
    return this.httpClient.get<OrderEquipment[]>(this.API_EQUIPMENT_URL +'/' + id);
  }

  public searchEquipmentByName(name: string): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT_URL + '?name=' + (name));
  }

}
