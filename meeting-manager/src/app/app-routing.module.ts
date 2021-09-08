import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateMeetingComponent} from './admin/meeting-room/update-meeting/update-meeting.component';
import {ListMeetingComponent} from './client/employee/meeting/list-meeting/list-meeting.component';


const routes: Routes = [
  {component: ListMeetingComponent , path: ''},
  {component: UpdateMeetingComponent, path: 'update/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
