import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivetripnewPage } from './activetripnew';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    ActivetripnewPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivetripnewPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActivetripnewPageModule {}
