import { VehicledetailsPage } from './../vehicledetails/vehicledetails';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, App,Platform,ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Http}  from "@angular/http";
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GmPage } from '../gm/gm';
import { ModifyPage } from '../modify/modify';
import { LoginPage } from '../login/login';
import { AuthProvider } from './../../providers/auth/auth';

/**
 * Generated class for the ActivetripnewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activetripnew',
  templateUrl: 'activetripnew.html',
})
export class ActivetripnewPage {
  arr: any;
  public dataList:any;
  total: any;
  // public alertShown:boolean = false;
  // pagename: string;

  constructor(public nav:NavController,public authProvider:AuthProvider,public viewCtrl:ViewController,public app: App,public platform: Platform,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public toast: ToastController,public loadingController: LoadingController,private http: Http) {
    //this.message=',';
    // let backAction =  platform.registerBackButtonAction(() => {
    //   console.log("second");
    //   this.navCtrl.pop();
    //   backAction();
    // },2)
  
  // this.pagename=this.viewCtrl.name;
  // window.localStorage.setItem('pagename', this.viewCtrl.name);
//console.log(this.viewCtrl.name);
//this.pagename = window.localStorage.getItem('pagename');
// console.log(this.pagename);
// platform.ready().then(() => {
 this.doRefresh(0);
//     //  let activeView = nav.getActive(); 
//   //   console.log(this.viewCtrl.name);
//     if (this.viewCtrl.name=='ActivetripnewPage') {
//       this.presentConfirm();  
//    }
// platform.registerBackButtonAction(() => {

// // this.pagename = window.localStorage.getItem('pagename');
//       //if (this.alertShown==false && this.pagename=='ActivetripnewPage') {
//         if (this.viewCtrl.name=='ActivetripnewPage') {
//            this.presentConfirm();  
//         }
//          //}
//        });
      
//  });

}
 
   presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Do you wish to Logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
           //this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            //console.log('Yes clicked');
            //this.authProvider.logout();
            //this.nav.setRoot(LoginPage);
            //this.nav.push(Log);
           //this.app.navPop();
           this.app.getRootNav().setRoot(LoginPage);

              //  this.nav.setRoot(LoginPage);
              // this.nav.popToRoot(); 
              //this.appCtrl.nav
           //this.navCtrl.popToRoot(); 
            //this.platform.exitApp();
          }
        }
      ]
    });
    //  alert.present().then(()=>{
    //   this.alertShown=true;
    // });
  alert.present();
  }
  ionViewWillEnter()
  {
    this.doRefresh(0);
  }
 
  goAnOtherPage(event ,data)
  {
   // this.navCtrl.push(GmPage);
   this.navCtrl.push(VehicledetailsPage,{
    data:data
    });

  }

  doRefresh(refresher)
  {
    
    this.presentLoading();
    // var link = 'http://gtrac.in/snowmanappmac/snowview2.php';
     //var link = 'http://gtrac.in/snowmanappmac/snowview2.php';
      var link = 'http://gtrac.in/snowmanappmacv1/snowview2.php';
      //var link = 'http://192.168.3.173/snowmanappmac/snowview2.php';
       var myData = JSON.stringify({action:''});  
       this.http.post(link, myData).subscribe(data => {
       //let result = data["_body"]; 
       this.arr = JSON.parse(data["_body"]);
       this.dataList=this.arr;
       console.log(this.dataList)
       this.total=0;
       for(var i=0;i<this.dataList.length;i++)
       {
         this.total += parseInt(this.dataList[i].totalqtycases) 
       }
       console.log(this.total)
     
       }, error => {
       console.log("Oooops!");
       });
  
    if(refresher!=0)
    {
      setTimeout(() => {
      
        refresher.complete();
      }, 2000);
      //refresher.complete();
    }
  }



  backbutton()
  {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you wish to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            // console.log('Buy clicked');
    
    this.navCtrl.setRoot(LoginPage)
    //this.navCtrl.push(ActivetripnewPage);
          }
        }
      ]
    });
    alert.present();
  }






  goAnOtherPageModify(event ,data)
  {
   // this.navCtrl.push(GmPage);
   this.navCtrl.push(ModifyPage,{
    data:data
    });
  }
  getData()
  {
    this.presentLoading();
  // var link = 'http://gtrac.in/snowmanappmac/snowview2.php';
   //var link = 'http://gtrac.in/snowmanappmac/snowview2.php';
    var link = 'http://gtrac.in/snowmanappmacv1/snowview2.php';
    //var link = 'http://192.168.3.173/snowmanappmac/snowview2.php';
     var myData = JSON.stringify({action:''});  
     this.http.post(link, myData).subscribe(data => {
     //let result = data["_body"]; 
     this.arr = JSON.parse(data["_body"]);
     this.dataList=this.arr;

   
     }, error => {
     console.log("Oooops!");
     });


  }

  showToast(message){
    let toast = this.toast.create({
    message:message,
    duration: 2000,
    position:'top'
  });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
     
      spinner: "dots",
      
      duration: 500
    });
    return await loading.present();
  }


}
