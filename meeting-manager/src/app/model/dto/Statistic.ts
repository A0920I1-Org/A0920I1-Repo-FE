export class Statistic {
  dateCheckin: string;
  dateCheckout: string;
  typeMeetingRoom: string;
  nameRoom: string;
  month: string;


  constructor(dateCheckin: string, dateCheckout: string, typeMeetingRoom: string, nameRoom: string, month: string) {
    this.dateCheckin = dateCheckin;
    this.dateCheckout = dateCheckout;
    this.typeMeetingRoom = typeMeetingRoom;
    this.nameRoom = nameRoom;
    this.month = month;
  }
}
