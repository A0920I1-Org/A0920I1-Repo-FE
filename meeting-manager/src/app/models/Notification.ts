import {Feedback} from './FeedBack';


export class Notification {
  id: number;
  dateNotification: Date;
  isSeen: boolean;
  feedBack: Feedback;

  constructor(id: number, dateNotification: Date, isSeen: boolean, feedBack: Feedback) {
    this.id = id;
    this.dateNotification = dateNotification;
    this.isSeen = isSeen;
    this.feedBack = feedBack;
  }
}
