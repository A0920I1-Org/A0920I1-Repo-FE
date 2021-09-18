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

  constructor(id: number, username: string, password: string,
              fullname: string, division: string, phone: string,
              email: string, imageUrl: string, accountRoleList: AccountRole[],
              feedBackList: FeedBack[], orderMeetingList: OrderMeeting[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.division = division;
    this.phone = phone;
    this.email = email;
    this.imageUrl = imageUrl;
    this.accountRoleList = accountRoleList;
    this.feedBackList = feedBackList;
    this.orderMeetingList = orderMeetingList;
  }
}

