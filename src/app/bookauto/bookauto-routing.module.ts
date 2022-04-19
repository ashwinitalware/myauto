import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookautoPage } from './bookauto.page';

const routes: Routes = [
  {
    path: '',
    component: BookautoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookautoPageRoutingModule {}
