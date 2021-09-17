export class SearchRegistrationDTO {
  idMeetingRoom: string;
  dateCheckin: string;
  dateCheckout: string;
  idStatusRoom: string;
  idTypeRoom: string;
  createDate: string;

  constructor(nameRoom: string, dateCheckin: string,
              dateCheckout: string, statusRoom: string,
              typeRoom: string, createAt: string) {
    this.idMeetingRoom = nameRoom;
    this.dateCheckin = dateCheckin;
    this.dateCheckout = dateCheckout;
    this.idStatusRoom = statusRoom;
    this.idTypeRoom = typeRoom;
    this.createDate = createAt;
  }
}
