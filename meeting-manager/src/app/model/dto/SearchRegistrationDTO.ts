// AnhLT
export class SearchRegistrationDTO {
  idMeetingRoom: string;
  dateCheckin: string;
  dateCheckout: string;
  idStatusRoom: string;
  idTypeMeetingRoom: string;
  createDate: string;

  constructor(nameRoom: string, dateCheckin: string,
              dateCheckout: string, statusRoom: string,
              typeRoom: string, createAt: string) {
    this.idMeetingRoom = nameRoom;
    this.dateCheckin = dateCheckin;
    this.dateCheckout = dateCheckout;
    this.idStatusRoom = statusRoom;
    this.idTypeMeetingRoom = typeRoom;
    this.createDate = createAt;
  }
}
