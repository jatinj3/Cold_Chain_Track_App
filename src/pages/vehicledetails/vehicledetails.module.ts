import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicledetailsPage } from './vehicledetails';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    VehicledetailsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(VehicledetailsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehicledetailsPageModule {}
