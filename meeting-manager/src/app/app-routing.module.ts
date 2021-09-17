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
import {DeleteEmployeeComponent} from './admin/employee-manager/delete-employee/delete-employee.component';
import {DetailEmployeeComponent} from './admin/employee-manager/detail-employee/detail-employee.component';
import {ListEmployeeComponent} from './admin/employee-manager/list-employee/list-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';
import {CreateEquipmentComponent} from './admin/equipment-manager/create-equipment/create-equipment.component';
import {DetailEquipmentComponent} from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import {ListEquipmentComponent} from './admin/equipment-manager/list-equipment/list-equipment.component';
import {UpdateEquipmentComponent} from './admin/equipment-manager/update-equipment/update-equipment.component';
import {ChangePasswordComponent} from './client/employee/account-manager/change-password/change-password.component';
import {UpdateInfoComponent} from './client/employee/account-manager/update-info/update-info.component';
import {LogoutComponent} from './login/logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';
import {FeedbackTechnicalUpdateComponent} from './admin/feedback-manager/feedback-technical-update/feedback-technical-update.component';
import {FeedbackTechnicalCreateComponent} from './client/employee/client-feedback/feedback-technical-create/feedback-technical-create.component';
import {HandlebarsMeetinghouseComponent} from './admin/feedback-manager/handlefeedback-meetingroom/handlebars-meetinghouse.component';
import {ListFeedbackadminComponent} from './admin/feedback-manager/list-feedbackadmin/list-feedbackadmin.component';
import {FeedbackListComponent} from './client/employee/client-feedback/feedback-list/feedback-list.component';
import {FeedbackComponent} from './client/employee/client-feedback/feedback/feedback.component';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';

//TuHC
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'emp-list', component: ListEmployeeComponent},
  {path: 'emp-create', component: CreateEmployeeComponent},
  {path: 'emp-update/:id', component: UpdateEmployeeComponent},
  {path: 'list-equipment', component: ListEquipmentComponent},
  {path: 'create-equipment', component: CreateEquipmentComponent},
  {path: 'details-equipment/:id', component: DetailEquipmentComponent},
  {path: 'update-equipment/:id', component: UpdateEquipmentComponent},
  {path: 'list-meeting', component: ListMeetingComponent},
  {path: 'update-meeting/:id', component: UpdateMeetingComponent},
  {path: 'create-meeting', component: CreateMeetingComponent},
  {path: 'show-details-meeting/:id', component: DetailMeetingComponent},
  {path: 'statistic', component: StatisticalComponent},
  {path: 'register-history/account/:idAccount', component: RegisterMeetingComponent},
  {path: 'delete-register-meeting/:idOrder', component: DeleteMeetingComponent},
  {path: 'register-history/meeting-room/:idMeetingRoom', component: RegisterMeetingComponent},
  {
    path: '' , component : FeedbackComponent
  },
  {
    path: 'feedback' , component : FeedbackComponent
  },
  {
    path: 'list', component: FeedbackListComponent
  },
  {
    path: 'list-feedbackadmin', component: ListFeedbackadminComponent
  },
  {
    path: 'handle-feedback/:idfeedback', component: HandlebarsMeetinghouseComponent
  },
  {
    path : 'addFeedTechnical',component:FeedbackTechnicalCreateComponent,
  },
  {
    path : 'updateFeedTechnical/:id', component:FeedbackTechnicalUpdateComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
