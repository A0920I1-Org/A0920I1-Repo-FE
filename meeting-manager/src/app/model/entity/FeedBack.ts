import {Account} from './Account';
import {FeedBackType} from './FeedBackType';
import {ImageFeedBack} from './ImageFeedBack';


export class FeedBack {
  id: number;
  description: string;
  dateFeedback: Date;
  IsHandle: boolean;
  feedBackType: FeedBackType;
  account: Account;
  imageFeedBackList: ImageFeedBack[];


  constructor(id: number, description: string, dateFeedback: Date,
              IsHandle: boolean, feedBackType: FeedBackType,
              account: Account, imageFeedBackList: ImageFeedBack[]) {
    this.id = id;
    this.description = description;
    this.dateFeedback = dateFeedback;
    this.IsHandle = IsHandle;
    this.feedBackType = feedBackType;
    this.account = account;
    this.imageFeedBackList = imageFeedBackList;
  }
}
