import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpassPage } from './epass.page';

const routes: Routes = [
  {
    path: '',
    component: EpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpassPageRoutingModule {}
