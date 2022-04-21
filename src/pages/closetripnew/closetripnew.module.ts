import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClosetripnewPage } from './closetripnew';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    ClosetripnewPage,
  ],
  imports: [
    IonicPageModule.forChild(ClosetripnewPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClosetripnewPageModule {}
