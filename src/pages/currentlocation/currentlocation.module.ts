import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentlocationPage } from './currentlocation';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    CurrentlocationPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentlocationPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrentlocationPageModule {}
