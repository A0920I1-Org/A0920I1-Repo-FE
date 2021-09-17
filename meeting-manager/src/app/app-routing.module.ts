import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeeComponent } from './admin/employee-manager/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';
import {ListEquipmentComponent} from './admin/equipment-manager/list-equipment/list-equipment.component';
import {CreateEquipmentComponent} from './admin/equipment-manager/create-equipment/create-equipment.component';
import {DetailEquipmentComponent} from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import {UpdateEquipmentComponent} from './admin/equipment-manager/update-equipment/update-equipment.component';


// @ts-ignore
const routes: Routes = [
  {path: 'empList', component: ListEmployeeComponent},
  {path: 'emp-create', component: CreateEmployeeComponent},
  {path: 'emp-update/:id', component: UpdateEmployeeComponent},
  {path: 'list-equipment' , component : ListEquipmentComponent},
  {path: 'create-equipment' , component: CreateEquipmentComponent},
  {path: ':id' , component : DetailEquipmentComponent},
  {path: 'update-equipment/:id' , component: UpdateEquipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
