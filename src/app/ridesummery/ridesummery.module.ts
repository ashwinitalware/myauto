import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidesummeryPageRoutingModule } from './ridesummery-routing.module';

import { RidesummeryPage } from './ridesummery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidesummeryPageRoutingModule
  ],
  declarations: [RidesummeryPage]
})
export class RidesummeryPageModule {}
