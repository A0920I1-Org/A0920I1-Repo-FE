import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatisticalComponent} from './admin/statistical/statistical.component';
import {RegisterMeetingComponent} from './client/employee/meeting/register-meeting/register-meeting.component';
import {DeleteMeetingComponent} from './client/employee/meeting/delete-meeting/delete-meeting.component';


const routes: Routes = [
  {
    path: 'statistic' , component : StatisticalComponent
  },
  {
    path: 'register-history', component: RegisterMeetingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
