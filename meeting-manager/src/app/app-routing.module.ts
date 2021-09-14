import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './admin/employee-manager/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './admin/employee-manager/create-employee/create-employee.component';



// @ts-ignore
const routes: Routes = [
  {path: 'empList', component: ListEmployeeComponent},
  {path: 'emp-create', component: CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
