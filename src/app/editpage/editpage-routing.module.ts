import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpagePage } from './editpage.page';

const routes: Routes = [
  {
    path: '',
    component: EditpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpagePageRoutingModule {}
