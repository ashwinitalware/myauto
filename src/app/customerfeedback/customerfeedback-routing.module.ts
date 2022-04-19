import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerfeedbackPage } from './customerfeedback.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerfeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerfeedbackPageRoutingModule {}
