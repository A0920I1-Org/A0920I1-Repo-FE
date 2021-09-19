import {FeedBack} from './FeedBack';


export class Notification {
  id: number;
  dateNotification: Date;
  isSeen: boolean;
  feedBack: FeedBack;

  constructor(id: number, dateNotification: Date, isSeen: boolean, feedBack: FeedBack) {
    this.id = id;
    this.dateNotification = dateNotification;
    this.isSeen = isSeen;
    this.feedBack = feedBack;
  }
}
