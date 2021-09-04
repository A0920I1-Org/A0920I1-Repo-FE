export class StatisticByDate {
  dateCheckin: string;
  dateCheckout: string;

  constructor(dateCheckin: string, dateCheckout: string) {
    this.dateCheckin = dateCheckin;
    this.dateCheckout = dateCheckout;
  }
}
