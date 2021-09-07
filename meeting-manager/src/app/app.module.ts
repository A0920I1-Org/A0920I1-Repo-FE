import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './client/client-shared/footer/footer.component';
import { HeaderComponent } from './client/client-shared/header/header.component';
import { NavbarComponent } from './client/client-shared/navbar/navbar.component';
import { RegisterMeetingComponent } from './client/employee/meeting/register-meeting/register-meeting.component';
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
import { ListFeedbackComponent } from './client/employee/feedback/list-feedback/list-feedback.component';
import { DetailFeedbackComponent } from './client/employee/feedback/detail-feedback/detail-feedback.component';
import { ListEmployeeComponent } from './admin/employee-manager/list-employee/list-employee.component';
import { DeleteEmployeeComponent } from './admin/employee-manager/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './admin/employee-manager/update-employee/update-employee.component';
import { DetailEmployeeComponent } from './admin/employee-manager/detail-employee/detail-employee.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
