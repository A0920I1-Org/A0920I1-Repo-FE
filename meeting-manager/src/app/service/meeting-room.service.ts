import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../model/entity/MeetingRoom';
import {Equipment} from '../model/entity/Equipment';
import {Area} from '../model/entity/Area';
import {TypeMeetingRoom} from '../model/entity/TypeMeetingRoom';
import {RoomStatus} from '../model/entity/RoomStatus';
import {OrderEquipment} from '../model/entity/OrderEquipment';



@Injectable({
  providedIn: 'root'
})

export class MeetingRoomService {

  private readonly API_MEETINGROOM_URL = 'http://localhost:8081/api/meeting-room';
  private readonly API_MEETINGROOM_AREA_URL = 'http://localhost:8081/api/meeting-room/area';
  private readonly API_TPYE_MEETINGROOM_URL = 'http://localhost:8081/api/meeting-room/typeMeetingRoom';
  private readonly API_MEETINGROOM_STATUS_URL = 'http://localhost:8081/api/meeting-room/roomStatus';
  private readonly API_EQUIPMENT_URL = 'http://localhost:8081/api/meeting-room/equipment';


  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getMeetingRoom(): Observable<MeetingRoom[]> {
    return this.httpClient.get<MeetingRoom[]>(this.API_MEETINGROOM_URL + '/list');

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
    console.log(this.API_EQUIPMENT_URL +'/' + id)
    return this.httpClient.get<OrderEquipment[]>(this.API_EQUIPMENT_URL +'/' + id);
  }

  //HueHV tạo ngày 16/9/2021, chức năng tìm kiếm tài sản theo tên của tài sản
  public searchEquipmentByName(name: string): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT_URL + '?name=' + (name));
  }

  // hiển phòng theo id (Hoàng)
  getMeetingById(id: number): Observable<MeetingRoom>{
    return this.httpClient.get<MeetingRoom>(this.API_MEETINGROOM_URL + '/' + id);
  }

  // xóa phòng họp (Hoàng)
  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_MEETINGROOM_URL + '/' + id);
  }

  // tìm kiếm phòng họp (Hoàng)
  search(name: string ,floors: number ,area_id: number , room_status_id:number,
         type_meeting_room_id:number,capacity:number): Observable<any>{
    console.log(name,floors,area_id,room_status_id,type_meeting_room_id,capacity);
    return  this.httpClient.get(`${this.API_MEETINGROOM_URL +'/'+ 'search'}?name=${name}&&floors=${floors}&&area_id=${area_id}&&room_status_id=${room_status_id}&&type_meeting_room_id=${type_meeting_room_id}&&capacity=${capacity}`)
  }
    // Hoàng update meeting
  updateMeetingRoom(meetingRoom: MeetingRoom): Observable<void>{
    return this.httpClient.patch<void>(this.API_MEETINGROOM_URL + '/update-meeting/'+ meetingRoom.id, meetingRoom );
  }

}
