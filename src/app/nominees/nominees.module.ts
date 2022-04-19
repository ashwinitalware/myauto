import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomineesPageRoutingModule } from './nominees-routing.module';

import { NomineesPage } from './nominees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomineesPageRoutingModule
  ],
  declarations: [NomineesPage]
})
export class NomineesPageModule {}
