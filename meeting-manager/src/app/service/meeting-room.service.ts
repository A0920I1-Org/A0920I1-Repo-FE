import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../model/MeetingRoom';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  private readonly API_URL = 'http://localhost:8080/meeting';
  private readonly API_URL_UPDATE_MEETING = 'http://localhost:8080/meeting/update-meeting';
  constructor(private httpClient: HttpClient) {
  }

  // hiển phòng theo id (Hoàng)
  getMeetingById(id: number): Observable<MeetingRoom>{
    return this.httpClient.get<MeetingRoom>(this.API_URL + '/' + id);
  }

  // hiển thị tất cả phòng họp (Hoàng)
  public getMeetingRoom(): Observable<MeetingRoom[]>{
    return this.httpClient.get<MeetingRoom[]>(this.API_URL);
  }

  // xóa phòng họp (Hoàng)
  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

  // tìm kiếm phòng họp (Hoàng)
  search(name: string ,floors: number ,area_id: number , room_status_id:number,
         type_meeting_room_id:number,capacity:number): Observable<any>{
    console.log(name,floors,area_id,room_status_id,type_meeting_room_id,capacity);
    return  this.httpClient.get(`${this.API_URL +'/'+ 'search'}?name=${name}&&floors=${floors}&&area_id=${area_id}&&room_status_id=${room_status_id}&&type_meeting_room_id=${type_meeting_room_id}&&capacity=${capacity}`)
  }
    // Hoàng update meeting
  updateMeetingRoom(meetingRoom: MeetingRoom): Observable<void>{
    // console.log(meetingRoom);
    return this.httpClient.put<void>(this.API_URL_UPDATE_MEETING + '/'+ meetingRoom.id, meetingRoom );
  }
}
