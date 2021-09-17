import {Account} from './Account';
import {FeedBackType} from './FeedBackType';
import {ImageFeedBack} from './ImageFeedBack';
import {MeetingRoom} from './MeetingRoom';


export class FeedBack {
  id: number;
  title: string;
  description: string;
  dateFeedback: Date;
  handle: boolean;
  feedBackType: FeedBackType;
  account: Account;
  meetingRoom: MeetingRoom;
  content: string
  imageFeedBackList: ImageFeedBack[];


}
