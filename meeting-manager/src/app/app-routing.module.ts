import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './admin/employee-manager/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './admin/employee-manager/update-employee/update-employee.component';



// @ts-ignore
const routes: Routes = [
  {path: 'empList', component: ListEmployeeComponent},
  {path: 'emp-create', component: CreateEmployeeComponent},
  {path: 'emp-update/:id', component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
