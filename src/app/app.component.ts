import { ActivetripPage } from './../pages/activetrip/activetrip';
import { Component } from '@angular/core';
import { Platform,IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController,ViewController,ToastController,NavController,App } from 'ionic-angular';
import { ViewChild ,} from '@angular/core'
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ActivetripnewPage } from '../pages/activetripnew/activetripnew';
import { ClosetripnewPage } from '../pages/closetripnew/closetripnew';
import { HomePage } from '../pages/home/home';

//@IonicPage()
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // @ViewChild('Nav') nav: NavController;
  // ngOnInit() {
  //   console.log('nav is ' + this.nav.getActive());
  // }
  rootPage:any = LoginPage;
  abc: string;
  def: string[];
  
  //public alertShown:boolean = false;

 constructor(public toastCtrl:ToastController,public app:App,public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
 // var nav = this.app.getActiveNavs();
  // console.log(this.nav.getActive());
  //this.nav=nav;
  // let activeView = this.nav.getActive();
  //  console.log(activeView.component.name);

    // let nav = app.getActiveNavs()[0];
    //      let activeView = nav.getActive();
    //      console.log(activeView.name);
   //console.log(app.getActiveNavs()[0]);
 //console.log(this.app.getActiveNav());
 
 

  platform.ready().then(() => {
         statusBar.styleDefault();
         splashScreen.hide();

       
       
         platform.registerBackButtonAction(() => {
 
         let nav = app.getActiveNavs()[0];
         let activeView = nav.getActive();     
        this.abc=activeView.id;
       this.def=this.abc.split('-');
       //console.log(this.def[0]);
        //  let alertnew = this.alertCtrl.create({
        //   message: 'name:'+activeView.name+','+'id:'+activeView.id+','+'cn:'+activeView.component.name
        // });
        // alertnew.present();
        
        // if(this.abc != 'ActivetripnewPage') {
       
              if (nav.canGoBack()){ //Can we go back?
                  nav.pop();
              } else {
                  const alert = this.alertCtrl.create({
                      title: 'Confirm Logout',
                      message: 'Do you wish to logout?',
                      buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: () => {
                              console.log('Application exit prevented!');
                          }
                      },{
                          text: 'Yes',
                          handler: () => {
                            this.app.getRootNav().setRoot(LoginPage);
                              //this.platform.exitApp(); // Close this application
                          }
                      }]
                  });
                 if(this.def[0]!='n4')
                 {
                  alert.present();
                 }
                 else{
                   localStorage.clear();
                   this.platform.exitApp();
                 }
              }
        // }
      });







        });  
  
    

      }



    
    }
        //  let activeView = nav.getActive();
        //  console.log(activeView.component.name);
    //      let nav = app.getActiveNavs()[0];
    // console.log(viewCtrl.name);
    //  let activeView = nav.getActive(); 
    //  console.log(activeView.component.name);
  //     platform.registerBackButtonAction(() => {
 
  //     // let nav = app.getActiveNavs()[0];
  //     // let activeView = nav.getActive();                
  //  //console.log(activeView);
   

  // //  let nav = app.getActiveNavs()[0];
  // // let activeView = nav.getActive();  
  
  // // let activeView = this.nav.getActive()
  // // console.log(activeView.component.name);
  //     //this will not work in signed version using Lazy load use activeView.id instead
  //     // if(activeView.component.name === "ActivetripPage") {
   
  //     //     // canGoBack check if these's and view in nav stack
  //     //     if (nav.canGoBack()){ 
  //     //         nav.pop();
  //     //     } else {
  //     //         let alert = this.alertCtrl.create({
  //     //           title: 'Exit Application?',
  //     //           message: 'Do you want to exit the application?',
  //     //           buttons: [
  //     //             {
  //     //               text: 'Cancel',
  //     //               role: 'cancel',
  //     //               handler: () => {
  //     //                 console.log('Cancel clicked');
  //     //               }
  //     //             },
  //     //             {
  //     //               text: 'Exit',
  //     //               handler: () => {
  //     //                 this.platform.exitApp();
  //     //                 console.log('Exit clicked');
  //     //               }
  //     //             }
  //     //           ]
  //     //         });
  //     //         alert.present();
  //     //     }
  //     // }
  // });

  // platform.registerBackButtonAction(() => {
 
  //     // let nav = app.getActiveNavs()[0];
  //     // let activeView = nav.getActive();                
  //  //console.log(activeView);
  //  let nav = app.getActiveNavs()[0];
  // let activeView = nav.getActive();  
  // console.log(activeView.component.name);
  //     //this will not work in signed version using Lazy load use activeView.id instead
  //     if(activeView.component.name === "ActivetripPage") {
   
  //         // canGoBack check if these's and view in nav stack
  //         if (nav.canGoBack()){ 
  //             nav.pop();
  //         } else {
  //             let alert = this.alertCtrl.create({
  //               title: 'Exit Application?',
  //               message: 'Do you want to exit the application?',
  //               buttons: [
  //                 {
  //                   text: 'Cancel',
  //                   role: 'cancel',
  //                   handler: () => {
  //                     console.log('Cancel clicked');
  //                   }
  //                 },
  //                 {
  //                   text: 'Exit',
  //                   handler: () => {
  //                     this.platform.exitApp();
  //                     console.log('Exit clicked');
  //                   }
  //                 }
  //               ]
  //             });
  //             alert.present();
  //         }
  //     }
  // });
//});
  //}

  // constructor(public nav:NavController,public app:App,public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
  //   platform.ready().then(() => {
  //      statusBar.styleDefault();
  //      splashScreen.hide();
  //      platform.registerBackButtonAction(() => {
  //       let nav = app.getActiveNavs()[0];
  //       let activeView = nav.getActive(); 
  //        console.log('hello');
  //         if (this.alertShown==false) {
  //          console.log(this.alertShown);
  //          this.presentConfirm();  
  //         }
  //      }, 0)
  //    });
  // }

  //  presentConfirm() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Confirm Logout',
  //     message: 'Do you want to Logout?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //           this.alertShown=false;
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           console.log('Yes clicked');
  //           this.nav.setRoot(LoginPage); 
  //           this.nav.popToRoot(); 
  //           //this.platform.exitApp();
  //         }
  //       }
  //     ]
  //   });
  //    alert.present().then(()=>{
  //     this.alertShown=true;
  //   });
  // }

//}
