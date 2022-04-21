//import { ActivetripnewPage } from './../../../src-snowold/pages/activetripnew/activetripnew';
import { Component } from '@angular/core';
import { NavController,ToastController, DateTime } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ActivetripPage } from '../activetrip/activetrip';
import { AuthProvider } from './../../providers/auth/auth';
import {Http}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { empty } from 'rxjs/Observer';
import { VehicledetailsPage } from '../vehicledetails/vehicledetails';
import { IfObservable } from 'rxjs/observable/IfObservable';
class Port {
  public id: number;
  public name: string;
}
class Vehicle
{
public id: number;
public name: string;
}
class Min
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
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  MySelect1:any=[];
moreIndex1:any=1;
doc_name:any=[];
doc_add:any=[]; 
doc_cont:any=[];
  anArray:any=[];
  points:Point[];
  ports: Port[];
  port: Port;
  vehicles: Vehicle[];
  mins:Min[];
  haltsone: Halt[];
  data:any = {};
  
  abc: any;
  pass;
  username;
  gp;
  def: any;
  ghi: any=[];
  halt:any=[];
  qty:any=[];
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
  xyz: any;
  long: any;
  lat: any;
  latlong: any=[];
  lat2: any;
  long2: any;
  latlong2: string;
  lat3: any;
  long3: any;
  latlong3: string;
  lat4: any;
  long4: any;
  latlong4: string;
  pois: (string | number)[];
  nopoi: number;
  min: any;
  max: any;
  data2: boolean;
  myDate:any=[];
  userid: string;
  veh_id: any;
  result: any;
  constructor(public navCtrl:NavController,private authProvider: AuthProvider,private http: Http ,public toast: ToastController,public loadingController: LoadingController) {
    this.data.port='';
    this.data.vehicle='';
    this.data.pointone='';
    this.data.startdate='';
    this.data.halt='';
    this.data.halttwo='';
    this.data.haltthree='';
    this.data.haltfour='';
    this.data.min='';
    this.data.max='';
    this.ports ;
    this.haltsone;
    this.points;
    this.vehicles= [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
      { id: 4, name: '4' },
      { id: 5, name: '5' }
    ];
    
   
  }


  goTo(){
   
    this.data2=true;
    }
  Add(){
    this.anArray.push({'value':''});
    }



  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    this.abc=event.value.veh_reg;
	 this.veh_id=event.value.id;
   
   // console.log(this.abc);
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


  /*pointoneChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
  //this.ghi=event.value.from_location;
  if(this.ghi!='' || this.ghi!=undefined)
  {
    // for(let i=0;i<this.data.pointone.length;i++){
        
    //   this.ghi.push(this.data.pointone);
      
    // }
    //this.ghi.push(event.value.from_location);
   // this.ghi=event.value.from_location;
    this.lat=event.value.lat;
    this.long=event.value.long;
  // this.latlong= this.lat+","+this.long;
   //this.ghi
  //  console.log(this.latlong);
  //   console.log(this.lat);
  //   console.log(this.long);
  //console.log(this.data.pointone);
  this.ghi.push(event.value.from_location);
  this.latlong.push(this.lat+","+this.long);
 // this.ghi.push({loc:event.value.from_location,latlong:this.latlong});
  // for(let i=0;i<=this.ghi.length;i++){
  //   this.ghi[i].push(event.value.from_location);
  //   for(let j=0;i<=this.ghi.length;i++){
    
  //   this.ghi[i][j].push(this.latlong);
    console.log(this.ghi);
  // }
  // }
}
  else
  {
    this.ghi='';
  }
  this.asd=event.value.name;

  //this.vehicles=[{}];
    //console.log(this.vehicles);
  }*/


  pointtwoChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
 
  if(this.two!='' || this.two!=undefined )
  {

    this.two=event.value.from_location;
    this.lat2=event.value.lat;
    this.long2=event.value.long;
   this.latlong2= this.lat2+","+this.long2;

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
    this.lat3=event.value.lat;
    this.long3=event.value.long;
   this.latlong3= this.lat3+","+this.long3;
   console.log(this.latlong3);
  }
  else
  {
    this.three='';
  }
  this.threeasd=event.value.name;
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
    this.lat4=event.value.lat;
    this.long4=event.value.long;
   this.latlong4= this.lat4+","+this.long4;
   
  }
  else
  {
    this.four='';
  }
  this.fourasd=event.value.name;

  //this.vehicles=[{}];
    //console.log(this.vehicles);
  }



  // haltChange()
  // {
  //   console.log(this.myDate[0]);
  //   for(let i=0;i<this.myDate.length;i++)
  //   {
  //   if(this.myDate[i]!="")
  //   {
  //   this.halt.push({date:this.myDate[i]});
  //   console.log(this.halt);
  //   }
  //   }
  // }


    pointminChange(event: {
      component: IonicSelectableComponent,
      value: any 
    }) {
  
  this.min=event.value.id;
    //this.vehicles=[{}];
      console.log(this.min);
    }

    pointmaxChange(event: {
      component: IonicSelectableComponent,
      value: any 
    }) {
  
  this.max=event.value.id;
    //this.vehicles=[{}];
  
    }


  save()
  {
  
if(this.abc==undefined)
{
  this.showToast("Please fill Vehicle Number");
} 

// else if(this.jkl==undefined)
// {
//   this.showToast("Please fill Vehicle Status");
// }
else if(this.data.startdate=='')
{
  this.showToast("Please fill Start Date");
}
// else if(this.def==undefined)
// {
//   this.showToast("Please fill unloading points");
// }

else{

   //console.log(this.ghi);
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
//let pusheditems = {};
//pusheditems[this.yesvalue] = this.selectedtruck;
//this.pois = [this.ghi, this.two,this.three,this.four];
//this.nopoi=this.pois.length;
//console.log(this.nopoi);

//this.myDate.push('00:00');

  // var link = 'http://gtrac.in/snowmanappmac/snowentry2.php';


 // var link = 'http://gtrac.in/snowmanappmacv1/snowentry4.php';

  var link = 'http://gtrac.in/snowmanappmacv1/snowentryv2.php';
//	var link = 'http://192.168.2.69/snowmanappmac/snowentry2.php';
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
alert("Unable to create trip as source quantity exceeded");
}
else{
  var myData = JSON.stringify(
    {vehicle: this.abc, veh_id:this.veh_id,startdate:this.data.startdate,fromtemp:this.min,totemp:this.max, pointone:this.ghi , halt:this.myDate,username:this.username,userid: this.userid,qty:this.qty});  
    this.http.post(link, myData).subscribe(data => {
    this.result = JSON.parse(data["_body"]); 
    console.log(this.result);
	  this.navCtrl.setRoot(VehicledetailsPage,{
     data:this.result
      })
   
    this.showToast("Enrty submitted successfully");
    this.presentLoading().then(()=>{
    this.navCtrl.setRoot(ActivetripPage);
    });
  }, error => {
    alert('Something went wrong');
    console.log("Oooops!");
    });
}
  //var link = 'http://192.168.2.230/snowentry2.php';
    //var link = 'http://192.168.3.173/snowentry2.php';
  //  {vehicle: this.abc, veh_id:this.veh_id,startdate:this.data.startdate,fromtemp:this.min,totemp:this.max, pointone:this.ghi , halt:this.myDate,username:this.username,userid: this.userid,qty:this.qty});
   /* */
    }
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
        
        duration: 9000
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
    var myDatafirst=JSON.stringify({uname:this.username, password: this.pass,userid: this.userid });

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
      }
  
    ,err => {
    console.log("Oooops!");
    });




 


  }
  selectNo1(val1){
    if(val1==1)
    {
      if(this.moreIndex1<=7)
      {
     this.MySelect1.push(this.moreIndex1);
     this.moreIndex1++;
      }
      else{
        //console.log('Cant add more');
        this.showToast('Sorry you cannot add more points');
      }
     console.log(this.data);
    // this.halt.push(this.data.halt);
   
    
    }
    else{

      this.MySelect1.pop(this.moreIndex1);
      this.ghi.pop(this.moreIndex1);
      this.qty.pop(this.moreIndex1);
      this.myDate.pop(this.moreIndex1);
      this.moreIndex1--;

    }    
  }

}