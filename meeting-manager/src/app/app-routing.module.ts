import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListMeetingComponent} from './client/employee/meeting/list-meeting/list-meeting.component';
import {CreateMeetingComponent} from './admin/meeting-room/create-meeting/create-meeting.component';
import {DetailMeetingComponent} from './admin/meeting-room/detail-meeting/detail-meeting.component';
import {ChooseEquipmentComponent} from './admin/meeting-room/create-meeting/choose-equipment/choose-equipment.component';
import {UpdateMeetingComponent} from './admin/meeting-room/update-meeting/update-meeting.component';
import {StatisticalComponent} from './admin/statistical/statistical.component';
import {RegisterMeetingComponent} from './client/employee/meeting/register-history/register-meeting.component';
import {DeleteMeetingComponent} from './client/employee/meeting/delete-meeting/delete-meeting.component';



import { ListEmployeeComponent } from './admin/employee-manager/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';
import {ListEquipmentComponent} from './admin/equipment-manager/list-equipment/list-equipment.component';
import {CreateEquipmentComponent} from './admin/equipment-manager/create-equipment/create-equipment.component';
import {DetailEquipmentComponent} from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import {UpdateEquipmentComponent} from './admin/equipment-manager/update-equipment/update-equipment.component';



const routes: Routes = [
  {path: 'empList', component: ListEmployeeComponent},
  {path: 'emp-create', component: CreateEmployeeComponent},
  {path: 'emp-update/:id', component: UpdateEmployeeComponent},
  {path: 'list-equipment' , component : ListEquipmentComponent},
  {path: 'create-equipment' , component: CreateEquipmentComponent},
  {path: ':id' , component : DetailEquipmentComponent},
  {path: 'update-equipment/:id' , component: UpdateEquipmentComponent},
  {component: ListMeetingComponent , path: ''},
  {component: UpdateMeetingComponent, path: 'update/:id'},
  {path: 'createMeeting', component: CreateMeetingComponent},
  {path: 'showDetailsMeeting/:id', component: DetailMeetingComponent},
  {path: 'chooseEquipment', component: ChooseEquipmentComponent},
    {
      path: 'statistic' , component : StatisticalComponent
    },
    {
      path: 'register-history/account/:idAccount', component: RegisterMeetingComponent
    },
    {
      path: 'deleteRegisterMeeting/:idOrder', component: DeleteMeetingComponent
    },
    {
      path: 'register-history/meeting-room/:idMeetingRoom', component: RegisterMeetingComponent
    }

/*
* Author: Ho Van Hue, created 6/9/2021(dd/mm/yyyy)
* */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
