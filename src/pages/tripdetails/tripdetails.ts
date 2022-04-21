import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GmPage } from '../gm/gm';
import {Http}  from "@angular/http";
//import { TripdetailsPage } from '../tripdetails/tripdetails';
import { AuthProvider } from './../../providers/auth/auth';
import { CurrentlocationPage } from '../currentlocation/currentlocation';
import { AlertController } from 'ionic-angular';
import { ActivetripnewPage } from '../activetripnew/activetripnew';
import { isRightSide } from 'ionic-angular/umd/util/util';
declare var google;
/**
 * Generated class for the TripdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tripdetails',
  templateUrl: 'tripdetails.html',
})
export class TripdetailsPage {
  @ViewChild('map') mapElement: ElementRef;
 // map: GoogleMap;
 map: any;
  start = 'chicago, il';
  waypoints='chicago, il';
  end = 'chicago, il';
  checkboxArray:any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  infowindow2 = new google.maps.InfoWindow();
  infowindow: any;
  ports:any;
  value: any;
  data:any = {};
  arr;
  abc: any;
  avi: any;
  qwe: any;
  status: any;
  statusone: any;
  statustwo: any;
  statusthree: any;
  statusfour: any;
 // ports: any;
  vehicle_id: any;
  hello: number;
  qw: number;
  qa: number;
  qt: number;
  gh: number;
  jk: number;
  qz: number;
  qk: number;
  origin: string;
  dst: string;
  username: string;
  pass: string;
  gp: string;
  //finaldateptone:string;
  eta: any;
  finaldateptone:any;
  eg: any;
  pt1: any;
  pt3: any;
  pt4: any;
  pt2: any;
  abcd: any;
  poin:any;
  pt5: any;
  userid: string;
  abcde: any;
  temp: string;
  message: string;
  statusfive: any;
  pt6: any;
  statussix: any;
  statusseven: any;
  pt7: any;
  statuseight: any;
  pt8: any;
  statusnine: any;
  pt9: any;
  statusten: any;
  pt10: any;
  sms: any;
  result: any;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private http: Http,private authProvider: AuthProvider) {
    this.value = navParams.get('data');
  console.log(this.value)
  this.message=',';
   this.doRefresh(0);

 

  }
 


mapcall()
{
this.navCtrl.push(GmPage,{
  data:this.value
  });
}

async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
/*ionViewDidLoad() {
    

  this.doRefresh(0);
  //console.log('ionViewDidLoad VehicledetailsPage');
 /* if(this.value.createtrip=='1')
  {
    // setTimeout( ()=>{
    //   this.doRefresh(0);
    //   },1000);
   //this.doRefresh(0)

    //   setTimeout( ()=>{
      
    //     this.doRefresh(0);
    //     }, 8000);
    //     console.log('go_to_next_eta');
    //     setTimeout( ()=>{
    //      this.doRefresh(0);
    //       }, 15000);
        
    //       setTimeout( ()=>{
    //         //  console.log('next_eta3');
    //          this.doRefresh(0);
    //           }, 25000);


          //     this.delay(1000).then(any=>{
          //       this.doRefresh(0);
          //       //your task after delay.
          //  });

       

      //      this.delay(12000).then(any=>{
      //       this.doRefresh(0);
      //       //your task after delay.
      //  });


  //      this.delay(20000).then(any=>{
  //       this.doRefresh(0);
  //       //your task after delay.
  //  });
  
  }
  else{
    this.doRefresh(0);
  }


}*/


getData()
{
 // this.presentLoading();
  var linkfirst='http://gtrac.in/snowmanappmacv1/snowview.php';
  //var myDatafirst=JSON.stringify({groupid:this.gp});
  
  this.http.get(linkfirst)
  .subscribe(data => {
    this.arr = JSON.parse(data["_body"]);
   // this.arr.sort((a,b) => b.id.localeCompare(a.id));
   console.log(this.arr);

  }, err =>{
   
    });
}

goAnOtherPage(event ,data)
  {
   // this.navCtrl.push(GmPage);
   this.navCtrl.push(TripdetailsPage,{
    data:this.statusone[0]['out_time']
    });
  }

  goAnOther(event ,data)
  {
   // this.navCtrl.push(GmPage);
   this.navCtrl.push(TripdetailsPage,{
    data:this.statusone[0]['out_time']
    });
  }

 
 


  goMapPage(event ,data)
{
  this.navCtrl.push(CurrentlocationPage,{
    data:this.abc
    });
}
doRefresh(refresher) {

  this.data.tripdatetime=this.value.start_date;
  this.data.tripclosetime=this.value.closetrip;
  this.data.veh=this.value.vehicle_num;
  this.data.pt1=this.value.pointone;
  this.data.pt2=this.value.pointtwo;
  this.data.pt3=this.value.pointthree;
  this.data.pt4=this.value.pointfour;
  this.data.pt5=this.value.pointfive;
  this.data.pt6=this.value.pointsix;
  this.data.pt7=this.value.pointseven;
  this.data.pt8=this.value.pointeight;
  this.data.pt9=this.value.pointnine;
  this.data.pt10=this.value.pointten;

  this.data.q1=this.value.qtyone;
  this.data.q2=this.value.qtytwo;
  this.data.q3=this.value.qtythree;
  this.data.q4=this.value.qtyfour;
  this.data.q5=this.value.qtyfive;
  this.data.q6=this.value.qtysix;
  this.data.q7=this.value.qtyseven;
  this.data.q8=this.value.qtyeight;
  this.data.q9=this.value.qtynine;
  this.data.q10=this.value.qtyten;

  this.data.total = parseInt(this.value.totalqtycases) 

  if (this.authProvider.isUser()) {
    this.username = this.authProvider.currentUser.name;
    this.pass=this.authProvider.currentUser.pass;
    this.gp=this.authProvider.currentUser.groupid;
  this.userid=this.authProvider.currentUser.userid;
  }
  // console.log(this.value);
//this.calculateAndDisplayRoute();
 
  var linkfirst='http://trackingexperts.com/appv2/dipatchclient/vehicle_listmac.php';
  var myDatafirst=JSON.stringify({uname:this.username, password: this.pass, userid:this.userid});

  this.http.post(linkfirst, myDatafirst)
  .subscribe(data => {
  this.ports=JSON.parse(data["_body"]); 

  // console.log(this.value.vehicle_num); 
  for(var j=0;j<this.ports.length;j++)
  {
    if(this.value.vehicle_num==this.ports[j]['veh_reg'])
    {
      this.vehicle_id=this.ports[j]['id'];
    }
  }
console.log(this.vehicle_id);
  var link='http://trackingexperts.com/appv2/dipatchclient/searchVehiclemac.php';
  var myData=JSON.stringify({uname:this.username, password: this.pass, vehicle_id:this.vehicle_id});
  this.http.post(link, myData)
  .subscribe(data => {
  this.abc=JSON.parse(data["_body"]);  
  this.data.current=String(this.abc[0]['Location']);
 
  console.log(this.abc[0]['Location']);
  this.data.gpstime=String(this.abc[0]['lastUpdate']);
  this.data.currenttemp=String(this.abc[0]['temp']);
  this.data.setfromtemp=this.value.fromtemp;
  this.data.settotemp=this.value.totemp;
 
    }

  ,err => {
  console.log("Oooops!");
  });


//var link='http://gtrac.in/snowmanappmacv1/single_vehicle.php';
var link='http://gtrac.in/snowmanappmacv1/single_vehicle2.php';
var myData=JSON.stringify({id:this.value.id});
this.http.post(link, myData)
.subscribe(data => {
//this.abcd=JSON.parse(data["_body"]);  
this.abcd=JSON.parse(data["_body"]);  
this.temp=String(this.abcd['poi_no']);


if(this.abcd['poi_no']==2){
//-----


var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 
   console.log(this.result);
   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped')
    {
      this.data.st2="Trip Completed:"+""+this.result[1]['in'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
});





//----
}else if(this.abcd['poi_no']==3){
//-------------

var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 
   console.log(this.result);
   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped')
    {
      this.data.st3="Trip Completed:"+""+this.result[2]['in'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
});


  




//------------
}
 else if (this.abcd['poi_no']==4){
console.log('poi=4');
var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 
   console.log(this.result);
   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped' && this.result[2]['out']!='POI Skipped')
    {
      this.data.st3="In:"+""+this.result[2]['in']+"|"+"Out:"+""+this.result[2]['out'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
  if(this.result[3]['point']=='4')
  {
    if(this.result[3]['in']!='POI Skipped')
    {
      this.data.st4="Trip Completed:"+""+this.result[3]['in'];
    }
    else
    {
      this.data.st4='POI Skipped';
    }
  }
});

}






//done
else if (this.abcd['poi_no']==5){

  var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 
   
   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped' && this.result[2]['out']!='POI Skipped')
    {
      this.data.st3="In:"+""+this.result[2]['in']+"|"+"Out:"+""+this.result[2]['out'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
  if(this.result[3]['point']=='4')
  {
    if(this.result[3]['in']!='POI Skipped' && this.result[3]['out']!='POI Skipped')
    {
      this.data.st4="In:"+""+this.result[3]['in']+"|"+"Out:"+""+this.result[3]['out'];
    }
    else
    {
      this.data.st4='POI Skipped';
    }
  }


  if(this.result[4]['point']=='5')
  {
  if(this.result[4]['in']!='POI Skipped')
    {
      this.data.st5="Trip Completed:"+""+this.result[4]['in'];
    }
    else
    {
      this.data.st5='POI Skipped';
    }
  }
});
 

  
}

//done
else if (this.abcd['poi_no']==6){

  var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 
  
   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped' && this.result[2]['out']!='POI Skipped')
    {
      this.data.st3="In:"+""+this.result[2]['in']+"|"+"Out:"+""+this.result[2]['out'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
  if(this.result[3]['point']=='4')
  {
    if(this.result[3]['in']!='POI Skipped' && this.result[3]['out']!='POI Skipped')
    {
      this.data.st4="In:"+""+this.result[3]['in']+"|"+"Out:"+""+this.result[3]['out'];
    }
    else
    {
      this.data.st4='POI Skipped';
    }
  }


  if(this.result[4]['point']=='5')
  {
  if(this.result[4]['in']!='POI Skipped' && this.result[4]['out']!='POI Skipped')
    {
      this.data.st5="In:"+""+this.result[4]['in']+"|"+"Out:"+""+this.result[4]['out'];
    }
    else
    {
      this.data.st5='POI Skipped';
    }
  }




  if(this.result[5]['point']=='6')
  {
  if(this.result[5]['in']!='POI Skipped')
    {
      this.data.st6="Trip Completed:"+""+this.result[5]['in'];
    }
    else
    {
      this.data.st6='POI Skipped';
    }
  }
  
});
 
 

  
}


else if (this.abcd['poi_no']==7){





  var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 

   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped' && this.result[2]['out']!='POI Skipped')
    {
      this.data.st3="In:"+""+this.result[2]['in']+"|"+"Out:"+""+this.result[2]['out'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
  if(this.result[3]['point']=='4')
  {
    if(this.result[3]['in']!='POI Skipped' && this.result[3]['out']!='POI Skipped')
    {
      this.data.st4="In:"+""+this.result[3]['in']+"|"+"Out:"+""+this.result[3]['out'];
    }
    else
    {
      this.data.st4='POI Skipped';
    }
  }


  if(this.result[4]['point']=='5')
  {
  if(this.result[4]['in']!='POI Skipped' && this.result[4]['out']!='POI Skipped')
    {
      this.data.st5="In:"+""+this.result[4]['in']+"|"+"Out:"+""+this.result[4]['out'];
    }
    else
    {
      this.data.st5='POI Skipped';
    }
  }




  if(this.result[5]['point']=='6')
  {
  if(this.result[5]['in']!='POI Skipped' && this.result[5]['out']!='POI Skipped')
    {
      this.data.st6="In:"+""+this.result[5]['in']+"|"+"Out:"+""+this.result[5]['out'];
    }
    else
    {
      this.data.st6='POI Skipped';
    }
  }


  if(this.result[6]['point']=='7')
  {
  if(this.result[6]['in']!='POI Skipped')
    {
      this.data.st7="Trip Completed"+""+this.result[6]['in'];
    }
    else
    {
      this.data.st7='POI Skipped';
    }
  }
 
   });
   
    
  }

//done
else if (this.abcd['poi_no']==8){
  var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 
   
   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped' && this.result[2]['out']!='POI Skipped')
    {
      this.data.st3="In:"+""+this.result[2]['in']+"|"+"Out:"+""+this.result[2]['out'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
  if(this.result[3]['point']=='4')
  {
    if(this.result[3]['in']!='POI Skipped' && this.result[3]['out']!='POI Skipped')
    {
      this.data.st4="In:"+""+this.result[3]['in']+"|"+"Out:"+""+this.result[3]['out'];
    }
    else
    {
      this.data.st4='POI Skipped';
    }
  }


  if(this.result[4]['point']=='5')
  {
  if(this.result[4]['in']!='POI Skipped' && this.result[4]['out']!='POI Skipped')
    {
      this.data.st5="In:"+""+this.result[4]['in']+"|"+"Out:"+""+this.result[4]['out'];
    }
    else
    {
      this.data.st5='POI Skipped';
    }
  }




  if(this.result[5]['point']=='6')
  {
  if(this.result[5]['in']!='POI Skipped' && this.result[5]['out']!='POI Skipped')
    {
      this.data.st6="In:"+""+this.result[5]['in']+"|"+"Out:"+""+this.result[5]['out'];
    }
    else
    {
      this.data.st6='POI Skipped';
    }
  }

  if(this.result[6]['point']=='7')
  {
  if(this.result[6]['in']!='POI Skipped' && this.result[6]['out']!='POI Skipped')
    {
      this.data.st7="In:"+""+this.result[6]['in']+"|"+"Out:"+""+this.result[6]['out'];
    }
    else
    {
      this.data.st7='POI Skipped';
    }
  }

  if(this.result[7]['point']=='8')
  {
  if(this.result[7]['in']!='POI Skipped')
    {
      this.data.st8="Trip Completed:"+""+this.result[7]['in'];
    }
    else
    {
      this.data.st8='POI Skipped';
    }
  }
});
  
 

  
}





//done
else if (this.abcd['poi_no']==9){
  var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 
 
   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped' && this.result[2]['out']!='POI Skipped')
    {
      this.data.st3="In:"+""+this.result[2]['in']+"|"+"Out:"+""+this.result[2]['out'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
  if(this.result[3]['point']=='4')
  {
    if(this.result[3]['in']!='POI Skipped' && this.result[3]['out']!='POI Skipped')
    {
      this.data.st4="In:"+""+this.result[3]['in']+"|"+"Out:"+""+this.result[3]['out'];
    }
    else
    {
      this.data.st4='POI Skipped';
    }
  }


  if(this.result[4]['point']=='5')
  {
  if(this.result[4]['in']!='POI Skipped' && this.result[4]['out']!='POI Skipped')
    {
      this.data.st5="In:"+""+this.result[4]['in']+"|"+"Out:"+""+this.result[4]['out'];
    }
    else
    {
      this.data.st5='POI Skipped';
    }
  }




  if(this.result[5]['point']=='6')
  {
  if(this.result[5]['in']!='POI Skipped' && this.result[5]['out']!='POI Skipped')
    {
      this.data.st6="In:"+""+this.result[5]['in']+"|"+"Out:"+""+this.result[5]['out'];
    }
    else
    {
      this.data.st6='POI Skipped';
    }
  }

  if(this.result[6]['point']=='7')
  {
  if(this.result[6]['in']!='POI Skipped' && this.result[6]['out']!='POI Skipped')
    {
      this.data.st7="In:"+""+this.result[6]['in']+"|"+"Out:"+""+this.result[6]['out'];
    }
    else
    {
      this.data.st7='POI Skipped';
    }
  }

  if(this.result[7]['point']=='8')
  {
  if(this.result[7]['in']!='POI Skipped' && this.result[7]['out']!='POI Skipped')
    {
      this.data.st8="In:"+""+this.result[7]['in']+"|"+"Out:"+""+this.result[7]['out'];
    }
    else
    {
      this.data.st8='POI Skipped';
    }
  }

  if(this.result[8]['point']=='9')
  {
  if(this.result[8]['in']!='POI Skipped')
    {
      this.data.st9="Trip Completed:"+""+this.result[8]['in'];
    }
    else
    {
      this.data.st9='POI Skipped';
    }
  }
});
  
}

else if (this.abcd['poi_no']==10){
  var linktwo='http://gtrac.in/snowmanappmacv1/in_out_data.php';
    
  var myDatatwo=JSON.stringify({"id":this.value.id});
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.result=JSON.parse(data["_body"]); 

   if(this.result[0]['point']=='1')
   {
    if(this.result[0]['out']!='POI Skipped')
{
     this.data.st1='Out'+" "+"|"+" "+" "+this.result[0]['out'];
}
else{
  this.data.st1='POI Skipped';
}


  }

  if(this.result[1]['point']=='2')
  {
    if(this.result[1]['in']!='POI Skipped' && this.result[1]['out']!='POI Skipped')
    {
      this.data.st2="In:"+""+this.result[1]['in']+"|"+"Out:"+""+this.result[1]['out'];
    }
    else
    {
      this.data.st2='POI Skipped';
    }
  }
  if(this.result[2]['point']=='3')
  {
    if(this.result[2]['in']!='POI Skipped' && this.result[2]['out']!='POI Skipped')
    {
      this.data.st3="In:"+""+this.result[2]['in']+"|"+"Out:"+""+this.result[2]['out'];
    }
    else
    {
      this.data.st3='POI Skipped';
    }
  }
  if(this.result[3]['point']=='4')
  {
    if(this.result[3]['in']!='POI Skipped' && this.result[3]['out']!='POI Skipped')
    {
      this.data.st4="In:"+""+this.result[3]['in']+"|"+"Out:"+""+this.result[3]['out'];
    }
    else
    {
      this.data.st4='POI Skipped';
    }
  }


  if(this.result[4]['point']=='5')
  {
  if(this.result[4]['in']!='POI Skipped' && this.result[4]['out']!='POI Skipped')
    {
      this.data.st5="In:"+""+this.result[4]['in']+"|"+"Out:"+""+this.result[4]['out'];
    }
    else
    {
      this.data.st5='POI Skipped';
    }
  }




  if(this.result[5]['point']=='6')
  {
  if(this.result[5]['in']!='POI Skipped' && this.result[5]['out']!='POI Skipped')
    {
      this.data.st6="In:"+""+this.result[5]['in']+"|"+"Out:"+""+this.result[5]['out'];
    }
    else
    {
      this.data.st6='POI Skipped';
    }
  }

  if(this.result[6]['point']=='7')
  {
  if(this.result[6]['in']!='POI Skipped' && this.result[6]['out']!='POI Skipped')
    {
      this.data.st7="In:"+""+this.result[6]['in']+"|"+"Out:"+""+this.result[6]['out'];
    }
    else
    {
      this.data.st7='POI Skipped';
    }
  }

  if(this.result[7]['point']=='8')
  {
  if(this.result[7]['in']!='POI Skipped' && this.result[7]['out']!='POI Skipped')
    {
      this.data.st8="In:"+""+this.result[7]['in']+"|"+"Out:"+""+this.result[7]['out'];
    }
    else
    {
      this.data.st8='POI Skipped';
    }
  }

  if(this.result[8]['point']=='9')
  {
  if(this.result[8]['in']!='POI Skipped' && this.result[8]['out']!='POI Skipped')
    {
      this.data.st9="In:"+""+this.result[8]['in']+"|"+"Out:"+""+this.result[8]['out'];
    }
    else
    {
      this.data.st9='POI Skipped';
    }
  }

  if(this.result[9]['point']=='10')
  {
  if(this.result[9]['in']!='POI Skipped')
    {
      this.data.st10="Trip Completed"+""+this.result[9]['in'];
    }
    else
    {
      this.data.st10='POI Skipped';
    }
  }
 
   });
}




});////  no of poi














//pt2-------------






    }

    ,err => {
      console.log("Oooops!");
      });







// if(this.value.createtrip==1)
// {
// this.doRefresh(1);
// }



  if(refresher!=0)
    {
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
      //refresher.complete();
    }
}

}
