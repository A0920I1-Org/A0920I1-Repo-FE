import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackTechnicalComponent} from "./client/employee/feedback/feedback-technical/feedback-technical.component";


const routes: Routes = [
  {
    component:FeedbackTechnicalComponent, path : 'add'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
