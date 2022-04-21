import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { IonicSelectableComponent } from 'ionic-selectable';
import { ActivetripPage } from '../activetrip/activetrip';
import { AuthProvider } from './../../providers/auth/auth';
import {Http}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { empty } from 'rxjs/Observer';
import { ActivetripnewPage } from '../activetripnew/activetripnew';
import { VehicledetailsPage } from '../vehicledetails/vehicledetails';
class Port {
  public id: number;
  public name: string;
  //public id: string;
}
class Vehicle
{
public id: number;
public name: string;
}
class Halt
{
public id: number;
public name: string;
}
class Point
{
public id: number;
public name: string;
}
class Min
{
public id: number;
public name: string;
}
/**
 * Generated class for the ModifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify',
  templateUrl: 'modify.html',
})
export class ModifyPage {
  MySelect1:any=[];
  moreIndex1:any=1;
  myDate:any=[];
  arr: any;
  qty:any=[];
  public dataList:any;
  //value: any;
  points:Point[];
  ports: Port[];
  mins: Min[];
  src: Port;
  //pointone:any=[];
  pointone:Point;
  pointtwo:Point;
  pointthree:Point;
  pointfour:Point;
  pointfive:Point;
  pointsix:Point;
  pointseven:Point;
  pointeight:Point;
  pointnine:Point;
  pointten:Point;
  vehicles: Vehicle[];
  haltsone: Halt[];
  data:any = {};
  ghi: any=[];
  abc: any;
  pass;
  username;
  gp;
  def: any;
  //ghi: any;
  jkl:any;
  asd: any;
  mno;
  pqr;
  stu;
  twoasd: any;
  two: any;
  threeasd: any;
  three: any;
  fourasd: any;
  four: any;
  value: any;
  abcnew: any;
  ptonenew: any;
  pttwonew: any;
  ptthreenew: any;
  ptfournew: any;
 abcd:any;
  min: Min;
  max: Min;
  minnew: any;
  maxnew: any;
  //abcd: {poi_no: string};
  poi: any;
  things: {car: string};
  temp: string;
  userid: string;
  loading: any;
  
  constructor(public navParams:NavParams,public navCtrl:NavController,private authProvider: AuthProvider,private http: Http ,public toast: ToastController,public loadingController: LoadingController) {
    this.value = navParams.get('data');
    var myData = JSON.stringify({id:this.value.id});
   // var link='http://192.168.1.102/snowmanappmac/single_vehicle2.php';
 var link='http://gtrac.in/snowmanappmacv1/single_vehicle2.php';
 //var link='http://gtrac.in/snowmanappmac/single_vehicle.php';
var myData=JSON.stringify({id:this.value.id});
this.http.post(link, myData).subscribe(data => {
this.abcd=JSON.parse(data["_body"]);  
//this.poi=this.abcd['poi_no'];
this.temp=String(this.abcd['poi_no']);
// this.things = {
// car: this.temp
// };
});



   //var linkfirst='http://192.168.2.230/snowviewtemp.php';
 // var linkfirst='http://gtrac.in/snowmanappmac/snowviewupdate.php';

  // var linkfirst='http://192.168.2.230/snowviewupdate.php';
   // var linkfirst='http://192.168.3.173/snowmanappmac/test.php';
    var linkfirst='http://gtrac.in/snowmanappmacv1/snowviewupdatev2.php';
    this.http.post(linkfirst,myData)
    .subscribe(data => {
      this.arr = JSON.parse(data["_body"]);
    //  this.arr.sort((a,b) => b.id.localeCompare(a.id));
     
    this.ports=this.arr;

   console.log(this.ports)
    this.src=this.ports[1];
    //this.src=this.arr;
   
    this.points=this.arr;
    

    this.mins=this.arr;
   
 //  this.abcnew=this.ports[1]['vehicle_num'];
    

  
  
  
  

   

  
    this.data.vehicle='';
    //this.data.pointone='';
   // var t=String(this.ports[2]);
    var t=this.ports[2]['start_date'];
   
    var datet = new Date(t);
   
    this.data.startdate=new Date(datet.getTime() -datet.getTimezoneOffset()*60000).toISOString();
    
      for(let j=5; j<=14;j++)
      {
      this.ghi.push(this.points[j]);
      }
    
    // this.pointone=this.points[5];
    // console.log(this.pointone);
    // this.pointtwo=this.points[6];
    // this.pointthree=this.points[7];
    // this.pointfour=this.points[8];
    // this.pointfive=this.points[9];
    // console.log(this.pointfive);
    // this.pointsix=this.points[10];
    // console.log(this.pointsix);
    // this.pointseven=this.points[11];
    // this.pointeight=this.points[12];
    // this.pointnine=this.points[13];
    // this.pointten=this.points[14];

    this.min=this.mins[3];

    this.max=this.mins[4];
  
  // this.abcnew=this.ports[1]['vehicle_num'];
  this.ptonenew=this.points[3]['from_location'];

  this.pttwonew=this.points[4]['from_location'];

  this.ptthreenew=this.points[5]['from_location'];

  this.ptfournew=this.points[6]['from_location'];

    // this.data.halt=this.ports[15]['halt'];
    // this.data.halttwo=this.ports[16]['halttwo'];
    // this.data.haltthree=this.ports[17]['haltthree'];
    // this.data.haltfour=this.ports[18]['haltfour'];
    // this.data.haltfive=this.ports[14]['haltfive'];
    // this.data.haltsix=this.ports[14]['haltsix'];
    // this.data.haltseven=this.ports[14]['haltseven'];
    // this.data.halteight=this.ports[14]['halteight'];
    // this.data.haltnine=this.ports[14]['haltnine'];
    // this.data.haltten=this.ports[15]['haltten'];
    this.myDate[0]=this.ports[16]['halttwo'];
    this.myDate[1]=this.ports[17]['haltthree'];
    this.myDate[2]=this.ports[18]['haltfour'];
    this.myDate[3]=this.ports[19]['haltfive'];
    this.myDate[4]=this.ports[20]['haltsix'];

    this.myDate[5]=this.ports[21]['haltseven'];
    this.myDate[6]=this.ports[22]['halteight'];
    this.myDate[7]=this.ports[23]['haltnine'];
    this.myDate[8]=this.ports[24]['haltten'];

    this.qty[0]=this.ports[25]['qtyone'];
    this.qty[1]=this.ports[26]['qtytwo'];
    this.qty[2]=this.ports[27]['qtythree'];
    this.qty[3]=this.ports[28]['qtyfour'];
    this.qty[4]=this.ports[29]['qtyfive'];

    this.qty[5]=this.ports[30]['qtysix'];
    this.qty[6]=this.ports[31]['qtyseven'];
    this.qty[7]=this.ports[32]['qtyeight'];
    this.qty[8]=this.ports[33]['qtynine'];
    this.qty[9]=this.ports[34]['qtyten'];
   // this.myDate[9]=this.ports[25]['haltten'];
   // this.myDate[4]=this.ports[14]['halt'];

    // this.data.halt='';
    // this.data.halttwo=this.ports[9]['halttwo'];
    // this.data.haltthree=this.ports[10]['haltthree'];
    // this.data.haltfour=this.ports[11]['haltfour'];

    // this.data.haltfour='';
   // this.ports ;
    this.haltsone;
    
    this.vehicles= [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
      { id: 4, name: '4' },
      { id: 5, name: '5' }
    ];
  }, err =>{
    console.log(err);
    });
 
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ModifyPage');
  // }


  pointminChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) 
  {
this.minnew=event.value.id;
  //this.vehicles=[{}];
    
  }

  pointmaxChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) 
  {

this.maxnew=event.value.id;
  //this.vehicles=[{}];

  }





  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    this.abc=event.value.vehicle_num;

  }

  vehicleChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    this.def=event.value.name;
    //this.names=this.abc;
    //console.log(this.abc);
   
      //this.inputRowValues.push({});
    
  }


  pointoneChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
  //this.ghi=event.value.from_location;
  if(this.ghi!='' || this.ghi!=undefined)
  {
    this.ghi=event.value.from_location;

  }
  else
  {
    this.ghi='';
  }
 // this.asd=event.value.name;

  //this.vehicles=[{}];
    //console.log(this.vehicles);
  }


  pointtwoChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
 
  if(this.two!='' || this.two!=undefined )
  {

    this.two=event.value.from_location;
  
  }
  else
  {
    this.two='';
  }
  this.twoasd=event.value.name;

  //this.vehicles=[{}];
    //console.log(this.vehicles);
  }
  pointthreeChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
 
  if(this.three!='' || this.three!=undefined)
  {
    this.three=event.value.from_location;

  }
  else
  {
    this.three='';
  }
 // this.threeasd=event.value.name;
  //this.vehicles=[{}];
    //console.log(this.vehicles);
  }
  pointfourChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
 // this.four=event.value.from_location;
  if(this.four!='' || this.four!=undefined)
  {
    this.four=event.value.from_location;

  }
  else
  {
    this.four='';
  }
  //this.fourasd=event.value.name;

  //this.vehicles=[{}];
    //console.log(this.vehicles);
  }
  save()
  {
  

if(this.data.halt!='')
{
var haltone=this.data.halt;
}
else
{
   haltone='';
}
if(this.data.halttwo!='')
{
  var halttwo=this.data.halttwo;  
}
else{
  halttwo='';
}
if(this.data.haltthree!='')
{
  var haltthree=this.data.halttwo; 
}
else
{
  haltthree='';
}
if(this.data.haltfour!='')
{
  var haltfour=this.data.haltfour; 
}
else
{
  haltfour='00:00';
}





//var link = 'http://192.168.2.230/snowupdate2.php';
  var link = 'http://gtrac.in/snowmanappmacv1/snowupdatev2.php';
//var link = 'http://192.168.1.102/snowmanappmac/snowupdate2.php';
//var link = 'http://192.168.2.69/snowmanappmacv1/snowupdate2.php';

var quant=this.qty
console.log(quant);
var sum = 0;

for(var i = 1; i < quant.length; i++){

sum += parseInt(quant[i])

}
//var test=quant[1]+quant[2]+quant[3]+quant[4]+quant[5]+quant[6]+quant[7]+quant[8]+quant[9];
console.log(sum);
var total_qty= parseInt(quant[0])

if(sum>total_qty)
{
alert("Unable to update trip as source quantity exceeded");
}
else{
  //alert('proceed');
  var myData = JSON.stringify(
    {vehicle: this.src, startdate:this.data.startdate,fromtemp:this.min,totemp:this.max,halt:this.myDate,ghi:this.ghi,qty:this.qty,id:this.value.id});  
    this.http.post(link, myData).subscribe(data => {
    let result = JSON.parse(data["_body"]); 
    // this.navCtrl.setRoot(VehicledetailsPage,{
    //   data:result
    //    }).then(async()=>{
    //      this.showToast("Enrty Updated successfully");
    //      this.loading =await this.loadingController.create({
    //        spinner: "dots",
    //        duration: 9000
    //    });
    //    this.loading.present();
       
    //      this.loading.dismiss().then(()=>{
    //      this.delay(10000);
    //       // this.navCtrl.setRoot(ActivetripPage);
          
    //        });
    //  });
    this.navCtrl.setRoot(VehicledetailsPage,{
      data:result
       });
    this.showToast("Enrty Updated successfully");
    this.presentLoading();
    this.navCtrl.push(ActivetripnewPage);
    }, error => {
    console.log("Oooops!");
    });
}


  /*  var myData = JSON.stringify(
    {vehicle: this.src, startdate:this.data.startdate,fromtemp:this.min,totemp:this.max,halt:this.myDate,ghi:this.ghi,qty:this.qty,id:this.value.id});  
    this.http.post(link, myData).subscribe(data => {
    let result = JSON.parse(data["_body"]); 
    // this.navCtrl.setRoot(VehicledetailsPage,{
    //   data:result
    //    }).then(async()=>{
    //      this.showToast("Enrty Updated successfully");
    //      this.loading =await this.loadingController.create({
    //        spinner: "dots",
    //        duration: 9000
    //    });
    //    this.loading.present();
       
    //      this.loading.dismiss().then(()=>{
    //      this.delay(10000);
    //       // this.navCtrl.setRoot(ActivetripPage);
          
    //        });
    //  });
    this.navCtrl.setRoot(VehicledetailsPage,{
      data:result
       });
    this.showToast("Enrty Updated successfully");
    this.presentLoading();
    this.navCtrl.push(ActivetripnewPage);
    }, error => {
    console.log("Oooops!");
    });*/






  }

  // async delay(ms: number) {
  //   await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.navCtrl.setRoot(ActivetripnewPage));
  // }

    showToast(message){
      let toast = this.toast.create({
      message:message,
      duration: 2000,
      position:'top'
    });
      toast.present();
    }
    async presentLoadingother() {
      const loading = await this.loadingController.create({
       
        spinner: "dots",
        
        duration: 2000
      });
      return await loading.present();
    }
  

  ionViewDidLoad() {
 

    if (this.authProvider.isUser()) {
      this.username = this.authProvider.currentUser.name;
      this.pass=this.authProvider.currentUser.pass;
      this.gp=this.authProvider.currentUser.groupid;
      this.userid=this.authProvider.currentUser.userid;
    }
  
    var linkfirst='http://trackingexperts.com/appv2/dipatchclient/vehicle_listmac.php';
    var myDatafirst=JSON.stringify({uname:this.username, password: this.pass,userid:this.userid});

    this.http.post(linkfirst, myDatafirst)
    .subscribe(data => {
   this.ports=JSON.parse(data["_body"]);  


      }
  
    ,err => {
    console.log("Oooops!");
    });

    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecificmac.php';
    var myDatatwo=JSON.stringify({uname:this.username, password: this.pass });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.points=JSON.parse(data["_body"]); 
      
      }
    
    ,err => {
    console.log("Oooops!");
    });
 
    var linkthird='http://trackingexperts.com/appv2/dipatchclient/temperaturelist.php';
    var myDatathird=JSON.stringify({uname:this.username, password: this.pass });

    this.http.post(linkthird, myDatathird)
    .subscribe(data => {
    this.mins=JSON.parse(data["_body"]);  
    console.log(this.mins);
      }
  
    ,err => {
    console.log("Oooops!");
    });



  }
  

  selectNo1(val1){
    if(val1==1)
    {
      if(this.temp=='6' && this.moreIndex1<=3)
      {
     this.MySelect1.push(this.moreIndex1);
     this.moreIndex1++;
      }
      else if(this.temp=='7' && this.moreIndex1<=2)
      {
        this.MySelect1.push(this.moreIndex1);
        this.moreIndex1++;
      }
     else if(this.temp=='8' && this.moreIndex1<=1)
      {
        this.MySelect1.push(this.moreIndex1);
        this.moreIndex1++;
      }
      else if(this.temp=='3' && this.moreIndex1<=6)
      {
        this.MySelect1.push(this.moreIndex1);
        this.moreIndex1++;
      }
      else if(this.temp=='2' && this.moreIndex1<=7)
      {
        this.MySelect1.push(this.moreIndex1);
        this.moreIndex1++;
      }
      else if(this.temp=='4' && this.moreIndex1<=5)
      {
        this.MySelect1.push(this.moreIndex1);
        this.moreIndex1++;
      }
      else if(this.temp=='5' && this.moreIndex1<=4)
      {
        this.MySelect1.push(this.moreIndex1);
        this.moreIndex1++;
      }
      else{
        this.showToast('Sorry you cannot add more points');
      }

    // this.halt.push(this.data.halt);
    
    
    }
    else{

      this.MySelect1.pop(this.moreIndex1);
      this.ghi.pop(this.moreIndex1);
      this.myDate.pop(this.moreIndex1);
      this.moreIndex1--;

    }    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
     
      spinner: "dots",
      
      duration: 24000
    });
    return await loading.present();
  }


}
