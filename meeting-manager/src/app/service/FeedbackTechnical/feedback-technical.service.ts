import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FeedBack} from "../../model/FeedBack";
@Injectable({
  providedIn: 'root'
})
export class FeedbackTechnicalService {
  private readonly API_FEEDBACK_URL = 'http://localhost:8081/feedback';
  constructor(private httpClient: HttpClient) {
  }

  public getFeedback(): Observable<FeedBack[]> {
    return this.httpClient.get<FeedBack[]>(this.API_FEEDBACK_URL);
  }

  public addFeedback(feedBack: FeedBack): Observable<void> {
    return this.httpClient.post<void>(this.API_FEEDBACK_URL  +"/add", feedBack);
  }

  public findFeedbackById(id: number): Observable<FeedBack> {
    return this.httpClient.get<FeedBack>(this.API_FEEDBACK_URL + '/' + (id));
  }

  public updateFeedbackTech(updateFeedback: FeedBack): Observable<void> {
    return this.httpClient.put<void>(this.API_FEEDBACK_URL + '/' + updateFeedback.id, updateFeedback);
  }

}
