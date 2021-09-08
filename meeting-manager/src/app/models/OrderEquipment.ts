import {MeetingRoom} from './MeetingRoom';
import {Equipment} from './Equipment';

export class OrderEquipment {
  id: number;
  equipment: Equipment;
  meetingRoom: MeetingRoom;


  constructor(id: number, equipment: Equipment, meetingRoom: MeetingRoom) {
    this.id = id;
    this.equipment = equipment;
    this.meetingRoom = meetingRoom;
  }
}
