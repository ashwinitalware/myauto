import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookautoPageRoutingModule } from './bookauto-routing.module';

import { BookautoPage } from './bookauto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookautoPageRoutingModule
  ],
  declarations: [BookautoPage]
})
export class BookautoPageModule {}
