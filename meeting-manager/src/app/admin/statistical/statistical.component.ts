import {Component, OnInit} from '@angular/core';
import {StatisticalService} from '../../service/StatisticalService';
import {OrderMeeting} from '../../model/entity/OrderMeeting';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeMeetingRoom} from '../../model/entity/TypeMeetingRoom';
import {MeetingRoom} from '../../model/entity/MeetingRoom';
import {TypeMeetingRoomService} from '../../service/TypeMeetingRoomService';
import {MeetingRoomSerivce} from '../../service/MeetingRoomSerivce';
import {ToastrService} from 'ngx-toastr';
import {Statistic} from '../../model/dto/Statistic';


@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css'],
  providers: [StatisticalService,
    TypeMeetingRoomService,
    MeetingRoomSerivce]
})
export class StatisticalComponent implements OnInit {
  statistic: Statistic;
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
  isResult = false;

  isMonth = true;
  isDateCheckin = true;
  isDateCheckout = true;

  onInit= true;

  public dataCharts: Object[];
  private month: any;

  constructor(
    private statisticalService: StatisticalService,
    private typeMeetingRoomService: TypeMeetingRoomService,
    private toastrService: ToastrService,
    private meetingRoomService: MeetingRoomSerivce,
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
      title: 'Tên phòng',
      valueType: 'Category'
    };
    this.yAxisPerformance = {
      title: 'Hiệu suất (%)'
    };
    this.xAxisTotalsOfUses = {
      title: 'Tên phòng',
      valueType: 'Category'
    };
    this.yAxisTotalsOfUses = {
      title: 'Số lần sử dụng '
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
    this.isMonth = true;
    this.isDateCheckin = true;
    this.isDateCheckout = true;
    this.dataCharts = [];

    console.log(statisticByDateForm.value);
    this.isDateCheckin = statisticByDateForm.get('dateCheckin').value;
    this.isDateCheckout = statisticByDateForm.get('dateCheckout').value;

    console.log(this.isDateCheckout);
    // @ts-ignore
    if (this.isDateCheckin == null || this.isDateCheckout == null || this.isDateCheckout === '' || this.isDateCheckin === '') {
      console.log('khong du date');
      this.isDateCheckout = false;
      this.isMonth = false
    } else {
      console.log('du date');
      this.isDateCheckout = true;
      this.isMonth = true;
    }
    this.statisticalService.statisticByDate(statisticByDateForm.value).subscribe(
      (data) => {
        console.log(data);
        if (data.length === 0) {
          this.isResult = false;
          this.statistics = data;
          this.toastrService.info('Không tìm thấy kết quả phù hợp', 'Thông báo');
        } else {
          this.isResult = true;
          this.statistics = data;
          this.statisticalService.calculateTotalsOfUses().subscribe(
            (use) => {
              this.dataCharts = use;
              console.log(this.dataCharts);
            }, error => console.log(error)
          );
        }
      }, error => console.log(error)
    );
  }

  onSubmitRoomForm(statisticByRoomForm: FormGroup) {
    console.log(statisticByRoomForm.value);
    this.month = statisticByRoomForm.get('month').value;

    console.log(this.month);
    if (this.month == null) {
      this.isDateCheckout = false;
      this.isMonth = false;
    } else {
      this.isDateCheckout = true;
      this.isMonth = true;
    }
    this.statisticalService.statisticByRoom(statisticByRoomForm.value).subscribe(
      (data) => {
        if (data.length === 0) {
          this.isResult = false;
          this.statistics = data;
          this.toastrService.info('Không tìm thấy kết quả phù hợp', 'Thông báo');
        } else {
          this.isResult = true;
          console.log(data);
          this.statistics = data;
          this.statisticalService.calculateTotalsOfUses().subscribe(
            (use) => {
              console.log(use);
              this.dataCharts = use;
            }
          );
        }
      });
  }
}
