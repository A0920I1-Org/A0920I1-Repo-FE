import {OrderMeeting} from './OrderMeeting';
import {Area} from './Area';
import {RoomStatus} from './RoomStatus';
import {TypeMeetingRoom} from './TypeMeetingRoom';
import {OrderEquipment} from './OrderEquipment';

export class MeetingRoom {
  id: number;
  name: string;
  floors: number;
  imageUrl: string;
  roomStatus: RoomStatus;
  orderMeetingList: OrderMeeting[];
  typeMeetingRoom: TypeMeetingRoom;
  area: Area;
  orderEquipmentList: OrderEquipment[];

  constructor(id: number, name: string ,floors:number,imageUrl:string, roomStatus: RoomStatus,
              orderMeetingList: OrderMeeting[], typeMeetingRoom: TypeMeetingRoom,
              area: Area, orderEquipmentList: OrderEquipment[]) {
    this.id = id;
    this.name = name;
    this.floors = floors;
    this.imageUrl = imageUrl;
    this.roomStatus = roomStatus;
    this.orderMeetingList = orderMeetingList;
    this.typeMeetingRoom = typeMeetingRoom;
    this.area = area;
    this.orderEquipmentList = orderEquipmentList;
  }

}
