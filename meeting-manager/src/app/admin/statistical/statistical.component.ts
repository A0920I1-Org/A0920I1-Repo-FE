import {Component, OnInit} from '@angular/core';
import {StatisticalService} from '../../service/StatisticalService';
import {OrderMeeting} from '../../model/entity/OrderMeeting';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeMeetingRoom} from '../../model/entity/TypeMeetingRoom';
import {MeetingRoom} from '../../model/entity/MeetingRoom';
import {TypeMeetingRoomService} from '../../service/TypeMeetingRoomService';
import {MeetingRoomSerivce} from '../../service/MeetingRoomSerivce';
import {ToastrService} from 'ngx-toastr';

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
  xAxisPerformance: any;
  yAxisPerformance: any;
  performanceChartTitle: string;
  legend: any;
  markerSettings: any;
  toolTipSettings: any;
  xAxisTotalsOfUses: any;
  yAxisTotalsOfUses: any;
  usesChartTitle: any;
  // tslint:disable-next-line:ban-types
  public dataCharts: Object[];
  private month: any;
  constructor(
    private statisticalService: StatisticalService,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private toastrService: ToastrService,
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
      title: 'performance (%)'
    };
    this.xAxisTotalsOfUses = {
      title: 'Name Meeting Room',
      valueType: 'Category'
    };
    this.yAxisTotalsOfUses = {
      title: 'Uses '
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
    this.dataCharts = [];
  }

  onSubmitDateForm(statisticByDateForm: FormGroup) {
    console.log(statisticByDateForm.value);
    this.statisticalService.statisticByDate(statisticByDateForm.value).subscribe(
      (data) => {
        console.log(data);
        this.statistics = data;
        this.statisticalService.calculateTotalsOfUses().subscribe(
          (use) => {
            this.dataCharts = use;
            console.log(this.dataCharts);
          }, error => console.log(error)
        );
      }, error => console.log(error)
    );
  }

  onSubmitRoomForm(statisticByRoomForm: FormGroup) {
    console.log(statisticByRoomForm.value);
    this.month = statisticByRoomForm.get('month').value;
    console.log(this.month);
    if (this.month == null){
      this.toastrService.info('Bạn cần chọn tháng để thống kê hiệu suất', 'Thông báo');
    }
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
