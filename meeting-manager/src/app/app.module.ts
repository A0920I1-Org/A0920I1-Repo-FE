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
import {ListEmployeeComponent} from './admin/employee-manager/list-employee/list-employee.component';
import {DeleteEmployeeComponent} from './admin/employee-manager/delete-employee/delete-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';
import {DetailEmployeeComponent} from './admin/employee-manager/detail-employee/detail-employee.component';
import {FeedbackListComponent} from './client/employee/client-feedback/feedback-list/feedback-list.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FeedbackComponent} from './client/employee/client-feedback/feedback/feedback.component';
import {ListFeedbackadminComponent} from './admin/feedback-manager/list-feedbackadmin/list-feedbackadmin.component';

import {HandlebarsMeetinghouseComponent} from './admin/feedback-manager/handlefeedback-meetingroom/handlebars-meetinghouse.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeleteFeedbackComponent } from './admin/feedback-manager/delete-feedback/delete-feedback.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {ToastrModule} from 'ngx-toastr';

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
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent,
    FeedbackListComponent,
    FeedbackComponent,
    ListFeedbackadminComponent,
    HandlebarsMeetinghouseComponent,
    DeleteFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
