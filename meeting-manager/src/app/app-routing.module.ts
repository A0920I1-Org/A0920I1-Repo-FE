import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListMeetingComponent} from './client/employee/meeting/list-meeting/list-meeting.component';
import {CreateMeetingComponent} from './admin/meeting-room/create-meeting/create-meeting.component';
import {DetailMeetingComponent} from './admin/meeting-room/detail-meeting/detail-meeting.component';
import {ChooseEquipmentComponent} from './admin/meeting-room/create-meeting/choose-equipment/choose-equipment.component';

/*
* Author: Ho Van Hue, created 6/9/2021(dd/mm/yyyy)
* */
const routes: Routes = [
  {path: '', component: ListMeetingComponent},
  {path: 'createMeeting', component: CreateMeetingComponent},
  {path: 'showDetailsMeeting/:id', component: DetailMeetingComponent},
  {path: 'chooseEquipment', component: ChooseEquipmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
