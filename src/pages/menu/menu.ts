import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
//import { UserPage } from '../../pages/user/user';
import { ActivetripPage } from '../activetrip/activetrip';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any;
  pages = [];
  username = '';
  @ViewChild(Nav) nav: Nav;
  admin: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private authProvider: AuthProvider, private appCtrl: App) {
  }

  ionViewWillEnter() {
    if (this.authProvider.isUser()) {
      this.username = this.authProvider.currentUser.name;
      this.admin=this.authProvider.currentUser.admin;
      if(this.admin=='1')
      {
      this.pages = [
        { title: this.username,page: ActivetripPage, icon: 'person'},
       {title: 'Start Trip',page: HomePage, icon: 'car'},
      {title: 'Trip Details View', page: ActivetripPage, icon: 'paper'}
       
      ];
      this.nav.push(ActivetripPage);
     }
    else{
      this.pages = [
        { title: this.username,page: ActivetripPage, icon: 'person'},
      // {title: 'Start Trip',page: HomePage, icon: 'car'},
      {title: 'Trip Details View', page: ActivetripPage, icon: 'paper'}
       
      ];
      this.nav.push(ActivetripPage);
    }



    } 

  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  ionViewCanEnter() {
    return this.authProvider.isLoggedIn();
  }

  logout() {
    this.authProvider.logout();
  //  this.nav.setRoot(LoginPage);
    //this.nav.popToRoot(); 
    //this.appCtrl.nav
    this.appCtrl.getRootNav().setRoot(LoginPage);
   // this.appCtrl.navPop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
