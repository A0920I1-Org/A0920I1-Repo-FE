import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FeedBack} from '../model/FeedBack';
import {Observable} from 'rxjs';
import {FeedBackType} from '../model/FeedBackType';

import {FeedbackDTO} from '../dto/Feedback';



@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL = 'http://localhost:8080/feedback';

  constructor(private  http: HttpClient) {
  }
  /*VietNT Code lấy tất cả các feedback*/
  findAll(): Observable<FeedBack[]> {
    return this.http.get<FeedBack[]>(this.baseURL + '/feedbacklist');
  }
  /*VietNT Code Lấy id feedback*/
  findById(id: number): Observable<FeedBack>{
    return this.http.get<FeedBack>(this.baseURL + '/findById/' + id);
  }
  /*VietNT Code hiển thị danh sách  loại lỗi*/

  findAllFeedbackType(): Observable<FeedBackType[]> {
    return this.http.get<FeedBackType[]>(this.baseURL + '/feedbacktypelist');
  }
  /*VietNT Code Người dùng feedback*/
  create(feedback: FeedBack): Observable<FeedBack> {
    // @ts-ignore
    return this.http.post(this.baseURL + '/createFeedback', feedback);

  }
  updateFeedback(feedback: FeedBack): Observable<FeedBack>{
    return this.http.patch<FeedBack>(this.baseURL + '/update/' + feedback.id, feedback);
  }
  deleteFeedback(id: number){
    return this.http.delete(this.baseURL + '/delete-feedback/' + id);
  }
}
