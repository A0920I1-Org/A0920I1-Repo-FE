export class DataChart {
  nameMeetingRoom: string;
  uses: number;
  performance: number;


  constructor(nameMeetingRoom: string, uses: number, performance: number) {
    this.nameMeetingRoom = nameMeetingRoom;
    this.uses = uses;
    this.performance = performance;
  }
}
