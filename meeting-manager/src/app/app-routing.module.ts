import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackTechnicalComponent} from "./client/employee/feedback/feedback-technical/feedback-technical.component";
import {FeedbackTechnicalUpdateComponent} from "./admin/feedback-manager/feedback-technical-update/feedback-technical-update.component";
import {FeedBackComponent} from "./client/employee/feedback/feed-back.component";


const routes: Routes = [
  {
    component:FeedbackTechnicalComponent, path : 'add'
  },
  {
    component:FeedbackTechnicalUpdateComponent, path : 'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
