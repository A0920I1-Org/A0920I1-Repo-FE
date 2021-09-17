import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {RegisterMeetingComponent} from './client/employee/meeting/register-history/register-meeting.component';

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

import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {environment} from 'src/environments/environment';


// @ts-ignore
import {AngularFireModule} from '@angular/fire';
// @ts-ignore
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ChooseEquipmentComponent} from './admin/meeting-room/create-meeting/choose-equipment/choose-equipment.component';
import {DeleteMeetingRoomComponent} from './admin/meeting-room/delete-meeting/delete-meeting-room.component';
import {
  CategoryService,
  ChartModule, ColumnSeriesService,
  DataLabelService,
  LegendService,
  LineSeriesService,
  TooltipService
} from '@syncfusion/ej2-angular-charts';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import {RegisterHistoryService} from './service/RegisterHistoryService';
import {StatusRoomService} from './service/StatusRoomService';
import {TypeMeetingRoomService} from './service/TypeMeetingRoomService';
import {StatisticalService} from './service/StatisticalService';
import {MeetingRoomSerivce} from './service/MeetingRoomSerivce';
import {StatisticalComponent} from './admin/statistical/statistical.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
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
    CreateEmployeeComponent,
    ChooseEquipmentComponent,
    DeleteMeetingRoomComponent,
    RegisterMeetingComponent,
    StatisticalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSnackBarModule,
    ChartModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    MatInputModule
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
    ToastrService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

