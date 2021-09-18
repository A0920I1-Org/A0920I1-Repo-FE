import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackTechnicalUpdateComponent} from "./admin/feedback-manager/feedback-technical-update/feedback-technical-update.component";
import {FeedbackComponent} from './client/employee/client-feedback/feedback/feedback.component';
import {FeedbackListComponent} from './client/employee/client-feedback/feedback-list/feedback-list.component';
import {ListFeedbackadminComponent} from './admin/feedback-manager/list-feedbackadmin/list-feedbackadmin.component';
import {HandlebarsMeetinghouseComponent} from './admin/feedback-manager/handlefeedback-meetingroom/handlebars-meetinghouse.component';
import {FeedbackTechnicalComponent} from "./admin/feedback-manager/list-feedbackadmin/feedback-technical/feedback-technical.component";





const routes: Routes = [
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
     path : 'add',    component:FeedbackTechnicalComponent,
  },
  {
   path : 'update/:id', component:FeedbackTechnicalUpdateComponent,
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
