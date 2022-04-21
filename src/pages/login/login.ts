import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController,Platform,App } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
//import { MenuPage } from '../menu/menu';
import {Http}  from "@angular/http";
import { ActivetripPage } from '../activetrip/activetrip';
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data:any = {};
  st;
  abc: string;
 
  constructor(public app:App,platform: Platform,public navCtrl: NavController, public navParams: NavParams,private authProvider: AuthProvider, private alertCtrl: AlertController,private http: Http) {
 
    this.data.name = window.localStorage.getItem('username');
    this.data.pw = window.localStorage.getItem('password');

  }

loginUser(){
  
    
  window.localStorage.setItem('username', this.data.name);
  window.localStorage.setItem('password', this.data.pw);
  
  
  this.authProvider.login(this.data.name, this.data.pw).then(success => {
    if (success) {
      this.navCtrl.push(MenuPage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Login failed',
        message: 'Please check your credentials',
        buttons: ['OK']
      });
      alert.present();
    }
  });

}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
