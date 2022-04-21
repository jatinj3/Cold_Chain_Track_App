import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  declarations: [
  MenuPage
  ],
  imports: [
  IonicPageModule.forChild(MenuPage),
    IonicSelectableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuPageModule {}
