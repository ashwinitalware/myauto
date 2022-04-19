import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubPageRoutingModule } from './sub-routing.module';

import { SubPage } from './sub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubPageRoutingModule
  ],
  declarations: [SubPage]
})
export class SubPageModule {}
