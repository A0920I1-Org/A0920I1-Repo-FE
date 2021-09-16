import {OrderMeeting} from './OrderMeeting';
import {Area} from './Area';
import {RoomStatus} from './RoomStatus';
import {TypeMeetingRoom} from './TypeMeetingRoom';
import {OrderEquipment} from './OrderEquipment';

export class MeetingRoom {
  id: number;
  name: string;
  roomStatus: RoomStatus;
  orderMeetingList: OrderMeeting[];
  typeMeetingRoom: TypeMeetingRoom;
  area: Area;
  orderEquipmentList: OrderEquipment[];


}
