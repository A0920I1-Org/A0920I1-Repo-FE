import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeedBack} from '../model/entity/FeedBack';
import {FeedBackType} from '../model/entity/FeedBackType';
import {MeetingRoom} from "../model/entity/MeetingRoom";
import {Account} from "../model/entity/Account";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL = 'http://localhost:8080/api/feedback';

  constructor(private  httpClient: HttpClient) {
  }
// VietNT Code lấy tất cả các feedback
  findAll(): Observable<FeedBack[]> {
    return this.httpClient.get<FeedBack[]>(this.baseURL + '/feedback-list');
  }
// VietNT Code Lấy id feedback
  findById(id: number): Observable<FeedBack>{
    return this.httpClient.get<FeedBack>(this.baseURL + '/findById/' + id);
  }
//VietNT Code hiển thị danh sách  loại lỗi

  findAllFeedbackType(): Observable<FeedBackType[]> {
    return this.httpClient.get<FeedBackType[]>(this.baseURL + '/feedbacktypelist');
  }
// /VietNT Code Người dùng feedback
  create(feedback: FeedBack): Observable<FeedBack> {
    // @ts-ignore
    return this.httpClient.post(this.baseURL + '/createFeedback', feedback);

  }
  updateFeedback(feedback: FeedBack): Observable<FeedBack>{
    console.log(this.baseURL + '/update/' + feedback.id, feedback);
    return this.httpClient.patch<FeedBack>(this.baseURL + '/update/' + feedback.id, feedback);
  }
  //VietNT delete feedback
  deleteFeedback(id: number){
    return this.httpClient.delete(this.baseURL + '/delete-feedback/' + id);
  }
  //VietNT lấy phòng họp
  public getMeetingRoom(): Observable<MeetingRoom[]>{
    return this.httpClient.get<MeetingRoom[]>(this.baseURL+ '/feedbackMeetingRoom');
  }
  //VietNT lấy accout
  public getAccount(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseURL+ '/feedbackAccount');
  }
}
