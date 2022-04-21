import { GmPage } from './../gm/gm';
import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsComponent } from 'ionic2-super-tabs';
import { AuthProvider } from './../../providers/auth/auth';
import {Http}  from "@angular/http";
/**
 * Generated class for the ActivetripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activetrip',
  templateUrl: 'activetrip.html',
})
export class ActivetripPage {

  pages = [
    { pageName: 'ActivetripnewPage', title: 'Active Trip', icon: 'flame', id: 'activeTab'},
    { pageName: 'ClosetripnewPage', title: 'Closed Trip', icon: 'close-circle', id: 'closedTab'}
  ];
 
  selectedTabIndex = 0;
 
  @ViewChild(SuperTabsComponent) superTabs: SuperTabsComponent;
  admin: any;
  buttonDisabled: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,private authProvider: AuthProvider,private http: Http ) {
  }
 
  onTabSelect(ev: any) {
      this.selectedTabIndex = ev.index;
  }
 
  ionViewDidLoad() {
    
    if (this.authProvider.isUser()) {
      //this.username = this.authProvider.currentUser.name;
     // this.pass=this.authProvider.currentUser.pass;
     this.admin=this.authProvider.currentUser.admin;
    
     if(this.admin=='1')
     {
     this.buttonDisabled = false;
     }
     else
     {
      this.buttonDisabled = true;
     }


    }
  }
  checkIsEnabled()
  {
    return this.buttonDisabled;
  }
  starttrip()
  {
//this.navCtrl.nav(HomePage);
this.navCtrl.setRoot(HomePage);
  }
}
