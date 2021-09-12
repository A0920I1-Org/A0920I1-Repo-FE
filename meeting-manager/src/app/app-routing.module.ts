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
import {DeleteMeetingComponent} from './admin/meeting-room/delete-meeting/delete-meeting.component';
import {DetailMeetingComponent} from './admin/meeting-room/detail-meeting/detail-meeting.component';
import {ChangePasswordComponent} from './client/employee/account-manager/change-password/change-password.component';
import {UpdateInfoComponent} from './client/employee/account-manager/update-info/update-info.component';
import {LogoutComponent} from './login/logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path: 'delete-employee', component: DeleteEmployeeComponent, canActivate:[AuthGuardService]},
  {path: 'detail-employee', component: DetailEmployeeComponent, canActivate:[AuthGuardService]},
  {path: 'list-employee', component: ListEmployeeComponent, canActivate:[AuthGuardService]},
  {path: 'update-employee', component: UpdateEmployeeComponent, canActivate:[AuthGuardService]},
  {path: 'create-equipment', component: CreateEquipmentComponent, canActivate:[AuthGuardService]},
  {path: 'detail-equipment', component: DetailEquipmentComponent, canActivate:[AuthGuardService]},
  {path: 'list-equipment', component: ListEquipmentComponent, canActivate:[AuthGuardService]},
  {path: 'update-equipment', component: UpdateEquipmentComponent, canActivate:[AuthGuardService]},
  {path: 'create-meeting', component: CreateMeetingComponent, canActivate:[AuthGuardService]},
  {path: 'update-meeting', component: UpdateMeetingComponent, canActivate:[AuthGuardService]},
  {path: 'delete-meeting', component: DeleteMeetingComponent, canActivate:[AuthGuardService]},
  {path: 'detail-meeting', component: DetailMeetingComponent, canActivate:[AuthGuardService]},
  {path: 'change-password', component: ChangePasswordComponent, canActivate:[AuthGuardService]},
  {path: 'update-info', component: UpdateInfoComponent, canActivate:[AuthGuardService]},
  {path: 'detail-meeting', component: DetailMeetingComponent, canActivate:[AuthGuardService]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
