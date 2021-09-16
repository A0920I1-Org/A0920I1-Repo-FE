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


}
