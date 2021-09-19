import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteMeetingComponent } from './client/employee/meeting/delete-meeting/delete-meeting.component';
import { ListMeetingComponent } from './client/employee/meeting/list-meeting/list-meeting.component';
import { CreateMeetingComponent } from './admin/meeting-room/create-meeting/create-meeting.component';
import { UpdateMeetingComponent } from './admin/meeting-room/update-meeting/update-meeting.component';
import { DetailMeetingComponent } from './admin/meeting-room/detail-meeting/detail-meeting.component';
import { ChangePasswordComponent } from './client/employee/account-manager/change-password/change-password.component';
import { ListEquipmentComponent } from './admin/equipment-manager/list-equipment/list-equipment.component';
import { CreateEquipmentComponent } from './admin/equipment-manager/create-equipment/create-equipment.component';
import { UpdateEquipmentComponent } from './admin/equipment-manager/update-equipment/update-equipment.component';
import { DetailEquipmentComponent } from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import { ListEmployeeComponent } from './admin/employee-manager/list-employee/list-employee.component';
import { DeleteEmployeeComponent } from './admin/employee-manager/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './admin/employee-manager/update-employee/update-employee.component';
import { DetailEmployeeComponent } from './admin/employee-manager/detail-employee/detail-employee.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthHttpInterceptorService} from './service/basic-auth-http-interceptor.service';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {JwtModule} from '@auth0/angular-jwt';
import {DeleteMeetingRoomComponent} from './admin/meeting-room/delete-meeting/delete-meeting-room.component';
import {ChooseEquipmentComponent} from './admin/meeting-room/create-meeting/choose-equipment/choose-equipment.component';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';
import {StatisticalComponent} from './admin/statistical/statistical.component';
import {FeedbackTechnicalUpdateComponent} from './admin/feedback-manager/feedback-technical-update/feedback-technical-update.component';
import {FeedbackListComponent} from './client/employee/client-feedback/feedback-list/feedback-list.component';
import {HandlebarsMeetinghouseComponent} from './admin/feedback-manager/handlefeedback-meetingroom/handlebars-meetinghouse.component';
import {ListFeedbackadminComponent} from './admin/feedback-manager/list-feedbackadmin/list-feedbackadmin.component';
import {DeleteFeedbackComponent} from './admin/feedback-manager/delete-feedback/delete-feedback.component';
import {FeedbackTechnicalCreateComponent} from './client/employee/client-feedback/feedback-technical-create/feedback-technical-create.component';
import {MatInputModule} from '@angular/material/input';
import {
  CategoryService,
  ChartModule, ColumnSeriesService,
  DataLabelService,
  LegendService,
  LineSeriesService,
  TooltipService
} from '@syncfusion/ej2-angular-charts';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {RegisterMeetingComponent} from './client/employee/meeting/register-history/register-meeting.component';
import {FeedbackComponent} from './client/employee/client-feedback/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DeleteMeetingComponent,
    ListMeetingComponent,
    CreateMeetingComponent,
    DeleteMeetingRoomComponent,
    ChooseEquipmentComponent,
    CreateEmployeeComponent,
    StatisticalComponent,
    FeedbackTechnicalUpdateComponent,
    FeedbackListComponent,
    ListFeedbackadminComponent,
    HandlebarsMeetinghouseComponent,
    DeleteFeedbackComponent,
    FeedbackTechnicalCreateComponent,

    UpdateMeetingComponent,
    DetailMeetingComponent,
    ChangePasswordComponent,
    ListEquipmentComponent,
    CreateEquipmentComponent,
    UpdateEquipmentComponent,
    DetailEquipmentComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterMeetingComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,

    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => sessionStorage.getItem('toke')
      }
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, // auth
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
    MatInputModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true,
  },
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
