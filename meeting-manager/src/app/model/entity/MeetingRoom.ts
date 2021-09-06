import {OrderMeeting} from './OrderMeeting';
import {Area} from './Area';
import {RoomStatus} from './RoomStatus';
import {TypeMeetingRoom} from './TypeMeetingRoom';
import {OrderEquipment} from './OrderEquipment';

export class MeetingRoom {
  id: number;
  name: string;
  floor: number;
  imgUrl: string;
  roomStatus: RoomStatus;
  orderMeetingList: OrderMeeting[];
  typeMeetingRoom: TypeMeetingRoom;
  area: Area;
  orderEquipmentList: OrderEquipment[];

  constructor(id: number, name: string, floor: number,
              imgUrl: string, roomStatus: RoomStatus,
              orderMeetingList: OrderMeeting[],
              typeMeetingRoom: TypeMeetingRoom, area: Area,
              orderEquipmentList: OrderEquipment[]) {
    this.id = id;
    this.name = name;
    this.floor = floor;
    this.imgUrl = imgUrl;
    this.roomStatus = roomStatus;
    this.orderMeetingList = orderMeetingList;
    this.typeMeetingRoom = typeMeetingRoom;
    this.area = area;
    this.orderEquipmentList = orderEquipmentList;
  }
}
