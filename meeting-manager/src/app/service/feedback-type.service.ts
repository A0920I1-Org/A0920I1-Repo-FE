import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FeedBackType} from '../model/FeedBackType';

@Injectable({
  providedIn: 'root'
})
export class FeedbackTypeService {
  /*VietNT Code*/
  private baseURL = 'http://localhost:8080/api/public/feedbacktypelist';

  constructor(private  http: HttpClient) {
  }

  findAllFeedbackType(): Observable<FeedBackType[]> {
    return this.http.get<FeedBackType[]>(this.baseURL);
  }
}
