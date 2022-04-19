import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerfeedbackPageRoutingModule } from './customerfeedback-routing.module';

import { CustomerfeedbackPage } from './customerfeedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerfeedbackPageRoutingModule
  ],
  declarations: [CustomerfeedbackPage]
})
export class CustomerfeedbackPageModule {}
