import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ViewController,App,AlertController,Platform } from 'ionic-angular';
//import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Http}  from "@angular/http";
import { ModifyPage } from '../modify/modify';
import { VehicledetailsPage } from '../vehicledetails/vehicledetails';
import { TripdetailsPage } from '../tripdetails/tripdetails';
import { AuthProvider } from './../../providers/auth/auth';
/**
 * Generated class for the ClosetripnewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-closetripnew',
  templateUrl: 'closetripnew.html',
})
export class ClosetripnewPage {
  arr: any;
  dataList: any;
  trip: any;
  searchTerm: any;
  fromvalue: any;
  from: any;
  to: any;
  toValue: any;
  fromValue: any;
  total: number;

  constructor(public authProvider:AuthProvider,public viewCtrl:ViewController,public app: App,public platform: Platform,private alertCtrl: AlertController,public navCtrl: NavController,public toast: ToastController, public navParams: NavParams,public loadingController: LoadingController,private http: Http) {
    this.doRefresh(0);
    // this.fromto();
    // platform.registerBackButtonAction(() => {
    //   console.log(this.viewCtrl.name);
    //   if(this.viewCtrl.name === "ClosetripnewPage") {
    //            this.presentConfirm();  
    //           }
    //        });
    //this.getData();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ClosetripnewPage');
  // }
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
           // this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.authProvider.logout();
            //  this.nav.setRoot(LoginPage);
              //this.nav.popToRoot(); 
              //this.appCtrl.nav
              
              this.app.navPop();
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
  goAnOtherPageModify(event ,data)
  {
    console.log("mydata="+data)
   // this.navCtrl.push(GmPage);
   this.navCtrl.push(TripdetailsPage,{
    data:data
    });
  }


  ionViewWillEnter()
  {
    this.doRefresh(0);
  }




  doRefresh(refresher)
  {
    this.presentLoading();
    this.fromValue='';
    this.toValue='';
    var link = 'http://gtrac.in/snowmanappmacv1/snowview2.php';
    //var link = 'http://192.168.3.173/snowmanappmac/snowview2.php';
     //var link='http://gtrac.in/snowmanappmac/snowview2.php';
     // var link = 'http://192.168.3.173/snowentry.php';
     //var link = 'http://gtrac.in/snowmanappmac/snowview2.php';
      var myData = JSON.stringify({action:'closetrip'});  
      this.http.post(link, myData).subscribe(data => {
      //let result = data["_body"]; 
      this.arr = JSON.parse(data["_body"]);

      



      // var q='2019-07-19 00:00:00';
      // var w='2019-07-26 00:00:00';
      // this.arr.sort((q, w) => new Date(w.start_date).getTime() - new Date(q.start_date).getTime());
      this.dataList=this.arr;
     
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
  getData()
  {
    this.presentLoading();

   var link = 'http://gtrac.in/snowmanappmacv1/snowview2.php';
   //var link = 'http://192.168.3.173/snowmanappmac/snowview2.php';
    //var link='http://gtrac.in/snowmanappmac/snowview2.php';
    // var link = 'http://192.168.3.173/snowentry.php';
    //var link = 'http://gtrac.in/snowmanappmac/snowview2.php';
     var myData = JSON.stringify({action:'closetrip'});  
     this.http.post(link, myData).subscribe(data => {
     //let result = data["_body"]; 
     this.arr = JSON.parse(data["_body"]);
     this.dataList=this.arr;
   
   
     }, error => {
     console.log("Oooops!");
     });





   /* var linkfirst='http://gtrac.in/snowmanappmac/snowview.php';
    //var myDatafirst=JSON.stringify({groupid:this.gp});
    
    this.http.get(linkfirst)
    .subscribe(data => {
      this.arr = JSON.parse(data["_body"]);
      this.arr.sort((a,b) => b.id.localeCompare(a.id));
     
    this.dataList=this.arr;
    console.log(this.dataList);
    
    }, err =>{
      console.log(err);
      });*/
  }

fromto()
{
 // this.from='';
 this.presentLoading();
var f1= this.fromValue.split('-');
var f2= this.toValue.split('-');
 this.toValue.split('-');
 var f= f1[0]+'-'+f1[1]+'-'+f1[2]+' 00:00:00';
var t=f2[0]+'-'+f2[1]+'-'+f2[2]+' 11:59:59';


  var link = 'http://gtrac.in/snowmanappmacv1/snowview2.php';

  var myData = JSON.stringify({action:'closetrip'});  
  this.http.post(link, myData).subscribe(data => {
  //let result = data["_body"]; 
  this.arr = JSON.parse(data["_body"]);
  //console.log(this.arr);
  this.dataList=this.arr;
 // this.trip=this.arr;
 
 // this.arr.sort((f, t) =>new Date(f.start_date) - new Date(t.start_date));
  this.dataList=this.arr.filter(function(arr) {
    //console.log(arr);
    //console.log(arr.start_date);
    //console.log(arr.start_date);
  return arr.start_date >=f && arr.start_date <=t;
});
  });


//this.setFilteredItems()
}

  // setFilteredItems()
  // {  
  //   var link = 'http://gtrac.in/snowmanappmacv1/snowview2.php';
  //   //var link = 'http://192.168.3.173/snowmanappmac/snowview2.php';
  //    //var link='http://gtrac.in/snowmanappmac/snowview2.php';
  //    // var link = 'http://192.168.3.173/snowentry.php';
  //    //var link = 'http://gtrac.in/snowmanappmac/snowview2.php';
  //     var myData = JSON.stringify({action:'closetrip'});  
  //     this.http.post(link, myData).subscribe(data => {
  //     //let result = data["_body"]; 
  //     this.arr = JSON.parse(data["_body"]);
  //     //this.dataList=this.arr;
  //     this.trip=this.arr;
  //     //
  //     var q='2019-07-19 00:00';
  //     var w='2019-07-26 00:00';
  //     this.arr.sort((f, t) =>new Date(f) - new Date(t));
      
  //     //
  //     this.trip = this.trip.filter((item) => {
  //     this.dataList= item.start_date.toLowerCase().includes(this.searchTerm.toLowerCase());
  //     console.log(this.dataList);
    
  //     }, error => {
  //     console.log("Oooops!");
  //     }); 
  //   // var linksec='http://trackingexperts.com/appv2/dipatchmarketvehicle/extraphp/tripviewnew.php';
  //   // var myDatasec=JSON.stringify({groupid:this.gp});
    
  //   // this.http.post(linksec, myDatasec)
  //   // .subscribe(data => {
  //   //   this.arr = JSON.parse(data["_body"]);
  //   //   this.arr.sort((a,b) => b.id.localeCompare(a.id));
  //   //   this.locationdata=this.arr;
  //   //   this.locationdata = this.locationdata.filter((item) => {
  //   //   this.dataList= item.veh_reg.toLowerCase().includes(this.searchTerm.toLowerCase());
  //   //    }); 
  // }
  // ,err => {
  // console.log("Oooops!");
  // });                
  // }
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
      
      duration: 10000
    });
    return await loading.present();
  }


 
}
