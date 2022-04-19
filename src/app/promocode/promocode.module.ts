import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocodePageRoutingModule } from './promocode-routing.module';

import { PromocodePage } from './promocode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocodePageRoutingModule
  ],
  declarations: [PromocodePage]
})
export class PromocodePageModule {}
