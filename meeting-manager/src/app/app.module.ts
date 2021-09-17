import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {FeedBackComponent} from './client/employee/feedback/feed-back.component';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import { FeedbackTechnicalUpdateComponent } from './admin/feedback-manager/feedback-technical-update/feedback-technical-update.component';
import { FeedbackTechnicalComponent } from './client/employee/feedback/feedback-technical/feedback-technical.component';
import {RouterModule} from "@angular/router";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

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
    ListFeedbackComponent,
    DetailFeedbackComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent,
    FeedbackTechnicalUpdateComponent,
    FeedbackTechnicalComponent,
    HeaderComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    RouterModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
