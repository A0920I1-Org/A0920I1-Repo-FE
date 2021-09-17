import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FeedBack} from "../../model/FeedBack";
import {Account} from "../../model/Account";
import {MeetingRoom} from "../../model/MeetingRoom";
@Injectable({
  providedIn: 'root'
})
export class FeedbackTechnicalService {

  //service TriNH
  private readonly API_FEEDBACK_URL = 'http://localhost:8081/feedback';
  private readonly API_Account_URL = 'http://localhost:8081/account/list';
  private readonly API_MeetRoom_URL = 'http://localhost:8081/meetingroom';
  constructor(private httpClient: HttpClient) {
  }

  //service TriNH

  public getAccount(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.API_Account_URL);
  }
  //service TriNH

  public getMeetingRoom(): Observable<MeetingRoom[]>{
    return this.httpClient.get<MeetingRoom[]>(this.API_MeetRoom_URL);
  }

  //service TriNH

  public addFeedback(feedBack: FeedBack): Observable<void> {
    return this.httpClient.post<void>(this.API_FEEDBACK_URL  +"/addFeedTechnical", feedBack);
  }
  //service TriNH

  public findFeedbackById(id: number): Observable<FeedBack> {
    return this.httpClient.get<FeedBack>(this.API_FEEDBACK_URL + '/find/' + (id));
  }
  //service TriNH

  public updateFeedbackTech(updateFeedback: FeedBack, value: any): Observable<void> {
    console.log(this.API_FEEDBACK_URL + '/update/' + updateFeedback.id);
    return this.httpClient.put<void>(this.API_FEEDBACK_URL + '/updateFeedTechnical/' + updateFeedback.id, updateFeedback);
  }

}
