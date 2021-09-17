import {AppComponent} from "./app.component";
import {FeedBackComponent} from "./client/employee/feedback/feed-back.component";
import {ListMeetingComponent} from "./client/employee/meeting/list-meeting/list-meeting.component";
import {DetailMeetingComponent} from "./admin/meeting-room/detail-meeting/detail-meeting.component";
import {RegisterMeetingComponent} from "./client/employee/meeting/register-meeting/register-meeting.component";
import {DeleteMeetingComponent} from "./admin/meeting-room/delete-meeting/delete-meeting.component";
import {NgModule} from "@angular/core";
import {CreateMeetingComponent} from "./admin/meeting-room/create-meeting/create-meeting.component";
import {UpdateMeetingComponent} from "./admin/meeting-room/update-meeting/update-meeting.component";
import {ListEquipmentComponent} from "./admin/equipment-manager/list-equipment/list-equipment.component";
import {ChangePasswordComponent} from "./client/employee/account-manager/change-password/change-password.component";
import {CreateEquipmentComponent} from "./admin/equipment-manager/create-equipment/create-equipment.component";
import {NgxPaginationModule} from "ngx-pagination";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ListEmployeeComponent} from "./admin/employee-manager/list-employee/list-employee.component";
import {ListFeedbackadminComponent} from "./admin/feedback-manager/list-feedbackadmin/list-feedbackadmin.component";
import {DeleteFeedbackComponent} from "./admin/feedback-manager/delete-feedback/delete-feedback.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DetailEmployeeComponent} from "./admin/employee-manager/detail-employee/detail-employee.component";
import {AppRoutingModule} from "./app-routing.module";
import {ToastrModule} from "ngx-toastr";
import {MatTableModule} from "@angular/material/table";
import {DetailEquipmentComponent} from "./admin/equipment-manager/detail-equipment/detail-equipment.component";
import {FeedbackComponent} from "./client/employee/client-feedback/feedback/feedback.component";
import {FeedbackListComponent} from "./client/employee/client-feedback/feedback-list/feedback-list.component";
import {FeedbackTechnicalComponent} from "./admin/feedback-manager/list-feedbackadmin/feedback-technical/feedback-technical.component";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "./header/header.component";
import {HandlebarsMeetinghouseComponent} from "./admin/feedback-manager/handlefeedback-meetingroom/handlebars-meetinghouse.component";
import {FeedbackTechnicalUpdateComponent} from "./admin/feedback-manager/feedback-technical-update/feedback-technical-update.component";
import {DeleteEmployeeComponent} from "./admin/employee-manager/delete-employee/delete-employee.component";
import {FooterComponent} from "./footer/footer.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {UpdateEmployeeComponent} from "./admin/employee-manager/update-employee/update-employee.component";
import {MatDialogModule} from "@angular/material/dialog";
import {UpdateEquipmentComponent} from "./admin/equipment-manager/update-equipment/update-equipment.component";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [

    AppComponent,
    FeedBackComponent,
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
    FeedbackTechnicalUpdateComponent,
    FeedbackTechnicalComponent,
    HeaderComponent,
    FooterComponent,

    FeedbackListComponent,
    FeedbackComponent,
    ListFeedbackadminComponent,
    HandlebarsMeetinghouseComponent,
    DeleteFeedbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxPaginationModule,
    RouterModule,
    MatDatepickerModule,

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

    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
 

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
