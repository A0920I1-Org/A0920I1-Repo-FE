import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login/login.component';
import {DeleteEmployeeComponent} from './admin/employee-manager/delete-employee/delete-employee.component';
import {DetailEmployeeComponent} from './admin/employee-manager/detail-employee/detail-employee.component';
import {ListEmployeeComponent} from './admin/employee-manager/list-employee/list-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';
import {CreateEquipmentComponent} from './admin/equipment-manager/create-equipment/create-equipment.component';
import {DetailEquipmentComponent} from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import {ListEquipmentComponent} from './admin/equipment-manager/list-equipment/list-equipment.component';
import {UpdateEquipmentComponent} from './admin/equipment-manager/update-equipment/update-equipment.component';
import {CreateMeetingComponent} from './admin/meeting-room/create-meeting/create-meeting.component';
import {UpdateMeetingComponent} from './admin/meeting-room/update-meeting/update-meeting.component';
import {DetailMeetingComponent} from './admin/meeting-room/detail-meeting/detail-meeting.component';
import {ChangePasswordComponent} from './client/employee/account-manager/change-password/change-password.component';
import {UpdateInfoComponent} from './client/employee/account-manager/update-info/update-info.component';
import {LogoutComponent} from './login/logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';
import {DeleteMeetingComponent} from './client/employee/meeting/delete-meeting/delete-meeting.component';

//TuHC
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'delete-employee', component: DeleteEmployeeComponent, canActivate:[AuthGuardService], data: {expectedRole: ['ROLE_ADMIN']}},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
