import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomineesPage } from './nominees.page';

const routes: Routes = [
  {
    path: '',
    component: NomineesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomineesPageRoutingModule {}
