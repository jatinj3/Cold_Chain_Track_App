import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GmPage } from './gm';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    GmPage,
  ],
  imports: [
    IonicPageModule.forChild(GmPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GmPageModule {}
