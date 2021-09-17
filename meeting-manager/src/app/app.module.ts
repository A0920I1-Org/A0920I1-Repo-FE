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
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { ChooseEquipmentComponent } from './admin/meeting-room/create-meeting/choose-equipment/choose-equipment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ToastrModule} from 'ngx-toastr';
import {DeleteMeetingRoomComponent} from './admin/meeting-room/delete-meeting/delete-meeting-room.component';

// @ts-ignore
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
    ChooseEquipmentComponent,
    DeleteMeetingRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestor
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

