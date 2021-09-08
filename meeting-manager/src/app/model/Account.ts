import {AccountRole} from './AccountRole';
import {FeedBack} from './FeedBack';
import {OrderMeeting} from './OrderMeeting';

export class Account {
  id: number;
  username: string;
  password: string;
  fullname: string;
  division: string;
  phone: string;
  email: string;
  imageUrl: string;
  accountRoleList: AccountRole[];
  feedBackList: FeedBack[];
  orderMeetingList: OrderMeeting[];
}

