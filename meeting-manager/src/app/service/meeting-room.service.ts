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
  private readonly API_TPYE_MEETINGROOM_URL = 'http://localhost:8081/meeting/typeMeetingRoom';
  private readonly API_MEETINGROOM_STATUS_URL = 'http://localhost:8081/meeting/roomStatus';
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

  //HueHV tạo ngày 16/9/2021, chức năng hiển thị danh sách tài sản
  public getEquipment(): Observable<Equipment[]>{
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT_URL);
  }

  //HueHV tạo ngày 16/9/2021, chức năng hiển thị danh sách khu vực của phòng họp
  public getArea(): Observable<Area[]>{
    return this.httpClient.get<(Area[])>(this.API_MEETINGROOM_AREA_URL);
  }

  //HueHV tạo ngày 16/9/2021, chức năng hiển thị danh sách loại phòng họp
  public getTypeMeetingRoom(): Observable<TypeMeetingRoom[]>{
    return this.httpClient.get<(TypeMeetingRoom[])>(this.API_TPYE_MEETINGROOM_URL);
  }

  //HueHV tạo ngày 16/9/2021, chức năng hiển thị danh sách trạng thái phòng họp
  public getRoomStatus(): Observable<RoomStatus[]>{
    return this.httpClient.get<(RoomStatus[])>(this.API_MEETINGROOM_STATUS_URL);
  }

  //HueHV tạo ngày 16/9/2021, chức năng thêm mới phòng họp
  public addMeetingRoom(meetingRoom: MeetingRoom): Observable<void> {
    return this.httpClient.post<void>(this.API_MEETINGROOM_URL , meetingRoom);
  }

  //HueHV tạo ngày 16/9/2021, chức năng tìm phòng phọng theo id
  public findMeetingRoomById(id: number): Observable<MeetingRoom> {
    return this.httpClient.get<MeetingRoom>(this.API_MEETINGROOM_URL + '/details-meeting-room/' + (id));
  }

  //HueHV tạo ngày 16/9/2021, chức năng hiển thị danh sách tài sản theo id phòng họp
  public listEquipmentByIdMeetingRoom(id: number): Observable<OrderEquipment[]>{
    return this.httpClient.get<OrderEquipment[]>(this.API_EQUIPMENT_URL +'/' + id);
  }

  //HueHV tạo ngày 16/9/2021, chức năng tìm kiếm tài sản theo tên của tài sản
  public searchEquipmentByName(name: string): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT_URL + '?name=' + (name));
  }

}
