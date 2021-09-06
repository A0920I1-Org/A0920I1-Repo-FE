import {Component, OnInit} from '@angular/core';
import {StatisticalService} from '../../service/StatisticalService';
import {OrderMeeting} from '../../model/entity/OrderMeeting';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeMeetingRoom} from '../../model/entity/TypeMeetingRoom';
import {MeetingRoom} from '../../model/entity/MeetingRoom';
import {TypeMeetingRoomService} from '../../service/TypeMeetingRoomService';
import {MeetingRoomSerivce} from '../../service/MeetingRoomSerivce';

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
      typeMeetingRoom: new FormControl(null),
      nameRoom: new FormControl(null),
      month: new FormControl(null),
      // year : new FormControl(null),
    });
    this.usesChartTitle = 'Totals Of Uses';
    this.performanceChartTitle = 'Statistical';
    this.toolTipSettings = {
      enable: true
    };
    this.xAxisPerformance = {
      title: 'Name Room',
      valueType: 'Category'
    };
    this.yAxisPerformance = {
      title: 'Performance'
    };
    this.xAxisTotalsOfUses = {
      title: 'Name Room',
      valueType: 'Category'
    };
    this.yAxisTotalsOfUses = {
      title: 'Totals Of Uses'
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
        // this.totalsOfUses = this.statistics.length;
        // this.statisticalService.calculatePerformance().subscribe(
        //   (performances) => {
        //     // this.performance = performance;
        //     this.performanceDataChart = [
        //       {nameRoom : 'Jan', performance : performances[0]}
        //     ];
        //   }
        // );
      }, error => console.log(error)
    );
  }

  onSubmitRoomForm(statisticByRoomForm: FormGroup) {
    this.statisticalService.statisticByRoom(statisticByRoomForm.value).subscribe(
      (data) => {
        this.statistics = data;
        // this.totalsOfUses = this.statistics.length;
        // this.statisticalService.calculatePerformance().subscribe(
        //   (performances) => {
        // this.performanceDataChart = [
        //   {month : 'Jan', performance : performances[0]},
        //   {month : 'Feb', performance : performances[1]},
        //   {month : 'Mar', performance : performances[2]},
        //   {month : 'Apr', performance : performances[3]},
        //   {month : 'May', performance : performances[4]},
        //   {month : 'Jun', performance : performances[5]},
        //   {month : 'Jul', performance : performances[6]},
        //   {month : 'Aug', performance : performances[7]},
        //   {month : 'Sep', performance : performances[8]},
        //   {month : 'Oct', performance : performances[9]},
        //   {month : 'Nov', performance : performances[10]},
        //   {month : 'Dec', performance : performances[11]},
        // ];
        //   }
        // );
        // }
      });
  }
}
