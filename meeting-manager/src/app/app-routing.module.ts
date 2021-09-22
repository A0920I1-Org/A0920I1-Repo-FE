import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListMeetingComponent} from './client/employee/meeting/list-meeting/list-meeting.component';
import {CreateMeetingComponent} from './admin/meeting-room/create-meeting/create-meeting.component';
import {DetailMeetingComponent} from './admin/meeting-room/detail-meeting/detail-meeting.component';
import {UpdateMeetingComponent} from './admin/meeting-room/update-meeting/update-meeting.component';
import {StatisticalComponent} from './admin/statistical/statistical.component';
import {RegisterMeetingComponent} from './client/employee/meeting/register-history/register-meeting.component';
import {DeleteMeetingComponent} from './client/employee/meeting/delete-meeting/delete-meeting.component';

import {LoginComponent} from './login/login/login.component';
import {ListEmployeeComponent} from './admin/employee-manager/list-employee/list-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';
import {CreateEquipmentComponent} from './admin/equipment-manager/create-equipment/create-equipment.component';
import {DetailEquipmentComponent} from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import {ListEquipmentComponent} from './admin/equipment-manager/list-equipment/list-equipment.component';
import {UpdateEquipmentComponent} from './admin/equipment-manager/update-equipment/update-equipment.component';
import {LogoutComponent} from './login/logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';
import {FeedbackTechnicalUpdateComponent} from './admin/feedback-manager/feedback-technical-update/feedback-technical-update.component';
import {FeedbackTechnicalCreateComponent} from './client/employee/client-feedback/feedback-technical-create/feedback-technical-create.component';
import {HandlebarsMeetinghouseComponent} from './admin/feedback-manager/handlefeedback-meetingroom/handlebars-meetinghouse.component';
import {ListFeedbackadminComponent} from './admin/feedback-manager/list-feedbackadmin/list-feedbackadmin.component';
import {FeedbackListComponent} from './client/employee/client-feedback/feedback-list/feedback-list.component';
import {FeedbackComponent} from './client/employee/client-feedback/feedback/feedback.component';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {ListMeetingComponentAdmin} from "./admin/meeting-room/list-meeting/list-meeting.component";
import {SchedulerComponent} from './scheduler/scheduler.component';

const routes: Routes = [
  //TuHC
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'scheduler', component: SchedulerComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},

  {path: 'emp-list', component: ListEmployeeComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'emp-create', component: CreateEmployeeComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'emp-update/:id', component: UpdateEmployeeComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},

  {path: 'list-equipment', component: ListEquipmentComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'create-equipment', component: CreateEquipmentComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'details-equipment/:id', component: DetailEquipmentComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'update-equipment/:id', component: UpdateEquipmentComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},

  {path: 'list-meeting', component: ListMeetingComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'list-meeting-admin', component: ListMeetingComponentAdmin, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'update-meeting/:id', component: UpdateMeetingComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'create-meeting', component: CreateMeetingComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'show-details-meeting/:id', component: DetailMeetingComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},

  {path: 'statistic', component: StatisticalComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'register-history/account/:idAccount', component: RegisterMeetingComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_USER']}},
  {path: 'delete-register-meeting/:idOrder', component: DeleteMeetingComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_USER']}},
  {path: 'register-history/meeting-room/:idMeetingRoom', component: RegisterMeetingComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},

  {path: 'create-feedback-meeting-room' , component : FeedbackComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'list-feedback-user', component: FeedbackListComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'list-feedback-admin', component: ListFeedbackadminComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path: 'handle-feedback/:idFeedback', component: HandlebarsMeetinghouseComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  {path : 'add-feed-technical',component:FeedbackTechnicalCreateComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path : 'update-feedback-technical/:id', component:FeedbackTechnicalUpdateComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},

  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
