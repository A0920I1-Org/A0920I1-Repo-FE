export class StatisticByRoom {
  typeMeetingRoom: string;
  nameRoom: string;
  month: string;
  // year: string;

  constructor(typeMeetingRoom: string, nameRoom: string, month: string, year: string) {
    this.typeMeetingRoom = typeMeetingRoom;
    this.nameRoom = nameRoom;
    this.month = month;
    // this.year = year;
  }
}
