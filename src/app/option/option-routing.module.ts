import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionPage } from './option.page';

const routes: Routes = [
  {
    path: '',
    component: OptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionPageRoutingModule {}
