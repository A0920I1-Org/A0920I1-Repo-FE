import {MeetingRoom} from './MeetingRoom';


export class TypeMeetingRoom {
  id: number;
  name: string;
  meetingRoomList: MeetingRoom[];
  constructor(id: number, name: string, meetingRoomList: MeetingRoom[]) {
    this.id = id;
    this.name = name;
    this.meetingRoomList = meetingRoomList;
  }
}
