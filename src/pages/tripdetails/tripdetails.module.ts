import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripdetailsPage } from './tripdetails';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    TripdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TripdetailsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TripdetailsPageModule {}
