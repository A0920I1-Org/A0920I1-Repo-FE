import {Component, OnInit} from '@angular/core';
import {View,EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-scheduler-calendar',
  templateUrl: './scheduler-calendar.component.html',
  styleUrls: ['./scheduler-calendar.component.css']
})
export class SchedulerCalendarComponent implements OnInit {
  title: 'Scheduler Calendar';
  public setView: View = 'Week';
  public setDate: Date = new Date();
  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2021, 8, 13, 10, 0),
    EndTime: new Date(2021, 8, 15, 12, 30)
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
