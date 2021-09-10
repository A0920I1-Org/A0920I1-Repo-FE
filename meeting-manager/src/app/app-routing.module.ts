import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackTechnicalComponent} from "./admin/feedback-manager/feedback-technical/feedback-technical.component";
import {FeedbackTechnicalCreateComponent} from "./admin/feedback-manager/feedback-technical-create/feedback-technical-create.component";


const routes: Routes = [
  {
    component:FeedbackTechnicalComponent, path : 'list'
  },
  {
    component:FeedbackTechnicalCreateComponent, path : 'add'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
