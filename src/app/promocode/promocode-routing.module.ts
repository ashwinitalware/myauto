import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocodePage } from './promocode.page';

const routes: Routes = [
  {
    path: '',
    component: PromocodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocodePageRoutingModule {}
