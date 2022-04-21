
import { ActivetripPage } from './activetrip';
import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      ActivetripPage
       
    ],
    imports: [
   IonicPageModule.forChild(ActivetripPage),
   //IonicModule,
      SuperTabsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActivetripPageModule { }
