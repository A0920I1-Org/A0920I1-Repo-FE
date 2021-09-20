import {Account} from './Account';
import {FeedBackType} from './FeedBackType';
import {ImageFeedBack} from './ImageFeedBack';
import {MeetingRoom} from './MeetingRoom';


export class FeedBack {
  id: number;
  description: string;
  dateFeedback: Date;
  handle: boolean;
  feedBackType: FeedBackType;
  account: Account;
  imageFeedBackList: ImageFeedBack[];
  title: string;
  meetingRoom: MeetingRoom;
  content: string;
}
