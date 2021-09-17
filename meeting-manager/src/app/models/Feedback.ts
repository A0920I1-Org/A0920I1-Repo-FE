import {FeedbackType} from './FeedbackType';
import {ImageFeedback} from './ImageFeedback';


export class Feedback {
  id: number;
  description: string;
  dateFeedback: Date;
  IsHandle: boolean;
  feedBackType: FeedbackType;
  account: Account;
  imageFeedBackList: ImageFeedback[];


  constructor(id: number, description: string, dateFeedback: Date,
              IsHandle: boolean, feedBackType: FeedbackType,
              account: Account, imageFeedBackList: ImageFeedback[]) {
    this.id = id;
    this.description = description;
    this.dateFeedback = dateFeedback;
    this.IsHandle = IsHandle;
    this.feedBackType = feedBackType;
    this.account = account;
    this.imageFeedBackList = imageFeedBackList;
  }
}
