import {Component, OnInit} from '@angular/core';
import {StatisticalService} from '../../service/StatisticalService';
import {OrderMeeting} from '../../model/entity/OrderMeeting';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeMeetingRoom} from '../../model/entity/TypeMeetingRoom';
import {MeetingRoom} from '../../model/entity/MeetingRoom';
import {TypeMeetingRoomService} from '../../service/TypeMeetingRoomService';
import {MeetingRoomSerivce} from '../../service/MeetingRoomSerivce';
import {Statistic} from '../../model/dto/Statistic';
import {DataChart} from '../../model/dto/dataChart';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css'],
  providers: [StatisticalService,
    TypeMeetingRoomService,
    MeetingRoomSerivce]
})
export class StatisticalComponent implements OnInit {
  statistics: OrderMeeting[];
  statisticByDateForm: FormGroup;
  statisticByRoomForm: FormGroup;
  typesMeetingRoom: TypeMeetingRoom[];
  meetingRooms: MeetingRoom[];
  page = 1;
  performanceDataChart: any;
  usesDataChart: any;
  xAxisPerformance: any;
  yAxisPerformance: any;
  performanceChartTitle: string;
  legend: any;
  markerSettings: any;
  toolTipSettings: any;
  xAxisTotalsOfUses: any;
  yAxisTotalsOfUses: any;
  usesChartTitle: any;
  dataCharts: DataChart[];
  constructor(
    private statisticalService: StatisticalService,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private meetingRoomService: MeetingRoomSerivce
  ) {
  }

  ngOnInit(): void {
    this.statisticByDateForm = new FormGroup({
      dateCheckin: new FormControl(null),
      dateCheckout: new FormControl(null)
    });
    this.statisticByRoomForm = new FormGroup({
      idTypeMeetingRoom: new FormControl(null),
      idMeetingRoom: new FormControl(null),
      month: new FormControl(null),
      // year : new FormControl(null),
    });
    this.usesChartTitle = 'Totals Of Uses';
    this.performanceChartTitle = 'Performance';
    this.toolTipSettings = {
      enable: true
    };
    this.xAxisPerformance = {
      title: 'nameMeetingRoom',
      valueType: 'Category'
    };
    this.yAxisPerformance = {
      title: 'performance'
    };
    this.xAxisTotalsOfUses = {
      title: 'Name Meeting Room',
      valueType: 'Category'
    };
    this.yAxisTotalsOfUses = {
      title: 'Uses'
    };
    this.legend = {
      visible: true
    };
    this.markerSettings = {
      visible: true,
      dataLabel: {
        visible: true
      }
    };
    this.typeMeetingRoomService.getTypesMeetingRoom().subscribe(
      (data) => {
        console.log(data);
        this.typesMeetingRoom = data;
      }
    );
    this.meetingRoomService.getMeetingRoom().subscribe(
      (data) => {
        console.log(data);
        this.meetingRooms = data;
      }
    );
  }

  onSubmitDateForm(statisticByDateForm: FormGroup) {
    console.log(statisticByDateForm.value);
    this.statisticalService.statisticByDate(statisticByDateForm.value).subscribe(
      (data) => {
        console.log(data);
        this.statistics = data;
        this.statisticalService.calculateTotalsOfUses().subscribe(
          (use) => {
            console.log(use);
            this.dataCharts = use;
          }
        );
      }, error => console.log(error)
    );
  }

  onSubmitRoomForm(statisticByRoomForm: FormGroup) {
    console.log(statisticByRoomForm.value);
    this.statisticalService.statisticByRoom(statisticByRoomForm.value).subscribe(
      (data) => {
        console.log(data);
        this.statistics = data;
        this.statisticalService.calculateTotalsOfUses().subscribe(
          (use) => {
            console.log(use);
            this.dataCharts = use;
          }
        );
      });
  }
}
