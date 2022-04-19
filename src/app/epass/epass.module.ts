import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpassPageRoutingModule } from './epass-routing.module';

import { EpassPage } from './epass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpassPageRoutingModule
  ],
  declarations: [EpassPage]
})
export class EpassPageModule {}
