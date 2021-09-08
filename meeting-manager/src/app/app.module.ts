import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './client/client-shared/footer/footer.component';
import {HeaderComponent} from './client/client-shared/header/header.component';
import {NavbarComponent} from './client/client-shared/navbar/navbar.component';
import {RegisterMeetingComponent} from './client/employee/meeting/register-meeting/register-meeting.component';
import {DeleteMeetingComponent} from './client/employee/meeting/delete-meeting/delete-meeting.component';
import {ListMeetingComponent} from './client/employee/meeting/list-meeting/list-meeting.component';
import {CreateMeetingComponent} from './admin/meeting-room/create-meeting/create-meeting.component';
import {UpdateMeetingComponent} from './admin/meeting-room/update-meeting/update-meeting.component';
import {DetailMeetingComponent} from './admin/meeting-room/detail-meeting/detail-meeting.component';
import {ChangePasswordComponent} from './client/employee/account-manager/change-password/change-password.component';
import {ListEquipmentComponent} from './admin/equipment-manager/list-equipment/list-equipment.component';
import {CreateEquipmentComponent} from './admin/equipment-manager/create-equipment/create-equipment.component';
import {UpdateEquipmentComponent} from './admin/equipment-manager/update-equipment/update-equipment.component';
import {DetailEquipmentComponent} from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import {ListFeedbackComponent} from './client/employee/feedback/list-feedback/list-feedback.component';
import {DetailFeedbackComponent} from './client/employee/feedback/detail-feedback/detail-feedback.component';
import {ListEmployeeComponent} from './admin/employee-manager/list-employee/list-employee.component';
import {DeleteEmployeeComponent} from './admin/employee-manager/delete-employee/delete-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';
import {DetailEmployeeComponent} from './admin/employee-manager/detail-employee/detail-employee.component';
import {StatisticalComponent} from './admin/statistical/statistical.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterHistoryService} from './service/RegisterHistoryService';
import {StatusRoomService} from './service/StatusRoomService';
import {TypeMeetingRoomService} from './service/TypeMeetingRoomService';
import {StatisticalService} from './service/StatisticalService';
import {MeetingRoomSerivce} from './service/MeetingRoomSerivce';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {
  CategoryService,
  ChartModule, ColumnSeriesService,
  DataLabelService,
  LegendService,
  LineSeriesService,
  TooltipService
} from '@syncfusion/ej2-angular-charts';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    RegisterMeetingComponent,
    DeleteMeetingComponent,
    ListMeetingComponent,
    CreateMeetingComponent,
    UpdateMeetingComponent,
    DetailMeetingComponent,
    ChangePasswordComponent,
    ListEquipmentComponent,
    CreateEquipmentComponent,
    UpdateEquipmentComponent,
    DetailEquipmentComponent,
    ListFeedbackComponent,
    DetailFeedbackComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent,
    StatisticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule,
    ChartModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    })
  ],
  providers: [
    RegisterHistoryService,
    StatusRoomService,
    TypeMeetingRoomService,
    StatisticalService,
    MeetingRoomSerivce,
    LineSeriesService,
    CategoryService,
    LegendService,
    DataLabelService,
    TooltipService,
    ColumnSeriesService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
