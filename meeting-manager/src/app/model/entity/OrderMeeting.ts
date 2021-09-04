import {Account} from './Account';
import {MeetingRoom} from './MeetingRoom';
import {Time} from '@angular/common';
import DateTimeFormat = Intl.DateTimeFormat;


export class OrderMeeting {
  id: number;
  meetingRoom: MeetingRoom;
  account: Account;
  dateCheckin: Date;
  dateCheckout: Date;
  timeStart: string;
  timeEnd: string;
  description: string;
  deleteAt: string;
  reasonDelete: string;
  isConfirm: boolean;
  createAt: string;

  constructor(id: number, meetingRoom: MeetingRoom, account: Account,
              dateCheckin: Date, dateCheckout: Date, timeStart: string,
              timeEnd: string, description: string, deleteAt: string, reasonDelete: string,
              isConfirm: boolean, createAt: string) {
    this.id = id;
    this.meetingRoom = meetingRoom;
    this.account = account;
    this.dateCheckin = dateCheckin;
    this.dateCheckout = dateCheckout;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.description = description;
    this.deleteAt = deleteAt;
    this.reasonDelete = reasonDelete;
    this.isConfirm = isConfirm;
    this.createAt = createAt;
  }
}

