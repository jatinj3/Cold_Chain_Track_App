import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSelectableModule} from 'ionic-selectable'; 
//import { DispatchPage } from '../dispatch/dispatch';
//import { IonicPageModule } from 'ionic-angular';
//import { IonicPage } from 'ionic-angular';
//@IonicPage()
@NgModule({
  declarations: [
    HomePage,
  //DispatchPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicSelectableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
