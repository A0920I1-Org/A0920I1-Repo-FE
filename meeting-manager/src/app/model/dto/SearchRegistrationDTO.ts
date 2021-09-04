export class SearchRegistrationDTO {
  nameRoom: string;
  dateCheckin: string;
  dateCheckout: string;
  statusRoom: string;
  typeRoom: string;
  createAt: string;

  constructor(nameRoom: string, dateCheckin: string,
              dateCheckout: string, statusRoom: string,
              typeRoom: string, createAt: string) {
    this.nameRoom = nameRoom;
    this.dateCheckin = dateCheckin;
    this.dateCheckout = dateCheckout;
    this.statusRoom = statusRoom;
    this.typeRoom = typeRoom;
    this.createAt = createAt;
  }
}
