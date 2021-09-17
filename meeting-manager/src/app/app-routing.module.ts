import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackComponent} from './client/employee/client-feedback/feedback/feedback.component';
import {FeedbackListComponent} from './client/employee/client-feedback/feedback-list/feedback-list.component';
import {ListFeedbackadminComponent} from './admin/feedback-manager/list-feedbackadmin/list-feedbackadmin.component';
import {HandlebarsMeetinghouseComponent} from './admin/feedback-manager/handlefeedback-meetingroom/handlebars-meetinghouse.component';





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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
