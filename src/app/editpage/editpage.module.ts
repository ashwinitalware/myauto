import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpagePageRoutingModule } from './editpage-routing.module';

import { EditpagePage } from './editpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpagePageRoutingModule
  ],
  declarations: [EditpagePage]
})
export class EditpagePageModule {}
