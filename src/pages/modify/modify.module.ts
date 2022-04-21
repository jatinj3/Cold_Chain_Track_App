import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyPage } from './modify';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  declarations: [
    ModifyPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyPage),
    IonicSelectableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModifyPageModule {}
