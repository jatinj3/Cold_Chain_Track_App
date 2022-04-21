import { VehicledetailsPage } from './../pages/vehicledetails/vehicledetails';
import { HttpModule } from '@angular/http';
import { LoginPage } from './../pages/login/login';
import { ActivetripPage } from './../pages/activetrip/activetrip';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicSelectableModule } from 'ionic-selectable';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { GmPage } from '../pages/gm/gm';
import { AuthProvider } from '../providers/auth/auth';
import { HomePageModule } from '../pages/home/home.module';
import { ActivetripPageModule } from '../pages/activetrip/activetrip.module';
import { GmPageModule } from '../pages/gm/gm.module';
import { LoginPageModule } from '../pages/login/login.module';
import { VehicledetailsPageModule } from '../pages/vehicledetails/vehicledetails.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { TripdetailsPage } from '../pages/tripdetails/tripdetails';
import { TripdetailsPageModule } from '../pages/tripdetails/tripdetails.module';
import { ModifyPageModule } from '../pages/modify/modify.module';
import { CurrentlocationPageModule } from '../pages/currentlocation/currentlocation.module';

@NgModule({
  declarations: [
    MyApp,
   // HomePage,
    //ActivetripPage,
    //GmPage,
    //LoginPage,
    //VehicledetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicSelectableModule,
    HttpModule,
    SuperTabsModule.forRoot(),
    HomePageModule,
    ActivetripPageModule,
    GmPageModule,
    LoginPageModule,VehicledetailsPageModule, MenuPageModule,TripdetailsPageModule,ModifyPageModule,CurrentlocationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   // HomePage,
   // ActivetripPage,
   // GmPage,
   // LoginPage,
   // VehicledetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
