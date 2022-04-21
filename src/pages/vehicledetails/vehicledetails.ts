import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GmPage } from '../gm/gm';
import {Http}  from "@angular/http";
import { TripdetailsPage } from '../tripdetails/tripdetails';
import { AuthProvider } from './../../providers/auth/auth';
import { CurrentlocationPage } from '../currentlocation/currentlocation';
import { AlertController,LoadingController} from 'ionic-angular';
import { ClosetripnewPage } from '../closetripnew/closetripnew';
import { ActivetripPage } from '../activetrip/activetrip';
import { ActivetripnewPage } from '../activetripnew/activetripnew';
declare var google;
/**
 * Generated class for the VehicledetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicledetails',
  templateUrl: 'vehicledetails.html'
})

export class VehicledetailsPage {
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
  total: number;
  constructor(public loadingController: LoadingController,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private http: Http,private authProvider: AuthProvider) {
    this.value = navParams.get('data');
    console.log(this.value);
    // if(this.value.createtrip=='1')
    // {
    //   this.presentLoading();
    // }
    //console.log(this.value);

  this.message=',';
  this.doRefresh(0);
  }
 

//   ionViewCanEnter()  
// {
//   return Promise.resolve(this.doRefresh(0));
// }

  async presentLoading() {
    const loading = await this.loadingController.create({
     
      spinner: "dots",
      
      duration: 9000
    });
    return await loading.present();
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
   

  }, err =>{
    console.log(err);
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

 
 

  closetrip()
{
//   var linkclose = 'http://192.168.1.88/pintu/close_trip.php';
  
// var myDataclose = JSON.stringify({id:this.value.id});  
// this.http.post(linkclose, myDataclose).subscribe(data => {
// let result=JSON.parse(data["_body"]); 
// }, error => {
// console.log("Oooops!");
// });
let alert = this.alertCtrl.create({
  title: 'Confirm',
  message: 'Do you want to close the trip?',
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
var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
var myDataclose = JSON.stringify({id:this.value.id});  
this.http.post(linkclose, myDataclose).subscribe(data => {
let result=JSON.parse(data["_body"]); 
}, error => {
console.log("Oooops!");
});

this.navCtrl.push(ActivetripnewPage);
      }
    }
  ]
});
alert.present();
}
  goMapPage(event ,data)
{
  this.navCtrl.push(CurrentlocationPage,{
    data:this.abc
    });
}
//--19dec2019start
pointone()
{
  return new Promise((resolve, reject) => {
  if(this.value.pointone)
{

var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';

var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,
"poi_name":this.value.pointone,
"departure_time":this.value.start_date,"status":"out"});
this.http.post(linktwo, myDatatwo)
.subscribe(data => {
this.statusone=JSON.parse(data["_body"]); 

if(this.statusone[0]['status']=='out')
{
  this.data.st1='Out'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
  var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
  var myData = JSON.stringify({"point":"1","poi_in":'0000-00-00 00:00:00',"poi_out":this.statusone[0]['out_time_table'],'id':this.value.id,"poi_name":this.value.pointone,'action':'inout_update'});  
  this.http.post(link, myData).subscribe(data => {
  let result=JSON.parse(data["_body"]); 
  resolve(true);
  }, error => {
  console.log("Oooops!");
  });
}

else
{
  //this.data.st1='Running';
  var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
  var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
  this.http.post(linktwo, myDatatwo)
  .subscribe(data => {
    this.arr=JSON.parse(data["_body"]); 
    

  for(var j=0;j<this.arr.length;j++)
  {
 if(this.value.pointone==this.arr[j]['from_location'])
 {
   this.hello=parseFloat(this.arr[j]['lat']);
   this.qw=parseFloat(this.arr[j]['long']);
   
 }
  }
 

 
 this.origin=String(this.abc[0]['latlong']);

 this.dst= String(this.hello+','+this.qw);




this.directionsService.route({
  origin: this.origin,
  destination: this.dst,
  travelMode: 'DRIVING'
}, (response, status) => {
  if (status === 'OK') {
    this.directionsDisplay.setDirections(response);
    var trip_duration=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
    var trip_distance=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
  
   var td= trip_duration.split(' ');

var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
   var myDatatwo=JSON.stringify({'point':'1','duration':trip_duration,"distance":trip_distance,"poi_name":this.value.pointone,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
   this.http.post(linktwo, myDatatwo)
   .subscribe(data => {
    //this.pt1=data["_body"];
     this.pt1=JSON.parse(data["_body"]); 

this.data.st1="ETA"+":"+this.pt1['ETA'];



     var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
     var myData = JSON.stringify({"point":'1',"pt_eta":this.pt1['ETA'],'id':this.value.id,"poi_name":this.value.pointone,'action':'eta_update'});  
     this.http.post(link, myData).subscribe(data => {
     let result=JSON.parse(data["_body"]); 
     if(result['status']=='success'){

      if(this.value.createtrip=='1')
      {
        var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
        
        var myDatasms=JSON.stringify({
                                      "id":this.value.id
                                    });
      
        this.http.post(linksms, myDatasms).subscribe(data => { 
          this.sms=data["_body"];
        //console.log(this.sms);
        });
      
      }
      resolve(true);
      console.log('resolve_1');
       }
     }, error => {
     console.log("Oooops!");
     });

   }); 

  } else {
    window.alert('Directions request failed due to ' + status);
  }
});






});

}


});
}
  }).catch(alert);
}

pointtwotrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointtwo)
    {
    
    
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointtwo,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statustwo=JSON.parse(data["_body"]); 
    
    if(this.statustwo[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
    
    
    
    
    var d1 = new Date(this.statustwo[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st2=this.statustwo[0]['status']+"|"+this.statustwo[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'2',"poi_in":this.statustwo[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointtwo,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    resolve(true);
    console.log('resolve2_trip');
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else
    {
      //this.data.st2='Running';
      var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
      var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
      this.http.post(linktwo, myDatatwo)
      .subscribe(data => {
        this.arr=JSON.parse(data["_body"]); 
        
    
      
      
    //  this.value = this.navParams.get('data');
    //  console.log(this.value);
      for(var j=0;j<this.arr.length;j++)
      {
    if(this.value.pointone==this.arr[j]['from_location'])
     {
       this.hello=parseFloat(this.arr[j]['lat']);
       this.qw=parseFloat(this.arr[j]['long']);
     }
     if(this.value.pointfour==this.arr[j]['from_location'])
     {
       this.qa=parseFloat(this.arr[j]['lat']);
       this.qt=parseFloat(this.arr[j]['long']);
     }
     if(this.value.pointtwo==this.arr[j]['from_location'])
     {
     
     this.gh=parseFloat(this.arr[j]['lat']);
     this.jk=parseFloat(this.arr[j]['long']);
     var latlngone=[{lat:this.gh,long:this.jk}];
     
     }
     if(this.value.pointthree==this.arr[j]['from_location'] )
     {
     this.qz=parseFloat(this.arr[j]['lat']);
     this.qk=parseFloat(this.arr[j]['long']);
     var latlngtwo=[{lat:this.qz,long:this.qk}];
     }
    
    
     }
     
     //this.dst= String(this.qz+','+this.qk);
     
    // this.origin=String(this.abc[0]['latlong']);
    if(this.statusone[0]['status']=='out')
    {
      this.origin=String(this.abc[0]['latlong']);
      this.dst=String(this.gh+','+this.jk);
    }
    else {
     this.origin= String(this.hello+','+this.qw);
     this.dst=String(this.gh+','+this.jk);
      }
    
     this.directionsService.route({
      origin: this.origin,
      destination: this.dst,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        var trip_durationpt2=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
        var trip_distance2=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
        var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
     var myDatatwo=JSON.stringify({'point':'2','duration':trip_durationpt2,'distance':trip_distance2,"poi_name":this.value.pointtwo,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
     this.http.post(linktwo, myDatatwo)
     .subscribe(data => {
      // this.pt1=data["_body"];
       this.pt2=JSON.parse(data["_body"]); 
      //  if(this.pt2['ETA']=='')
      //  {
      //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
      //   var myDatatwo=JSON.stringify({'point':'2','duration':trip_durationpt2,'distance':trip_distance2,"poi_name":this.value.pointtwo,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
      //   this.http.post(linktwo, myDatatwo)
      //   .subscribe(data => {
      //    // this.pt1=data["_body"];
      //     this.pt2=JSON.parse(data["_body"]); 
    
      //     this.data.st2="ETA"+":"+this.pt2['ETA'];
    
      //   });
      //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
      //  }
      //  else{
        this.data.st2="ETA"+":"+this.pt2['ETA'];
      //  }
    
    
    
    
    
       //this.data.st2="ETA"+":"+this.pt2['ETA'];
       var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
       var myData = JSON.stringify({"point":'2',"pt_eta":this.pt2['ETA'],'id':this.value.id,"poi_name":this.value.pointtwo,'action':'eta_update'});  
       this.http.post(link, myData).subscribe(data => {
       let result=JSON.parse(data["_body"]); 
    
       if(result['status']=='success'){
    
        if(this.value.createtrip=='1')
        {
          var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
          
          var myDatasms=JSON.stringify({
                                        "id":this.value.id
                                      });
        
          this.http.post(linksms, myDatasms).subscribe(data => { 
            this.sms=data["_body"];
         // console.log(this.sms);
          });
        
        }
        resolve(true);
        console.log('resolve2_trip');
         }
       }, error => {
       console.log("Oooops!");
       });
       
    
    
    
    
     }); 
    
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    
    
    
    
    
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    });
    
    }


  }).catch(alert);
}

pointtwo()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointtwo)
    {
      
      
      
      var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
      var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,
                                  "poi_name":this.value.pointtwo,
                                  "departure_time":this.value.start_date,
                                  "status":"inout"
                                });
      this.http.post(linktwo, myDatatwo)
      .subscribe(data => {
      this.statustwo=JSON.parse(data["_body"]); 
      
      if(this.statustwo[0]['status']=='inout')
      {
       
      
        if(this.statustwo[0]['out_time']!='' && this.statustwo[0]['in_time']!='')
        {
        
         this.data.st2="In:"+""+this.statustwo[0]['in_time']+"|"+"Out:"+""+this.statustwo[0]['out_time'];
      
         }
      
         else if(this.statustwo[0]['in_time']!='')
         {
          this.data.st2="Reached"+" "+"|"+"In:"+""+this.statustwo[0]['in_time'];
      
      
         }
         var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
      
         var myData = JSON.stringify({'point':'2',"poi_in":this.statustwo[0]['in_time_table'],"poi_out":this.statustwo[0]['out_time_table'],'poi_name':this.value.pointtwo,'id':this.value.id,'action':'inout_update'});  
         this.http.post(link, myData).subscribe(data => {
         let result=JSON.parse(data["_body"]); 
         if(this.data.st2!='')
         {
         resolve(true);
         console.log('resolve_2');
         }
         else
         {
          reject(Error("Failed!"));
         }
         }, error => {
         console.log("Oooops!");
         });
      
        
      
      }
      else
      {
        //this.data.st2='Running';
        var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
        var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
        this.http.post(linktwo, myDatatwo)
        .subscribe(data => {
          this.arr=JSON.parse(data["_body"]); 
          
      
        for(var j=0;j<this.arr.length;j++)
        {
      
      //  if(this.value.pointtwo==this.arr[j]['from_location'])
      //  {
       
      //  this.gh=parseFloat(this.arr[j]['lat']);
      //  this.jk=parseFloat(this.arr[j]['long']);
      //  var latlngone=[{lat:this.gh,long:this.jk}];
       
      //  }
      if(this.value.pointone==this.arr[j]['from_location'])
      {
       this.hello=parseFloat(this.arr[j]['lat']);
       this.qw=parseFloat(this.arr[j]['long']);
      }
      if(this.value.pointfour==this.arr[j]['from_location'])
      {
       this.qa=parseFloat(this.arr[j]['lat']);
       this.qt=parseFloat(this.arr[j]['long']);
      }
      if(this.value.pointtwo==this.arr[j]['from_location'])
      {
      
      this.gh=parseFloat(this.arr[j]['lat']);
      this.jk=parseFloat(this.arr[j]['long']);
      var latlngone=[{lat:this.gh,long:this.jk}];
      }
      if(this.value.pointthree==this.arr[j]['from_location'] )
      {
      this.qz=parseFloat(this.arr[j]['lat']);
      this.qk=parseFloat(this.arr[j]['long']);
      var latlngtwo=[{lat:this.qz,long:this.qk}];
      }
      
      
      
       }
       
       //this.dst= String(this.qz+','+this.qk);
       if(this.statusone[0]['status']=='out')
       {
         this.origin=String(this.abc[0]['latlong']);
         this.dst=String(this.gh+','+this.jk);
       }
       else {
        this.origin= String(this.hello+','+this.qw);
        this.dst=String(this.gh+','+this.jk);
         }
      // this.origin=String(this.abc[0]['latlong']);
      //  this.origin= String(this.hello+','+this.qw);
      // this.dst=String(this.gh+','+this.jk);
         
       this.directionsService.route({
        origin: this.origin,
        destination: this.dst,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
          var trip_durationpt2=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
          var trip_distance2=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
          var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
       var myDatatwo=JSON.stringify({'point':'2','duration':trip_durationpt2,'distance':trip_distance2,"poi_name":this.value.pointtwo,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
       this.http.post(linktwo, myDatatwo)
       .subscribe(data => {
        // this.pt1=data["_body"];
         this.pt2=JSON.parse(data["_body"]); 

         this.data.st2="ETA"+":"+this.pt2['ETA'];
 
    
    
    
        var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
        var myData = JSON.stringify({"point":'2',"pt_eta":this.pt2['ETA'],'id':this.value.id,"poi_name":this.value.pointtwo,'action':'eta_update'});  
        this.http.post(link, myData).subscribe(data => {
        let result=JSON.parse(data["_body"]); 
        if(result['status']=='success'){
     
         if(this.value.createtrip=='1')
         {
           var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
           
           var myDatasms=JSON.stringify({
                                         "id":this.value.id
                                       });
         
           this.http.post(linksms, myDatasms).subscribe(data => { 
             this.sms=data["_body"];
          // console.log(this.sms);
           });
         
         }

         if(this.data.st2!='')
         {
              resolve(true);
             console.log('resolve_2');
         }
         else
         {
           reject(Error("Failed!"));
         }
     
          }
        }, error => {
        console.log("Oooops!");
        });
    
      
    
         
      
      
      
       }); 
      
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
      
      
      
      
      
      
      });
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      }
      });
      
     
      
      //end_pt3
      
      
      
      
      }

  }).catch(alert);
}

pointthreetrip(){
  return new Promise((resolve, reject) => {
    if(this.value.pointthree)
    {
    
    
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointthree,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statusthree=JSON.parse(data["_body"]); 
    
    if(this.statusthree[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
    
    
    
    
    var d1 = new Date(this.statusthree[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st3=this.statusthree[0]['status']+"|"+this.statusthree[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'3',"poi_in":this.statusthree[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointthree,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    resolve(true);
    console.log('resolve3_trip');
    
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else
    {
   
   //this.data.st3='Running';
   var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
   var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
   this.http.post(linktwo, myDatatwo)
   .subscribe(data => {
     this.arr=JSON.parse(data["_body"]); 
     
  
   
   
  
   for(var j=0;j<this.arr.length;j++)
   {
  
  //  if(this.value.pointthree==this.arr[j]['from_location'] )
  //  {
  //  this.qz=parseFloat(this.arr[j]['lat']);
  //  this.qk=parseFloat(this.arr[j]['long']);
  //  var latlngtwo=[{lat:this.qz,long:this.qk}];
  //  }
  if(this.value.pointone==this.arr[j]['from_location'])
  {
  this.hello=parseFloat(this.arr[j]['lat']);
  this.qw=parseFloat(this.arr[j]['long']);
  }
  if(this.value.pointfour==this.arr[j]['from_location'])
  {
  this.qa=parseFloat(this.arr[j]['lat']);
  this.qt=parseFloat(this.arr[j]['long']);
  }
  if(this.value.pointtwo==this.arr[j]['from_location'])
  {
  
  this.gh=parseFloat(this.arr[j]['lat']);
  this.jk=parseFloat(this.arr[j]['long']);
  var latlngone=[{lat:this.gh,long:this.jk}];
  }
  if(this.value.pointthree==this.arr[j]['from_location'] )
  {
  this.qz=parseFloat(this.arr[j]['lat']);
  this.qk=parseFloat(this.arr[j]['long']);
  var latlngtwo=[{lat:this.qz,long:this.qk}];
  }
  }
  
  if( this.statustwo[0]['out_time']!='')
  {
  this.origin=String(this.abc[0]['latlong']);
  this.dst= String(this.qz+','+this.qk);
  }
  else
  {
  this.origin=String(this.gh+','+this.jk);
  this.dst= String(this.qz+','+this.qk);
  }
  //this.dst= String(this.qz+','+this.qk);
  //  this.origin=String(this.abc[0]['latlong']);
  // this.origin=String(this.gh+','+this.jk);
  // this.dst= String(this.qz+','+this.qk);
  
  
  
  this.directionsService.route({
   origin: this.origin,
   destination: this.dst,
   travelMode: 'DRIVING'
  }, (response, status) => {
   if (status === 'OK') {
     this.directionsDisplay.setDirections(response);
     var trip_durationpt3=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
     var trip_distance3=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
     var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
  var myDatatwo=JSON.stringify({'point':'3','duration':trip_durationpt3,"distance":trip_distance3,"poi_name":this.value.pointthree,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
  this.http.post(linktwo, myDatatwo)
  .subscribe(data => {
   // this.pt3=data["_body"];
    this.pt3=JSON.parse(data["_body"]);

     this.data.st3="ETA"+":"+this.pt3['ETA'];
  
  
    // }
  
  
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    var myData = JSON.stringify({"point":'3',"pt_eta":this.pt3['ETA'],'id':this.value.id,"poi_name":this.value.pointthree,'action':'eta_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    if(result['status']=='success'){
    
     if(this.value.createtrip=='1')
     {
       var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
       
       var myDatasms=JSON.stringify({
                                     "id":this.value.id
                                   });
     
       this.http.post(linksms, myDatasms).subscribe(data => { 
         this.sms=data["_body"];
      // console.log(this.sms);
       });
     
     }
     if(this.data.st3!='')
     {
     resolve(true)
     console.log('resolve3_trip');
     }
     else
     {
       reject(Error("Failed!"));
     }
      }
    }, error => {
    console.log("Oooops!");
    });
  
  

  
  
  
   
  
  
    
  
  
  }); 
  
   } else {
     window.alert('Directions request failed due to ' + status);
   }
  });
  
  
  
  
  
  
  });
  
  }

  
  
    
    });
    
    }
  }).catch(alert);

}

pointthree()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointthree)
    {
      
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointthree,"departure_time":this.value.start_date,"status":"inout"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.statusthree=JSON.parse(data["_body"]); 
      
      if(this.statusthree[0]['status']=='inout')
      {
        //this.data.st3="In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
        
        if(this.statusthree[0]['out_time']!='' && this.statusthree[0]['in_time']!='')
        {
        
         this.data.st3= "In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
     
         }
        
        else if(this.statusthree[0]['in_time']!='' )
        {
         this.data.st3="Reached"+" "+"|"+"In:"+""+this.statusthree[0]['in_time'];
  
   
        }
  
  
        var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
  
        var myData = JSON.stringify({'point':'3',"poi_in":this.statusthree[0]['in_time_table'],"poi_out":this.statusthree[0]['out_time_table'],'poi_name':this.value.pointthree,'id':this.value.id,'action':'inout_update'});  
        this.http.post(link, myData).subscribe(data => {
        let result=JSON.parse(data["_body"]); 
        if(this.data.st3!='')
        {
        resolve(true)
  console.log('resolve_3');
        }
        else
        {
          reject(Error("Failed!"));
        }
        }, error => {
        console.log("Oooops!");
        });
  
  
  
       
        
     
  
  
  
  
  
  
  
  
  
      }  
      else
       {
      
      //this.data.st3='Running';
      var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
      var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
      this.http.post(linktwo, myDatatwo)
      .subscribe(data => {
        this.arr=JSON.parse(data["_body"]); 
        
  
      
      
  
      for(var j=0;j<this.arr.length;j++)
      {
  
     /*if(this.value.pointthree==this.arr[j]['from_location'] )
     {
     this.qz=parseFloat(this.arr[j]['lat']);
     this.qk=parseFloat(this.arr[j]['long']);
     var latlngtwo=[{lat:this.qz,long:this.qk}];
     }*/
     if(this.value.pointone==this.arr[j]['from_location'])
     {
       this.hello=parseFloat(this.arr[j]['lat']);
       this.qw=parseFloat(this.arr[j]['long']);
     }
    if(this.value.pointfour==this.arr[j]['from_location'])
     {
       this.qa=parseFloat(this.arr[j]['lat']);
       this.qt=parseFloat(this.arr[j]['long']);
     }
     if(this.value.pointtwo==this.arr[j]['from_location'])
     {
     
     this.gh=parseFloat(this.arr[j]['lat']);
     this.jk=parseFloat(this.arr[j]['long']);
     var latlngone=[{lat:this.gh,long:this.jk}];
     }
     if(this.value.pointthree==this.arr[j]['from_location'] )
     {
     this.qz=parseFloat(this.arr[j]['lat']);
     this.qk=parseFloat(this.arr[j]['long']);
     var latlngtwo=[{lat:this.qz,long:this.qk}];
     }
     }
     
     if( this.statustwo[0]['out_time']!='')
     {
       this.origin=String(this.abc[0]['latlong']);
       this.dst= String(this.qz+','+this.qk);
    
     }
     else
     {
       this.origin=String(this.gh+','+this.jk);
       this.dst= String(this.qz+','+this.qk);
     }
  
     //this.dst= String(this.qz+','+this.qk);
   //  this.origin=String(this.abc[0]['latlong']);
    // this.origin=String(this.gh+','+this.jk);
    // this.dst= String(this.qz+','+this.qk);
     
       
     this.directionsService.route({
      origin: this.origin,
      destination: this.dst,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        var trip_durationpt3=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
        var trip_distance3=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
        var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
     var myDatatwo=JSON.stringify({'point':'3','duration':trip_durationpt3,"distance":trip_distance3,"poi_name":this.value.pointthree,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
     this.http.post(linktwo, myDatatwo)
     .subscribe(data => {
      // this.pt3=data["_body"];
       this.pt3=JSON.parse(data["_body"]);
      //  if(this.pt3['ETA']=='')
      //  {
      //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
      //   var myDatatwo=JSON.stringify({'point':'3','duration':trip_durationpt3,"distance":trip_distance3,"poi_name":this.value.pointthree,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
      //   this.http.post(linktwo, myDatatwo)
      //   .subscribe(data => {
      //    // this.pt1=data["_body"];
      //     this.pt3=JSON.parse(data["_body"]); 
  
      //     this.data.st3="ETA"+":"+this.pt3['ETA'];
  
      //   });
      //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
      //  }
      //  else{
        this.data.st3="ETA"+":"+this.pt3['ETA'];
      //  }
      // this.data.st3="ETA"+":"+this.pt3['ETA']; 
       var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
       var myData = JSON.stringify({"point":'3',"pt_eta":this.pt3['ETA'],'id':this.value.id,"poi_name":this.value.pointthree,'action':'eta_update'});  
       this.http.post(link, myData).subscribe(data => {
       let result=JSON.parse(data["_body"]); 
       if(result['status']=='success'){
  
        if(this.value.createtrip=='1')
        {
          var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
          
          var myDatasms=JSON.stringify({
                                        "id":this.value.id
                                      });
        
          this.http.post(linksms, myDatasms).subscribe(data => { 
            this.sms=data["_body"];
         // console.log(this.sms);
          });
        
        }
        if(this.data.st3!='')
        {
        resolve(true)
  console.log('resolve_3');
        }
        else
        {
          reject(Error("Failed!"));
        }
  
         }
       }, error => {
       console.log("Oooops!");
       });
      
  
    
       
  
  
     }); 
  
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  
    
  
  
  
  
    });
  
    }
      
    });
      }
  }).catch(alert);
}

pointfour()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointfour)
    {
      
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointfour,"departure_time":this.value.start_date,"status":"inout"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.statusfour=JSON.parse(data["_body"]); 
      
      if(this.statusfour[0]['status']=='inout')
      {
        //this.data.st3="In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
        
        if(this.statusfour[0]['out_time']!='' && this.statusfour[0]['in_time']!='')
        {
        
         this.data.st4= "In:"+""+this.statusfour[0]['in_time']+"|"+"Out:"+""+this.statusfour[0]['out_time'];
     
         }
        
        else if(this.statusfour[0]['in_time']!='' )
        {
         this.data.st3="Reached"+" "+"|"+"In:"+""+this.statusfour[0]['in_time'];
  
   
        }
  
  
        var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
  
        var myData = JSON.stringify({'point':'4',"poi_in":this.statusfour[0]['in_time_table'],"poi_out":this.statusfour[0]['out_time_table'],'poi_name':this.value.pointfour,'id':this.value.id,'action':'inout_update'});  
        this.http.post(link, myData).subscribe(data => {
        let result=JSON.parse(data["_body"]); 
        if(this.data.st4!='')
        {
        resolve(true)
        console.log('resolve_4');
        }
        else
        {
        reject(Error("Failed!"));
        }
        }, error => {
        console.log("Oooops!");
        });
  
  
  
       
        
     
  
  
  
  
  
  
  
  
  
      }  
      else
       {
      
      //this.data.st3='Running';
      var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
      var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
      this.http.post(linktwo, myDatatwo)
      .subscribe(data => {
        this.arr=JSON.parse(data["_body"]); 
        
  
      
      
  

     
     if( this.statusthree[0]['out_time']!='')
     {
       this.origin=String(this.abc[0]['latlong']);
      // this.dst= String(this.qz+','+this.qk);
     this.dst=this.value.p4_latlong;
     }
     else
     {
      //  this.origin=String(this.gh+','+this.jk);
      //  this.dst= String(this.qz+','+this.qk);
      this.origin=this.value.p3_latlong;
      this.dst=this.value.p4_latlong;
     }
  
     //this.dst= String(this.qz+','+this.qk);
   //  this.origin=String(this.abc[0]['latlong']);
    // this.origin=String(this.gh+','+this.jk);
    // this.dst= String(this.qz+','+this.qk);
     
           
     this.directionsService.route({
      origin: this.origin,
      destination: this.dst,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        var trip_durationpt4=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
        var trip_distance4=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
        var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
     var myDatatwo=JSON.stringify({'point':'4','duration':trip_durationpt4,'distance':trip_distance4,"poi_name":this.value.pointfour,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
     this.http.post(linktwo, myDatatwo)
     .subscribe(data => {
      // this.pt3=data["_body"];
       this.pt4=JSON.parse(data["_body"]);
      //  if(this.pt4['ETA']=='')
      //  {
      //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
      //   var myDatatwo=JSON.stringify({'point':'4','duration':trip_durationpt4,'distance':trip_distance4,"poi_name":this.value.pointfour,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
      //   this.http.post(linktwo, myDatatwo)
      //   .subscribe(data => {
      //    // this.pt1=data["_body"];
      //     this.pt4=JSON.parse(data["_body"]); 
  
      //     this.data.st4="ETA"+":"+this.pt4['ETA'];
  
      //   });
      //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
      //  }
      //  else{
        this.data.st4="ETA"+":"+this.pt4['ETA'];
      //  }
      // this.data.st3="ETA"+":"+this.pt3['ETA']; 
       var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
       var myData = JSON.stringify({"point":'4',"pt_eta":this.pt4['ETA'],'id':this.value.id,"poi_name":this.value.pointfour,'action':'eta_update'});  
       this.http.post(link, myData).subscribe(data => {
       let result=JSON.parse(data["_body"]); 
       if(result['status']=='success'){

        if(this.value.createtrip=='1')
        {
          var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
          
          var myDatasms=JSON.stringify({
                                        "id":this.value.id
                                      });
        
          this.http.post(linksms, myDatasms).subscribe(data => { 
            this.sms=data["_body"];
         // console.log(this.sms);
          });
        
        }
        if(this.data.st4!='')
        {
        resolve(true)
        console.log('resolve_4');
        }
        else
        {
        reject(Error("Failed!"));
        }
         }
       }, error => {
       console.log("Oooops!");
       });
    //  
  
    
       
  
  
     }); 
  
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  
    
  
  
  
  
    });
  
    }
      
    });
      }
  }).catch(alert);
}


pointfourtrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointfour)
    {
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointfour,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statusfour=JSON.parse(data["_body"]); 
    
    if(this.statusfour[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
    
    
    
    
    var d1 = new Date(this.statusfour[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st4=this.statusfour[0]['status']+"|"+this.statusfour[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'4',"poi_in":this.statusfour[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointfour,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    resolve(true);
console.log('resolve4_trip');
    
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else if(this.statusfour[0]['status']=='Running')
    {
    //this.data.st4='Running';
    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
    var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.arr=JSON.parse(data["_body"]); 
      
    
    
    
    
    for(var j=0;j<this.arr.length;j++)
    {
    
    /*if(this.value.pointfour==this.arr[j]['from_location'])
    {
     this.qa=parseFloat(this.arr[j]['lat']);
     this.qt=parseFloat(this.arr[j]['long']);
    }*/
    if(this.value.pointone==this.arr[j]['from_location'])
    {
     this.hello=parseFloat(this.arr[j]['lat']);
     this.qw=parseFloat(this.arr[j]['long']);
    }
    if(this.value.pointfour==this.arr[j]['from_location'])
    {
     this.qa=parseFloat(this.arr[j]['lat']);
     this.qt=parseFloat(this.arr[j]['long']);
    }
    if(this.value.pointtwo==this.arr[j]['from_location'])
    {
    
    this.gh=parseFloat(this.arr[j]['lat']);
    this.jk=parseFloat(this.arr[j]['long']);
    var latlngone=[{lat:this.gh,long:this.jk}];
    }
    if(this.value.pointthree==this.arr[j]['from_location'] )
    {
    this.qz=parseFloat(this.arr[j]['lat']);
    this.qk=parseFloat(this.arr[j]['long']);
    var latlngtwo=[{lat:this.qz,long:this.qk}];
    }
    
    }
    
    
    
    if(this.statusthree[0]['out_time']!='')
    // if(this.value.pt3_out!='')
    {
     this.origin=String(this.abc[0]['latlong']);
    // this.origin= String(this.qz+','+this.qk);
    this.dst=String(this.qa+','+this.qt);
    
    }
    else
    {
    this.origin= String(this.qz+','+this.qk);
     this.dst=String(this.qa+','+this.qt);
    }
    //this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    
    
    
    
    this.directionsService.route({
    origin: this.origin,
    destination: this.dst,
    travelMode: 'DRIVING'
    }, (response, status) => {
    if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
      var trip_durationpt4=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
      var trip_distance4=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
      var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    var myDatatwo=JSON.stringify({'point':'4','duration':trip_durationpt4,'distance':trip_distance4,"poi_name":this.value.pointfour,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    //this.pt4=data["_body"];
    this.pt4=JSON.parse(data["_body"]); 
    
    // if(this.pt4['ETA']=='')
    // {
    // var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    // var myDatatwo=JSON.stringify({'point':'4','duration':trip_durationpt4,'distance':trip_distance4,"poi_name":this.value.pointfour,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    // this.http.post(linktwo, myDatatwo)
    // .subscribe(data => {
    // // this.pt1=data["_body"];
    //  this.pt5=JSON.parse(data["_body"]); 
    
    //  this.data.st4="ETA"+":"+this.pt5['ETA'];
    //  console.log("ETA Point 4 -2 "+this.pt5['ETA']);
    
    // });
    // //this.data.st2="ETA"+":"+this.pt2['ETA'];
    // }
    // else{
    this.data.st4="ETA"+":"+this.pt4['ETA'];
    
    //console.log("ETA Point 4 "+this.pt4['ETA']);
    // }
    
    
    
    
    
    
    //this.data.st4="ETA"+":"+this.pt4['ETA'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
         var myData = JSON.stringify({"point":'4',"pt_eta":this.pt4['ETA'],'id':this.value.id,"poi_name":this.value.pointfour,'action':'eta_update'});  
         this.http.post(link, myData).subscribe(data => {
         let result=JSON.parse(data["_body"]);
         if(result['status']=='success'){
    
          if(this.value.createtrip=='1')
          {
            var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
            
            var myDatasms=JSON.stringify({
                                          "id":this.value.id
                                        });
          
            this.http.post(linksms, myDatasms).subscribe(data => { 
              this.sms=data["_body"];
          //  console.log(this.sms);
            });
          
          }

          if(this.data.st4!='')
          {
          resolve(true)
          console.log('resolve4_trip');
          }
          else
          {
          reject(Error("Failed!"));
          }
    
           } 
         }, error => {
         console.log("Oooops!");
         });
    console.log(this.pt4);
    
    
    //  var link = 'http://192.168.3.57/snowinouteta_status.php';
    //  var myData = JSON.stringify({"point":'4',"pt4_eta":this.pt4,'id':this.value.id,"poi_name":this.value.pointfour,'action':'eta_update'});  
    //  this.http.post(link, myData).subscribe(data => {
    //  let result=JSON.parse(data["_body"]); 
    //  }, error => {
    //  console.log("Oooops!");
    //  });
    
    
    
    }); 
    
    } else {
      window.alert('Directions request failed due to ' + status);
    }
    });
    
    
    
    
    
    
    });
    
    
    
    
    
    
    }
    
    });
    
    }   
  }).catch(alert);
}

pointfivetrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointfive)
    {
    
    
    
    
    
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointfive,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statusfive=JSON.parse(data["_body"]); 
    
    if(this.statusfive[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
    
    
    
    
    var d1 = new Date(this.statusfive[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st5=this.statusfive[0]['status']+"|"+this.statusfive[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'5',"poi_in":this.statusfive[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointfive,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    resolve(true)
    console.log('resolve5_trip');
    
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else if(this.statusfive[0]['status']=='Running')
    {
    //this.data.st4='Running';
    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
    var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.arr=JSON.parse(data["_body"]); 
      
    
    
    
    
    // for(var j=0;j<this.arr.length;j++)
    // {
    
    // /*if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }*/
    // if(this.value.pointone==this.arr[j]['from_location'])
    // {
    //  this.hello=parseFloat(this.arr[j]['lat']);
    //  this.qw=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointtwo==this.arr[j]['from_location'])
    // {
    
    // this.gh=parseFloat(this.arr[j]['lat']);
    // this.jk=parseFloat(this.arr[j]['long']);
    // var latlngone=[{lat:this.gh,long:this.jk}];
    // }
    // if(this.value.pointthree==this.arr[j]['from_location'] )
    // {
    // this.qz=parseFloat(this.arr[j]['lat']);
    // this.qk=parseFloat(this.arr[j]['long']);
    // var latlngtwo=[{lat:this.qz,long:this.qk}];
    // }
    
    // }
    if(this.statusfour[0]['out_time']!='')
    {
     this.origin=String(this.abc[0]['latlong']);
    // this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    this.dst=this.value.p5_latlong;
    }
    else
    {
    // this.origin= String(this.qz+','+this.qk);
    //  this.dst=String(this.qa+','+this.qt);
    this.origin=this.value.p4_latlong;
    this.dst=this.value.p5_latlong;
    }
    //this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    
    
     
    this.directionsService.route({
    origin: this.origin,
    destination: this.dst,
    travelMode: 'DRIVING'
    }, (response, status) => {
    if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
      var trip_durationpt5=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
      var trip_distance5=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
      var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    var myDatatwo=JSON.stringify({'point':'5','duration':trip_durationpt5,"distance":trip_distance5,"poi_name":this.value.pointfive,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    //this.pt4=data["_body"];
    this.pt5=JSON.parse(data["_body"]); 
    
    // if(this.pt5['ETA']=='')
    // {
    // var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    // var myDatatwo=JSON.stringify({'point':'5','duration':trip_durationpt5,"distance":trip_distance5,"poi_name":this.value.pointfive,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    // this.http.post(linktwo, myDatatwo)
    // .subscribe(data => {
    // // this.pt1=data["_body"];
    //  this.pt5=JSON.parse(data["_body"]); 
    
    //  this.data.st5="ETA"+":"+this.pt5['ETA'];
    //  console.log("ETA Point 4 -2 "+this.pt5['ETA']);
    
    // });
    // //this.data.st2="ETA"+":"+this.pt2['ETA'];
    // }
    // else{
    this.data.st5="ETA"+":"+this.pt5['ETA'];
    
    //console.log("ETA Point 4 "+this.pt4['ETA']);
    //}
    
    
    
    
    
    
    //this.data.st4="ETA"+":"+this.pt4['ETA'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
         var myData = JSON.stringify({"point":'5',"pt_eta":this.pt5['ETA'],'id':this.value.id,"poi_name":this.value.pointfive,'action':'eta_update'});  
         this.http.post(link, myData).subscribe(data => {
         let result=JSON.parse(data["_body"]); 
         if(result['status']=='success'){
  
          if(this.value.createtrip=='1')
          {
            var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
            
            var myDatasms=JSON.stringify({
                                          "id":this.value.id
                                        });
          
            this.http.post(linksms, myDatasms).subscribe(data => { 
              this.sms=data["_body"];
         //   console.log(this.sms);
            });
          
          }

          if(this.data.st5!='')
          {
          resolve(true);
          console.log('resolve5_trip');
          }
          else
          {
          reject(Error("Failed!"));
          }
  
           }
         }, error => {
         console.log("Oooops!");
         });
   // console.log(this.pt4);
    
    
    //  var link = 'http://192.168.3.57/snowinouteta_status.php';
    //  var myData = JSON.stringify({"point":'4',"pt4_eta":this.pt4,'id':this.value.id,"poi_name":this.value.pointfour,'action':'eta_update'});  
    //  this.http.post(link, myData).subscribe(data => {
    //  let result=JSON.parse(data["_body"]); 
    //  }, error => {
    //  console.log("Oooops!");
    //  });
    
    
    
    }); 
    
    } else {
      window.alert('Directions request failed due to ' + status);
    }
    });
    
    
    
    
    
    
    });
    
    
    
    
    
    
    }
    
    });
    
    }
    

  }).catch(alert);
}

pointfive()
{
  return new Promise((resolve, reject) => {
 
  if(this.value.pointfive)
  {
    
  var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
  var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointfive,"departure_time":this.value.start_date,"status":"inout"});
  this.http.post(linktwo, myDatatwo)
  .subscribe(data => {
    this.statusfive=JSON.parse(data["_body"]); 
    
    if(this.statusfive[0]['status']=='inout')
    {
      //this.data.st3="In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
      
      if(this.statusfive[0]['out_time']!='' && this.statusfive[0]['in_time']!='')
      {
      
       this.data.st5= "In:"+""+this.statusfive[0]['in_time']+"|"+"Out:"+""+this.statusfive[0]['out_time'];
   
       }
      
      else if(this.statusfive[0]['in_time']!='')
      {
       this.data.st5="Reached"+" "+"|"+"In:"+""+this.statusfive[0]['in_time'];
      }


      var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';

      var myData = JSON.stringify({'point':'5',"poi_in":this.statusfive[0]['in_time_table'],"poi_out":this.statusfive[0]['out_time_table'],'poi_name':this.value.pointfive,'id':this.value.id,'action':'inout_update'});  
      this.http.post(link, myData).subscribe(data => {
      let result=JSON.parse(data["_body"]); 
      if(this.data.st5!='')
      {
      resolve(true)
      console.log('resolve_5');
      }
      else
      {
      reject(Error("Failed!"));
      }
      }, error => {
      console.log("Oooops!");
      });



     
      
   









    }  
    else
     {
    
    //this.data.st3='Running';
    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
    var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.arr=JSON.parse(data["_body"]); 
      

    
    

  //   for(var j=0;j<this.arr.length;j++)
  //   {

  //  /*if(this.value.pointthree==this.arr[j]['from_location'] )
  //  {
  //  this.qz=parseFloat(this.arr[j]['lat']);
  //  this.qk=parseFloat(this.arr[j]['long']);
  //  var latlngtwo=[{lat:this.qz,long:this.qk}];
  //  }*/
  //  if(this.value.pointone==this.arr[j]['from_location'])
  //  {
  //    this.hello=parseFloat(this.arr[j]['lat']);
  //    this.qw=parseFloat(this.arr[j]['long']);
  //  }
  // if(this.value.pointfour==this.arr[j]['from_location'])
  //  {
  //    this.qa=parseFloat(this.arr[j]['lat']);
  //    this.qt=parseFloat(this.arr[j]['long']);
  //  }
  //  if(this.value.pointtwo==this.arr[j]['from_location'])
  //  {
   
  //  this.gh=parseFloat(this.arr[j]['lat']);
  //  this.jk=parseFloat(this.arr[j]['long']);
  //  var latlngone=[{lat:this.gh,long:this.jk}];
  //  }
  //  if(this.value.pointthree==this.arr[j]['from_location'] )
  //  {
  //  this.qz=parseFloat(this.arr[j]['lat']);
  //  this.qk=parseFloat(this.arr[j]['long']);
  //  var latlngtwo=[{lat:this.qz,long:this.qk}];
  //  }
  //  }
   
   if( this.statusfour[0]['out_time']!='')
   {
     this.origin=String(this.abc[0]['latlong']);
    //  this.dst= String(this.qz+','+this.qk);
    this.dst=this.value.p5_latlong;
   
   }
   else
   {
    //  this.origin=String(this.gh+','+this.jk);
    //  this.dst= String(this.qz+','+this.qk);
    this.origin=this.value.p4_latlong;
    this.dst=this.value.p5_latlong;
   }

   //this.dst= String(this.qz+','+this.qk);
 //  this.origin=String(this.abc[0]['latlong']);
  // this.origin=String(this.gh+','+this.jk);
  // this.dst= String(this.qz+','+this.qk);
   
           
   this.directionsService.route({
    origin: this.origin,
    destination: this.dst,
    travelMode: 'DRIVING'
  }, (response, status) => {
    if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
      var trip_durationpt5=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
      var trip_distance5=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
      console.log(trip_distance5);
      var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
   var myDatatwo=JSON.stringify({'point':'5','duration':trip_durationpt5,'distance':trip_distance5,"poi_name":this.value.pointfive,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
   this.http.post(linktwo, myDatatwo)
   .subscribe(data => {
    // this.pt3=data["_body"];
     this.pt5=JSON.parse(data["_body"]);
    //  if(this.pt5['ETA']=='')
    //  {
    //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    //   var myDatatwo=JSON.stringify({'point':'5','duration':trip_durationpt5,"distance":trip_distance5,"poi_name":this.value.pointfive,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    //   this.http.post(linktwo, myDatatwo)
    //   .subscribe(data => {
    //    // this.pt1=data["_body"];
    //     this.pt5=JSON.parse(data["_body"]); 

    //     this.data.st5="ETA"+":"+this.pt5['ETA'];

    //   });
    //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
    //  }
    //  else{
      this.data.st5="ETA"+":"+this.pt5['ETA'];
    //  }
    // this.data.st3="ETA"+":"+this.pt3['ETA']; 
     var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
     var myData = JSON.stringify({"point":'5',"pt_eta":this.pt5['ETA'],'id':this.value.id,"poi_name":this.value.pointfive,'action':'eta_update'});  
     this.http.post(link, myData).subscribe(data => {
     let result=JSON.parse(data["_body"]); 
     if(result['status']=='success'){

      if(this.value.createtrip=='1')
      {
        var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
        
        var myDatasms=JSON.stringify({
                                      "id":this.value.id
                                    });
      
        this.http.post(linksms, myDatasms).subscribe(data => { 
          this.sms=data["_body"];
     //   console.log(this.sms);
        });
      
      }
      if(this.data.st5!='')
      {
      resolve(true)
      console.log('resolve_5');
      }
      else
      {
      reject(Error("Failed!"));
      }
       }
     }, error => {
     console.log("Oooops!");
     });
  //  

  
     


   }); 

    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

  




  });

  }
    
  });
    }
  }).catch(alert);
}

pointsixtrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointsix)
    {
    
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointsix,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statussix=JSON.parse(data["_body"]); 
    
    if(this.statussix[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
  
    var d1 = new Date(this.statussix[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st6=this.statussix[0]['status']+"|"+this.statussix[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'6',"poi_in":this.statussix[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointsix,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    resolve(true);
    console.log('resolve6_trip');
    
    
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else if(this.statussix[0]['status']=='Running')
    {
    //this.data.st4='Running';
    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
    var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.arr=JSON.parse(data["_body"]); 
      
    
    
    
    
    // for(var j=0;j<this.arr.length;j++)
    // {
    
    // /*if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }*/
    // if(this.value.pointone==this.arr[j]['from_location'])
    // {
    //  this.hello=parseFloat(this.arr[j]['lat']);
    //  this.qw=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointtwo==this.arr[j]['from_location'])
    // {
    
    // this.gh=parseFloat(this.arr[j]['lat']);
    // this.jk=parseFloat(this.arr[j]['long']);
    // var latlngone=[{lat:this.gh,long:this.jk}];
    // }
    // if(this.value.pointthree==this.arr[j]['from_location'] )
    // {
    // this.qz=parseFloat(this.arr[j]['lat']);
    // this.qk=parseFloat(this.arr[j]['long']);
    // var latlngtwo=[{lat:this.qz,long:this.qk}];
    // }
    
    // }
    if(this.statusfive[0]['out_time']!='')
    {
     this.origin=String(this.abc[0]['latlong']);
    // this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    this.dst=this.value.p6_latlong;
    }
    else
    {
    // this.origin= String(this.qz+','+this.qk);
    //  this.dst=String(this.qa+','+this.qt);
    this.origin=this.value.p5_latlong;
    this.dst=this.value.p6_latlong;
    }
    //this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    
    
     
    this.directionsService.route({
    origin: this.origin,
    destination: this.dst,
    travelMode: 'DRIVING'
    }, (response, status) => {
    if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
      var trip_durationpt6=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
      var trip_distance6=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
      
      var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    var myDatatwo=JSON.stringify({'point':'6','duration':trip_durationpt6,'distance':trip_distance6,"poi_name":this.value.pointsix,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    //this.pt4=data["_body"];
    this.pt6=JSON.parse(data["_body"]); 
    
    // if(this.pt6['ETA']=='')
    // {
    // var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    // var myDatatwo=JSON.stringify({'point':'6','duration':trip_durationpt6,'distance':trip_distance6,"poi_name":this.value.pointsix,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    // this.http.post(linktwo, myDatatwo)
    // .subscribe(data => {
    // // this.pt1=data["_body"];
    //  this.pt6=JSON.parse(data["_body"]); 
    
    //  this.data.st6="ETA"+":"+this.pt6['ETA'];
    //  //console.log("ETA Point 4 -2 "+this.pt5['ETA']);
    
    // });
    // //this.data.st2="ETA"+":"+this.pt2['ETA'];
    // }
    // else{
    this.data.st6="ETA"+":"+this.pt6['ETA'];
    
    //console.log("ETA Point 4 "+this.pt4['ETA']);
   // }
    
    
    
    
    
    
    //this.data.st4="ETA"+":"+this.pt4['ETA'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
         var myData = JSON.stringify({"point":'6',"pt_eta":this.pt6['ETA'],'id':this.value.id,"poi_name":this.value.pointsix,'action':'eta_update'});  
         this.http.post(link, myData).subscribe(data => {
         let result=JSON.parse(data["_body"]); 
         if(result['status']=='success'){
  
          if(this.value.createtrip=='1')
          {
            var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
            
            var myDatasms=JSON.stringify({
                                          "id":this.value.id
                                        });
          
            this.http.post(linksms, myDatasms).subscribe(data => { 
              this.sms=data["_body"];
           // console.log(this.sms);
            });
          
          }

          if(this.data.st6!='')
          {
          resolve(true)
          console.log('resolve6_trip');
          }
          else
          {
          reject(Error("Failed!"));
          }
  
           }
         }, error => {
         console.log("Oooops!");
         });

    
    
    
    }); 
    
    } else {
      window.alert('Directions request failed due to ' + status);
    }
    });
    
    
    
    
    
    
    });
    
    
    
    
    
    
    }
    
    });
    
    }
  }).catch(alert);
}

pointsix()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointsix)
    {
      
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointsix,"departure_time":this.value.start_date,"status":"inout"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.statussix=JSON.parse(data["_body"]); 
      
      if(this.statussix[0]['status']=='inout')
      {
        //this.data.st3="In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
        
        if(this.statussix[0]['out_time']!='' && this.statussix[0]['in_time']!='')
        {
        
         this.data.st6= "In:"+""+this.statussix[0]['in_time']+"|"+"Out:"+""+this.statussix[0]['out_time'];
     
         }
        
        else if(this.statussix[0]['in_time']!='' )
        {
         this.data.st6="Reached"+" "+"|"+"In:"+""+this.statussix[0]['in_time'];
  
   
        }
  
  
        var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
  
        var myData = JSON.stringify({'point':'6',"poi_in":this.statussix[0]['in_time_table'],"poi_out":this.statussix[0]['out_time_table'],'poi_name':this.value.pointsix,'id':this.value.id,'action':'inout_update'});  
        this.http.post(link, myData).subscribe(data => {
        let result=JSON.parse(data["_body"]); 
        if(this.data.st6!='')
        {
        resolve(true)
        console.log('resolve_6');
        }
        else
        {
        reject(Error("Failed!"));
        }
        }, error => {
        console.log("Oooops!");
        });

  
  
  
       
        
     
  
  
  
  
  
  
  
  
  
      }  
      else
       {
      
      //this.data.st3='Running';
      var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
      var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
      this.http.post(linktwo, myDatatwo)
      .subscribe(data => {
        this.arr=JSON.parse(data["_body"]); 
        
  
      
      
  
    //   for(var j=0;j<this.arr.length;j++)
    //   {
  
    //  /*if(this.value.pointthree==this.arr[j]['from_location'] )
    //  {
    //  this.qz=parseFloat(this.arr[j]['lat']);
    //  this.qk=parseFloat(this.arr[j]['long']);
    //  var latlngtwo=[{lat:this.qz,long:this.qk}];
    //  }*/
    //  if(this.value.pointone==this.arr[j]['from_location'])
    //  {
    //    this.hello=parseFloat(this.arr[j]['lat']);
    //    this.qw=parseFloat(this.arr[j]['long']);
    //  }
    // if(this.value.pointfour==this.arr[j]['from_location'])
    //  {
    //    this.qa=parseFloat(this.arr[j]['lat']);
    //    this.qt=parseFloat(this.arr[j]['long']);
    //  }
    //  if(this.value.pointtwo==this.arr[j]['from_location'])
    //  {
     
    //  this.gh=parseFloat(this.arr[j]['lat']);
    //  this.jk=parseFloat(this.arr[j]['long']);
    //  var latlngone=[{lat:this.gh,long:this.jk}];
    //  }
    //  if(this.value.pointthree==this.arr[j]['from_location'] )
    //  {
    //  this.qz=parseFloat(this.arr[j]['lat']);
    //  this.qk=parseFloat(this.arr[j]['long']);
    //  var latlngtwo=[{lat:this.qz,long:this.qk}];
    //  }
    //  }
     
     if( this.statusfive[0]['out_time']!='')
     {
       this.origin=String(this.abc[0]['latlong']);
      //  this.dst= String(this.qz+','+this.qk);
     this.dst=this.value.p6_latlong;
     }
     else
     {
      //  this.origin=String(this.gh+','+this.jk);
      //  this.dst= String(this.qz+','+this.qk);
      this.origin=this.value.p5_latlong;
      this.dst=this.value.p6_latlong;
     }
  
     //this.dst= String(this.qz+','+this.qk);
   //  this.origin=String(this.abc[0]['latlong']);
    // this.origin=String(this.gh+','+this.jk);
    // this.dst= String(this.qz+','+this.qk);
     
               
     this.directionsService.route({
      origin: this.origin,
      destination: this.dst,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        var trip_durationpt6=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
        var trip_distance6=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
        var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
     var myDatatwo=JSON.stringify({'point':'6','duration':trip_durationpt6,'distance':trip_distance6,"poi_name":this.value.pointsix,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
     this.http.post(linktwo, myDatatwo)
     .subscribe(data => {
      // this.pt3=data["_body"];
       this.pt6=JSON.parse(data["_body"]);
      //  if(this.pt6['ETA']=='')
      //  {
      //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
      //   var myDatatwo=JSON.stringify({'point':'6','duration':trip_durationpt6,'distance':trip_distance6,"poi_name":this.value.pointsix,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
      //   this.http.post(linktwo, myDatatwo)
      //   .subscribe(data => {
      //    // this.pt1=data["_body"];
      //     this.pt6=JSON.parse(data["_body"]); 
  
      //     this.data.st6="ETA"+":"+this.pt6['ETA'];
  
      //   });
      //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
      //  }
      //  else{
        this.data.st6="ETA"+":"+this.pt6['ETA'];
      //  }
      // this.data.st3="ETA"+":"+this.pt3['ETA']; 
       var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
       var myData = JSON.stringify({"point":'6',"pt_eta":this.pt6['ETA'],'id':this.value.id,"poi_name":this.value.pointsix,'action':'eta_update'});  
       this.http.post(link, myData).subscribe(data => {
       let result=JSON.parse(data["_body"]); 
       if(result['status']=='success'){

        if(this.value.createtrip=='1')
        {
          var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
          
          var myDatasms=JSON.stringify({
                                        "id":this.value.id
                                      });
        
          this.http.post(linksms, myDatasms).subscribe(data => { 
            this.sms=data["_body"];
         // console.log(this.sms);
          });
        
        }

        if(this.data.st6!='')
        {
        resolve(true)
        console.log('resolve_6');
        }
        else
        {
        reject(Error("Failed!"));
        }

         }
       }, error => {
       console.log("Oooops!");
       });
    //  
  
    
       
  
  
     }); 
  
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  
    
  
  
  
  
    });
  
    }
      
    });
      }
  }).catch(alert);
}
pointseventrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointseven)
    {
  
  var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
  var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointseven,"departure_time":this.value.start_date,"status":"in"});
  this.http.post(linktwo, myDatatwo)
  .subscribe(data => {
  this.statusseven=JSON.parse(data["_body"]); 
  
  if(this.statusseven[0]['status']=='Trip Completed')
  {
  // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
  //  this.data.st4=this.statusfour[0];

  var d1 = new Date(this.statusseven[0]['in_time']);
  
  
  var d2 = new Date();
  
  
  this.data.st7=this.statusseven[0]['status']+"|"+this.statusseven[0]['in_time'];
  
  var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
  
  var myData = JSON.stringify({'point':'7',"poi_in":this.statusseven[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointseven,'id':this.value.id,'action':'inout_update'});  
  this.http.post(link, myData).subscribe(data => {
  let result=JSON.parse(data["_body"]); 
  }, error => {
  console.log("Oooops!");
  });
  
  var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
  
  var myDataclose = JSON.stringify({id:this.value.id});  
  this.http.post(linkclose, myDataclose).subscribe(data => {
  let result=JSON.parse(data["_body"]); 
  }, error => {
  console.log("Oooops!");
  });
  
  resolve(true);
  console.log('resolve7_trip');
  
  
  
  
  //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
  }
  else if(this.statusseven[0]['status']=='Running')
  {
  //this.data.st4='Running';
  var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
  var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
  this.http.post(linktwo, myDatatwo)
  .subscribe(data => {
    this.arr=JSON.parse(data["_body"]); 
    
  
  
  
  
  // for(var j=0;j<this.arr.length;j++)
  // {
  
  // /*if(this.value.pointfour==this.arr[j]['from_location'])
  // {
  //  this.qa=parseFloat(this.arr[j]['lat']);
  //  this.qt=parseFloat(this.arr[j]['long']);
  // }*/
  // if(this.value.pointone==this.arr[j]['from_location'])
  // {
  //  this.hello=parseFloat(this.arr[j]['lat']);
  //  this.qw=parseFloat(this.arr[j]['long']);
  // }
  // if(this.value.pointfour==this.arr[j]['from_location'])
  // {
  //  this.qa=parseFloat(this.arr[j]['lat']);
  //  this.qt=parseFloat(this.arr[j]['long']);
  // }
  // if(this.value.pointtwo==this.arr[j]['from_location'])
  // {
  
  // this.gh=parseFloat(this.arr[j]['lat']);
  // this.jk=parseFloat(this.arr[j]['long']);
  // var latlngone=[{lat:this.gh,long:this.jk}];
  // }
  // if(this.value.pointthree==this.arr[j]['from_location'] )
  // {
  // this.qz=parseFloat(this.arr[j]['lat']);
  // this.qk=parseFloat(this.arr[j]['long']);
  // var latlngtwo=[{lat:this.qz,long:this.qk}];
  // }
  
  // }
  if(this.statussix[0]['out_time']!='')
  {
   this.origin=String(this.abc[0]['latlong']);
  // this.origin= String(this.qz+','+this.qk);
  //this.dst=String(this.qa+','+this.qt);
  this.dst=this.value.p7_latlong;
  }
  else
  {
  // this.origin= String(this.qz+','+this.qk);
  //  this.dst=String(this.qa+','+this.qt);
  this.origin=this.value.p6_latlong;
  this.dst=this.value.p7_latlong;
  }
  //this.origin= String(this.qz+','+this.qk);
  //this.dst=String(this.qa+','+this.qt);
  
  
   
  this.directionsService.route({
  origin: this.origin,
  destination: this.dst,
  travelMode: 'DRIVING'
  }, (response, status) => {
  if (status === 'OK') {
    this.directionsDisplay.setDirections(response);
    var trip_durationpt7=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
    var trip_distance7=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
    var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
  var myDatatwo=JSON.stringify({'point':'7','duration':trip_durationpt7,"distance":trip_distance7,"poi_name":this.value.pointseven,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
  this.http.post(linktwo, myDatatwo)
  .subscribe(data => {
  //this.pt4=data["_body"];
  this.pt7=JSON.parse(data["_body"]); 
  
  // if(this.pt7['ETA']=='')
  // {
  // var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
  // var myDatatwo=JSON.stringify({'point':'7','duration':trip_durationpt7,"distance":trip_distance7,"poi_name":this.value.pointseven,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
  // this.http.post(linktwo, myDatatwo)
  // .subscribe(data => {
  // // this.pt1=data["_body"];
  //  this.pt7=JSON.parse(data["_body"]); 
  
  //  this.data.st7="ETA"+":"+this.pt7['ETA'];
  //  //console.log("ETA Point 4 -2 "+this.pt5['ETA']);
  
  // });
  // //this.data.st2="ETA"+":"+this.pt2['ETA'];
  // }
  // else{
  this.data.st7="ETA"+":"+this.pt7['ETA'];
  
  //console.log("ETA Point 4 "+this.pt4['ETA']);
  // }
  
  
  
  
  
  
  //this.data.st4="ETA"+":"+this.pt4['ETA'];
  
  var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
       var myData = JSON.stringify({"point":'7',"pt_eta":this.pt7['ETA'],'id':this.value.id,"poi_name":this.value.pointseven,'action':'eta_update'});  
       this.http.post(link, myData).subscribe(data => {
       let result=JSON.parse(data["_body"]); 
       if(result['status']=='success'){

        if(this.value.createtrip=='1')
        {
          var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
          
          var myDatasms=JSON.stringify({
                                        "id":this.value.id
                                      });
        
          this.http.post(linksms, myDatasms).subscribe(data => { 
            this.sms=data["_body"];
          //console.log(this.sms);
          });
        
        }
        if(this.data.st7!='')
        {
        resolve(true)
        console.log('resolve7_trip');
        }
        else
        {
        reject(Error("Failed!"));
        }



         }
       }, error => {
       console.log("Oooops!");
       });
 // console.log(this.pt4);
  
  
  //  var link = 'http://192.168.3.57/snowinouteta_status.php';
  //  var myData = JSON.stringify({"point":'4',"pt4_eta":this.pt4,'id':this.value.id,"poi_name":this.value.pointfour,'action':'eta_update'});  
  //  this.http.post(link, myData).subscribe(data => {
  //  let result=JSON.parse(data["_body"]); 
  //  }, error => {
  //  console.log("Oooops!");
  //  });
  
  
  
  }); 
  
  } else {
    window.alert('Directions request failed due to ' + status);
  }
  });
  
  
  
  
  
  
  });
  
  
  
  
  
  
  }
  
  });
  
  }
  }).catch(alert);
}

pointseven()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointseven)
            {
              
            var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
            var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointseven,"departure_time":this.value.start_date,"status":"inout"});
            this.http.post(linktwo, myDatatwo)
            .subscribe(data => {
              this.statusseven=JSON.parse(data["_body"]); 
              
              if(this.statusseven[0]['status']=='inout')
              {
                //this.data.st3="In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
                
                if(this.statusseven[0]['out_time']!='' && this.statusseven[0]['in_time']!='')
                {
                
                 this.data.st7= "In:"+""+this.statusseven[0]['in_time']+"|"+"Out:"+""+this.statusseven[0]['out_time'];
             
                 }
                
                else if(this.statusseven[0]['in_time']!='' )
                {
                 this.data.st7="Reached"+" "+"|"+"In:"+""+this.statusseven[0]['in_time'];
          
           
                }
          
          
                var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
          
                var myData = JSON.stringify({'point':'7',"poi_in":this.statusseven[0]['in_time_table'],"poi_out":this.statusseven[0]['out_time_table'],'poi_name':this.value.pointseven,'id':this.value.id,'action':'inout_update'});  
                this.http.post(link, myData).subscribe(data => {
                let result=JSON.parse(data["_body"]); 
                if(this.data.st7!='')
                {
                resolve(true)
                console.log('resolve_7');
                }
                else
                {
                reject(Error("Failed!"));
                }
                }, error => {
                console.log("Oooops!");
                });
          
          
          
               
                
             
          
          
          
          
          
          
          
          
          
              }  
              else
               {
              
              //this.data.st3='Running';
              var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
              var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
              this.http.post(linktwo, myDatatwo)
              .subscribe(data => {
                this.arr=JSON.parse(data["_body"]); 
                
          
              
              
          
            //   for(var j=0;j<this.arr.length;j++)
            //   {
          
            //  /*if(this.value.pointthree==this.arr[j]['from_location'] )
            //  {
            //  this.qz=parseFloat(this.arr[j]['lat']);
            //  this.qk=parseFloat(this.arr[j]['long']);
            //  var latlngtwo=[{lat:this.qz,long:this.qk}];
            //  }*/
            //  if(this.value.pointone==this.arr[j]['from_location'])
            //  {
            //    this.hello=parseFloat(this.arr[j]['lat']);
            //    this.qw=parseFloat(this.arr[j]['long']);
            //  }
            // if(this.value.pointfour==this.arr[j]['from_location'])
            //  {
            //    this.qa=parseFloat(this.arr[j]['lat']);
            //    this.qt=parseFloat(this.arr[j]['long']);
            //  }
            //  if(this.value.pointtwo==this.arr[j]['from_location'])
            //  {
             
            //  this.gh=parseFloat(this.arr[j]['lat']);
            //  this.jk=parseFloat(this.arr[j]['long']);
            //  var latlngone=[{lat:this.gh,long:this.jk}];
            //  }
            //  if(this.value.pointthree==this.arr[j]['from_location'] )
            //  {
            //  this.qz=parseFloat(this.arr[j]['lat']);
            //  this.qk=parseFloat(this.arr[j]['long']);
            //  var latlngtwo=[{lat:this.qz,long:this.qk}];
            //  }
            //  }
             
             if( this.statussix[0]['out_time']!='')
             {
               this.origin=String(this.abc[0]['latlong']);
              //  this.dst= String(this.qz+','+this.qk);
             this.dst=this.value.p7_latlong;
             }
             else
             {
              //  this.origin=String(this.gh+','+this.jk);
              //  this.dst= String(this.qz+','+this.qk);
              this.origin=this.value.p6_latlong;
              this.dst=this.value.p7_latlong;
             }
          
             //this.dst= String(this.qz+','+this.qk);
           //  this.origin=String(this.abc[0]['latlong']);
            // this.origin=String(this.gh+','+this.jk);
            // this.dst= String(this.qz+','+this.qk);
             
                         
             this.directionsService.route({
              origin: this.origin,
              destination: this.dst,
              travelMode: 'DRIVING'
            }, (response, status) => {
              if (status === 'OK') {
                this.directionsDisplay.setDirections(response);
                var trip_durationpt7=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
                var trip_distance7=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
                var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
             var myDatatwo=JSON.stringify({'point':'7','duration':trip_durationpt7,"distance":trip_distance7,"poi_name":this.value.pointseven,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
             this.http.post(linktwo, myDatatwo)
             .subscribe(data => {
              // this.pt3=data["_body"];
               this.pt7=JSON.parse(data["_body"]);
              //  if(this.pt7['ETA']=='')
              //  {
              //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
              //   var myDatatwo=JSON.stringify({'point':'7','duration':trip_durationpt7,"distance":trip_distance7,"poi_name":this.value.pointseven,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
              //   this.http.post(linktwo, myDatatwo)
              //   .subscribe(data => {
              //    // this.pt1=data["_body"];
              //     this.pt7=JSON.parse(data["_body"]); 
          
              //     this.data.st7="ETA"+":"+this.pt7['ETA'];
          
              //   });
              //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
              //  }
              //  else{
                this.data.st7="ETA"+":"+this.pt7['ETA'];
              //  }
              // this.data.st3="ETA"+":"+this.pt3['ETA']; 
               var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
               var myData = JSON.stringify({"point":'7',"pt_eta":this.pt7['ETA'],'id':this.value.id,"poi_name":this.value.pointseven,'action':'eta_update'});  
               this.http.post(link, myData).subscribe(data => {
               let result=JSON.parse(data["_body"]); 
               if(result['status']=='success'){

                if(this.value.createtrip=='1')
                {
                  var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
                  
                  var myDatasms=JSON.stringify({
                                                "id":this.value.id
                                              });
                
                  this.http.post(linksms, myDatasms).subscribe(data => { 
                    this.sms=data["_body"];
                 // console.log(this.sms);
                  });
                
                }

                if(this.data.st7!='')
                {
                resolve(true)
                console.log('resolve_7');
                }
                else
                {
                reject(Error("Failed!"));
                }
      
                 }
               }, error => {
               console.log("Oooops!");
               });
            //  
          
            
               
          
          
             }); 
          
              } else {
                window.alert('Directions request failed due to ' + status);
              }
            });
          
            
          
          
          
          
            });
          
            }
              
            });
              }
  }).catch(alert);
}

pointeighttrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointeight)
    {
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointeight,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statuseight=JSON.parse(data["_body"]); 
    
    if(this.statuseight[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
  
    var d1 = new Date(this.statuseight[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st8=this.statuseight[0]['status']+"|"+this.statuseight[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'8',"poi_in":this.statuseight[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointeight,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    resolve(true);
    console.log('resolve8_trip');
    
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else if(this.statuseight[0]['status']=='Running')
    {
    //this.data.st4='Running';
    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
    var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.arr=JSON.parse(data["_body"]); 
      
    
  
    if(this.statuseight[0]['out_time']!='')
    {
     this.origin=String(this.abc[0]['latlong']);
    // this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    this.dst=this.value.p8_latlong;
    }
    else
    {
    // this.origin= String(this.qz+','+this.qk);
    //  this.dst=String(this.qa+','+this.qt);
    this.origin=this.value.p7_latlong;
    this.dst=this.value.p8_latlong;
    }
    //this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    
    
     
    this.directionsService.route({
    origin: this.origin,
    destination: this.dst,
    travelMode: 'DRIVING'
    }, (response, status) => {
    if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
      var trip_durationpt8=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
      var trip_distance8=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
      var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    var myDatatwo=JSON.stringify({'point':'8','duration':trip_durationpt8,"distance":trip_distance8,"poi_name":this.value.pointeight,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    //this.pt4=data["_body"];
    this.pt8=JSON.parse(data["_body"]); 
    
    // if(this.pt8['ETA']=='')
    // {
    // var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    // var myDatatwo=JSON.stringify({'point':'8','duration':trip_durationpt8,"distance":trip_distance8,"poi_name":this.value.pointeight,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    // this.http.post(linktwo, myDatatwo)
    // .subscribe(data => {
    // // this.pt1=data["_body"];
    //  this.pt8=JSON.parse(data["_body"]); 
    
    //  this.data.st8="ETA"+":"+this.pt8['ETA'];
    //  //console.log("ETA Point 4 -2 "+this.pt5['ETA']);
    
    // });
    // //this.data.st2="ETA"+":"+this.pt2['ETA'];
    // }
    // else{
    this.data.st8="ETA"+":"+this.pt8['ETA'];
    
    //console.log("ETA Point 4 "+this.pt4['ETA']);
    // }
    
    
    
    
    
    
    //this.data.st4="ETA"+":"+this.pt4['ETA'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
         var myData = JSON.stringify({"point":'8',"pt_eta":this.pt8['ETA'],'id':this.value.id,"poi_name":this.value.pointeight,'action':'eta_update'});  
         this.http.post(link, myData).subscribe(data => {
         let result=JSON.parse(data["_body"]); 
         if(result['status']=='success'){
  
          if(this.value.createtrip=='1')
          {
            var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
            
            var myDatasms=JSON.stringify({
                                          "id":this.value.id
                                        });
          
            this.http.post(linksms, myDatasms).subscribe(data => { 
              this.sms=data["_body"];
            //console.log(this.sms);
            });
          
          }
          if(this.data.st8!='')
          {
          resolve(true)
          console.log('resolve8_trip');
          }
          else
          {
          reject(Error("Failed!"));
          }
           }
         }, error => {
         console.log("Oooops!");
         });

    
    
    
    }); 
    
    } else {
      window.alert('Directions request failed due to ' + status);
    }
    });
    
    
    
    
    
    
    });
    
    
    
    
    
    
    }
    
    });
    
    }

  }).catch(alert);
}

pointeight()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointeight)
    {
      
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointeight,"departure_time":this.value.start_date,"status":"inout"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.statuseight=JSON.parse(data["_body"]); 
      
      if(this.statuseight[0]['status']=='inout')
      {
        //this.data.st3="In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
        
        if(this.statuseight[0]['out_time']!=''  && this.statuseight[0]['in_time']!='')
        {
        
         this.data.st8= "In:"+""+this.statuseight[0]['in_time']+"|"+"Out:"+""+this.statuseight[0]['out_time'];
     
         }
        
        else if(this.statuseight[0]['in_time']!='' )
        {
         this.data.st8="Reached"+" "+"|"+"In:"+""+this.statuseight[0]['in_time'];
  
   
        }
  
  
        var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
  
        var myData = JSON.stringify({'point':'8',"poi_in":this.statuseight[0]['in_time_table'],"poi_out":this.statuseight[0]['out_time_table'],'poi_name':this.value.pointeight,'id':this.value.id,'action':'inout_update'});  
        this.http.post(link, myData).subscribe(data => {
        let result=JSON.parse(data["_body"]); 
        if(this.data.st8!='')
        {
        resolve(true)
        console.log('resolve_8');
        }
        else
        {
        reject(Error("Failed!"));
        }
        }, error => {
        console.log("Oooops!");
        });
  
  
  
       
        
     
  
  
  
  
  
  
  
  
  
      }  
      else
       {
      
      //this.data.st3='Running';
      var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
      var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
      this.http.post(linktwo, myDatatwo)
      .subscribe(data => {
        this.arr=JSON.parse(data["_body"]); 
        
  
      
      
  
    //   for(var j=0;j<this.arr.length;j++)
    //   {
  
    //  /*if(this.value.pointthree==this.arr[j]['from_location'] )
    //  {
    //  this.qz=parseFloat(this.arr[j]['lat']);
    //  this.qk=parseFloat(this.arr[j]['long']);
    //  var latlngtwo=[{lat:this.qz,long:this.qk}];
    //  }*/
    //  if(this.value.pointone==this.arr[j]['from_location'])
    //  {
    //    this.hello=parseFloat(this.arr[j]['lat']);
    //    this.qw=parseFloat(this.arr[j]['long']);
    //  }
    // if(this.value.pointfour==this.arr[j]['from_location'])
    //  {
    //    this.qa=parseFloat(this.arr[j]['lat']);
    //    this.qt=parseFloat(this.arr[j]['long']);
    //  }
    //  if(this.value.pointtwo==this.arr[j]['from_location'])
    //  {
     
    //  this.gh=parseFloat(this.arr[j]['lat']);
    //  this.jk=parseFloat(this.arr[j]['long']);
    //  var latlngone=[{lat:this.gh,long:this.jk}];
    //  }
    //  if(this.value.pointthree==this.arr[j]['from_location'] )
    //  {
    //  this.qz=parseFloat(this.arr[j]['lat']);
    //  this.qk=parseFloat(this.arr[j]['long']);
    //  var latlngtwo=[{lat:this.qz,long:this.qk}];
    //  }
    //  }
     
     if( this.statusseven[0]['out_time']!='')
     {
       this.origin=String(this.abc[0]['latlong']);
      //  this.dst= String(this.qz+','+this.qk);
     this.dst=this.value.p8_latlong;
     }
     else
     {
      //  this.origin=String(this.gh+','+this.jk);
      //  this.dst= String(this.qz+','+this.qk);
      this.origin=this.value.p7_latlong;
      this.dst=this.value.p8_latlong;
     }
  
     //this.dst= String(this.qz+','+this.qk);
   //  this.origin=String(this.abc[0]['latlong']);
    // this.origin=String(this.gh+','+this.jk);
    // this.dst= String(this.qz+','+this.qk);
     
                   
     this.directionsService.route({
      origin: this.origin,
      destination: this.dst,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {

        this.delay(1000).then(any=>{
          console.log('eta8');
      


        this.directionsDisplay.setDirections(response);
        var trip_durationpt8=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
        var trip_distance8=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
        var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
     var myDatatwo=JSON.stringify({'point':'8','duration':trip_durationpt8,"distance":trip_distance8,"poi_name":this.value.pointeight,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
     this.http.post(linktwo, myDatatwo)
     .subscribe(data => {
      // this.pt3=data["_body"];
       this.pt8=JSON.parse(data["_body"]);
      //  if(this.pt8['ETA']=='')
      //  {
      //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
      //   var myDatatwo=JSON.stringify({'point':'8','duration':trip_durationpt8,"distance":trip_distance8,"poi_name":this.value.pointeight,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
      //   this.http.post(linktwo, myDatatwo)
      //   .subscribe(data => {
      //    // this.pt1=data["_body"];
      //     this.pt8=JSON.parse(data["_body"]); 
  
      //     this.data.st8="ETA"+":"+this.pt8['ETA'];
  
      //   });
      //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
      //  }
      //  else{
        this.data.st8="ETA"+":"+this.pt8['ETA'];
      //  }
      // this.data.st3="ETA"+":"+this.pt3['ETA']; 
       var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
       var myData = JSON.stringify({"point":'8',"pt_eta":this.pt8['ETA'],'id':this.value.id,"poi_name":this.value.pointeight,'action':'eta_update'});  
       this.http.post(link, myData).subscribe(data => {
       let result=JSON.parse(data["_body"]); 
       if(result['status']=='success'){

        if(this.value.createtrip=='1')
        {
          var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
          
          var myDatasms=JSON.stringify({
                                        "id":this.value.id
                                      });
        
          this.http.post(linksms, myDatasms).subscribe(data => { 
            this.sms=data["_body"];
        //  console.log(this.sms);
          });
        
        }

        if(this.data.st8!='')
        {
        resolve(true)
        console.log('resolve_8');
        }
        else
        {
        reject(Error("Failed!"));
        }

         }
       }, error => {
       console.log("Oooops!");
       });
    //  
  
    
       
  
  
     }); 
  
    });} else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  
    
  
  
  
  
    });
  
    }
      
    });
      }
  }).catch(alert);
}

pointninetrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointnine)
    {
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointnine,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statusnine=JSON.parse(data["_body"]); 
    
    if(this.statusnine[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
  
    var d1 = new Date(this.statusnine[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st9=this.statusnine[0]['status']+"|"+this.statusnine[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'9',"poi_in":this.statusnine[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointnine,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    resolve(true);
    console.log('resolve9_trip');
    
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else if(this.statusnine[0]['status']=='Running')
    {
    //this.data.st4='Running';
    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
    var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.arr=JSON.parse(data["_body"]); 
      
    
    
    
    
    // for(var j=0;j<this.arr.length;j++)
    // {
    
    // /*if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }*/
    // if(this.value.pointone==this.arr[j]['from_location'])
    // {
    //  this.hello=parseFloat(this.arr[j]['lat']);
    //  this.qw=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointtwo==this.arr[j]['from_location'])
    // {
    
    // this.gh=parseFloat(this.arr[j]['lat']);
    // this.jk=parseFloat(this.arr[j]['long']);
    // var latlngone=[{lat:this.gh,long:this.jk}];
    // }
    // if(this.value.pointthree==this.arr[j]['from_location'] )
    // {
    // this.qz=parseFloat(this.arr[j]['lat']);
    // this.qk=parseFloat(this.arr[j]['long']);
    // var latlngtwo=[{lat:this.qz,long:this.qk}];
    // }
    
    // }
    if(this.statuseight[0]['out_time']!='')
    {
     this.origin=String(this.abc[0]['latlong']);
    // this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    this.dst=this.value.p9_latlong;
    }
    else
    {
    // this.origin= String(this.qz+','+this.qk);
    //  this.dst=String(this.qa+','+this.qt);
    this.origin=this.value.p8_latlong;
    this.dst=this.value.p9_latlong;
    }
    //this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    
    
     
    this.directionsService.route({
    origin: this.origin,
    destination: this.dst,
    travelMode: 'DRIVING'
    }, (response, status) => {
    if (status === 'OK') {
  
  
      this.delay(1000).then(any=>{
        console.log('eta9');
      
  
  
  
      this.directionsDisplay.setDirections(response);
      var trip_durationpt9=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
      var trip_distance9=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
      var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    var myDatatwo=JSON.stringify({'point':'9','duration':trip_durationpt9,"distance":trip_distance9,"poi_name":this.value.pointnine,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    //this.pt4=data["_body"];
    this.pt9=JSON.parse(data["_body"]); 
    
    // if(this.pt9['ETA']=='')
    // {
    // var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    // var myDatatwo=JSON.stringify({'point':'9','duration':trip_durationpt9,"distance":trip_distance9,"poi_name":this.value.pointnine,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    // this.http.post(linktwo, myDatatwo)
    // .subscribe(data => {
    // // this.pt1=data["_body"];
    //  this.pt9=JSON.parse(data["_body"]); 
    
    //  this.data.st9="ETA"+":"+this.pt9['ETA'];
    //  //console.log("ETA Point 4 -2 "+this.pt5['ETA']);
    
    // });
    // //this.data.st2="ETA"+":"+this.pt2['ETA'];
    // }
    // else{
    this.data.st9="ETA"+":"+this.pt9['ETA'];
    
    //console.log("ETA Point 4 "+this.pt4['ETA']);
    // }
    
    
    
    
    
    
    //this.data.st4="ETA"+":"+this.pt4['ETA'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
         var myData = JSON.stringify({"point":'9',"pt_eta":this.pt9['ETA'],'id':this.value.id,"poi_name":this.value.pointnine,'action':'eta_update'});  
         this.http.post(link, myData).subscribe(data => {
         let result=JSON.parse(data["_body"]);
         if(result['status']=='success'){
  
          if(this.value.createtrip=='1')
          {
            var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
            
            var myDatasms=JSON.stringify({
                                          "id":this.value.id
                                        });
          
            this.http.post(linksms, myDatasms).subscribe(data => { 
              this.sms=data["_body"];
         //  console.log(this.sms);
            });
          
          }
          if(this.data.st9!='')
          {
          resolve(true)
          console.log('resolve9_trip');
          }
          else
          {
          reject(Error("Failed!"));
          }
           } 
         }, error => {
         console.log("Oooops!");
         });
   // console.log(this.pt4);
    
    
    //  var link = 'http://192.168.3.57/snowinouteta_status.php';
    //  var myData = JSON.stringify({"point":'4',"pt4_eta":this.pt4,'id':this.value.id,"poi_name":this.value.pointfour,'action':'eta_update'});  
    //  this.http.post(link, myData).subscribe(data => {
    //  let result=JSON.parse(data["_body"]); 
    //  }, error => {
    //  console.log("Oooops!");
    //  });
    
    
    
    }); 
    
    
    });  } else {
      window.alert('Directions request failed due to ' + status);
    }
    });
    
    
    
    
    
    
    });
    
    
    
    
    
    
    }
    
    });
    
    }

  }).catch(alert);
}

pointnine()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointnine)
    {
      
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointnine,"departure_time":this.value.start_date,"status":"inout"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.statusnine=JSON.parse(data["_body"]); 
      
      if(this.statusnine[0]['status']=='inout')
      {
        //this.data.st3="In:"+""+this.statusthree[0]['in_time']+"|"+"Out:"+""+this.statusthree[0]['out_time'];
        
        if(this.statusnine[0]['out_time']!=''  && this.statusnine[0]['in_time']!='')
        {
        
         this.data.st9= "In:"+""+this.statusnine[0]['in_time']+"|"+"Out:"+""+this.statusnine[0]['out_time'];
     
         }
        
        else if(this.statusnine[0]['in_time']!='' )
        {
         this.data.st9="Reached"+" "+"|"+"In:"+""+this.statusnine[0]['in_time'];
        }
  
  
        var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
  
        var myData = JSON.stringify({'point':'9',"poi_in":this.statusnine[0]['in_time_table'],"poi_out":this.statusnine[0]['out_time_table'],'poi_name':this.value.pointnine,'id':this.value.id,'action':'inout_update'});  
        this.http.post(link, myData).subscribe(data => {
        let result=JSON.parse(data["_body"]); 
        if(this.data.st9!='')
        {
        resolve(true)
        console.log('resolve_9');
        }
        else
        {
        reject(Error("Failed!"));
        }
        }, error => {
        console.log("Oooops!");
        });
  
  
  
      }  
      else
       {
      
      //this.data.st3='Running';
      var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
      var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
      this.http.post(linktwo, myDatatwo)
      .subscribe(data => {
        this.arr=JSON.parse(data["_body"]); 
        
  
      
      
  

     
     if( this.statuseight[0]['out_time']!='')
     {
       this.origin=String(this.abc[0]['latlong']);
      //  this.dst= String(this.qz+','+this.qk);
     this.dst=this.value.p9_latlong;
     }
     else
     {
      //  this.origin=String(this.gh+','+this.jk);
      //  this.dst= String(this.qz+','+this.qk);
      this.origin=this.value.p8_latlong;
      this.dst=this.value.p9_latlong;
     }
  
     //this.dst= String(this.qz+','+this.qk);
   //  this.origin=String(this.abc[0]['latlong']);
    // this.origin=String(this.gh+','+this.jk);
    // this.dst= String(this.qz+','+this.qk);
     
                     
     this.directionsService.route({
      origin: this.origin,
      destination: this.dst,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        var trip_durationpt9=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
        var trip_distance9=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
        var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
     var myDatatwo=JSON.stringify({'point':'9','duration':trip_durationpt9,"distance":trip_distance9,"poi_name":this.value.pointnine,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
     this.http.post(linktwo, myDatatwo)
     .subscribe(data => {
      // this.pt3=data["_body"];
       this.pt9=JSON.parse(data["_body"]);
      //  if(this.pt9['ETA']=='')
      //  {
      //   var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
      //   var myDatatwo=JSON.stringify({'point':'9','duration':trip_durationpt9,"poi_name":this.value.pointnine,"vehicle_id":this.vehicle_id,"id":this.value.id});
      //   this.http.post(linktwo, myDatatwo)
      //   .subscribe(data => {
      //    // this.pt1=data["_body"];
      //     this.pt9=JSON.parse(data["_body"]); 
  
      //     this.data.st9="ETA"+":"+this.pt9['ETA'];
  
      //   });
      //  //this.data.st2="ETA"+":"+this.pt2['ETA'];
      //  }
    //   else{
        this.data.st9="ETA"+":"+this.pt9['ETA'];
     //  }
      // this.data.st3="ETA"+":"+this.pt3['ETA']; 
       var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
       var myData = JSON.stringify({"point":'9',"pt_eta":this.pt9['ETA'],'id':this.value.id,"poi_name":this.value.pointnine,'action':'eta_update'});  
       this.http.post(link, myData).subscribe(data => {
       let result=JSON.parse(data["_body"]); 
       if(result['status']=='success'){

        if(this.value.createtrip=='1')
        {
          var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
          
          var myDatasms=JSON.stringify({
                                        "id":this.value.id
                                      });
        
          this.http.post(linksms, myDatasms).subscribe(data => { 
            this.sms=data["_body"];
       //   console.log(this.sms);
          });
        
        }
        if(this.data.st9!='')
        {
        resolve(true)
        console.log('resolve_9');
        }
        else
        {
        reject(Error("Failed!"));
        }
         }
       }, error => {
       console.log("Oooops!");
       });
    //  
  
    
       
  
  
     }); 
  
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  
    
  
  
  
  
    });
  
    }
      
    });
      }
  }).catch(alert);
}

pointtentrip()
{
  return new Promise((resolve, reject) => {
    if(this.value.pointten)
    {
 
    var linktwo='http://gtrac.in/snowmanappmacv1/vehicle_inoutsnowman.php';
    var myDatatwo=JSON.stringify({"vehicle_id":this.vehicle_id,"poi_name":this.value.pointten,"departure_time":this.value.start_date,"status":"in"});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    this.statusten=JSON.parse(data["_body"]); 
    
    if(this.statusten[0]['status']=='Trip Completed')
    {
    // this.data.st4='Reached'+" "+"|"+" "+" "+this.statusone[0]['out_time'];
    //  this.data.st4=this.statusfour[0];
  
    var d1 = new Date(this.statusten[0]['in_time']);
    
    
    var d2 = new Date();
    
    
    this.data.st10=this.statusten[0]['status']+"|"+this.statusten[0]['in_time'];
    
    var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
    
    var myData = JSON.stringify({'point':'10',"poi_in":this.statusten[0]['in_time_table'],"poi_out":"0000-00-00 00:00:00",'poi_name':this.value.pointten,'id':this.value.id,'action':'inout_update'});  
    this.http.post(link, myData).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    
    var linkclose = 'http://gtrac.in/snowmanappmacv1/close_trip.php';
    
    var myDataclose = JSON.stringify({id:this.value.id});  
    this.http.post(linkclose, myDataclose).subscribe(data => {
    let result=JSON.parse(data["_body"]); 
    }, error => {
    console.log("Oooops!");
    });
    resolve(true);
    console.log('resolve_10');
    
    
    
    
    
    //  this.data.st4="Status:"+" "+'In'+" "+"|"+" "+"Time:"+" "+this.statusfour[0]['in_time'];
    }
    else if(this.statusten[0]['status']=='Running')
    {
    //this.data.st4='Running';
    var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecific.php';
    var myDatatwo=JSON.stringify({uname:'snowman_mccain', password: '87654312' });
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
      this.arr=JSON.parse(data["_body"]); 
      
    
    
    
    
    // for(var j=0;j<this.arr.length;j++)
    // {
    
    // /*if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }*/
    // if(this.value.pointone==this.arr[j]['from_location'])
    // {
    //  this.hello=parseFloat(this.arr[j]['lat']);
    //  this.qw=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointfour==this.arr[j]['from_location'])
    // {
    //  this.qa=parseFloat(this.arr[j]['lat']);
    //  this.qt=parseFloat(this.arr[j]['long']);
    // }
    // if(this.value.pointtwo==this.arr[j]['from_location'])
    // {
    
    // this.gh=parseFloat(this.arr[j]['lat']);
    // this.jk=parseFloat(this.arr[j]['long']);
    // var latlngone=[{lat:this.gh,long:this.jk}];
    // }
    // if(this.value.pointthree==this.arr[j]['from_location'] )
    // {
    // this.qz=parseFloat(this.arr[j]['lat']);
    // this.qk=parseFloat(this.arr[j]['long']);
    // var latlngtwo=[{lat:this.qz,long:this.qk}];
    // }
    
    // }
    if(this.statusnine[0]['out_time']!='')
    {
     this.origin=String(this.abc[0]['latlong']);
    // this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    this.dst=this.value.p10_latlong;
    }
    else
    {
    // this.origin= String(this.qz+','+this.qk);
    //  this.dst=String(this.qa+','+this.qt);
    this.origin=this.value.p9_latlong;
    this.dst=this.value.p10_latlong;
    }
    //this.origin= String(this.qz+','+this.qk);
    //this.dst=String(this.qa+','+this.qt);
    
    
     
    this.directionsService.route({
    origin: this.origin,
    destination: this.dst,
    travelMode: 'DRIVING'
    }, (response, status) => {
    if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
      var trip_durationpt10=this.directionsDisplay.directions.routes[0].legs[0].duration.text;
      var trip_distance10=this.directionsDisplay.directions.routes[0].legs[0].distance.text;
      var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    var myDatatwo=JSON.stringify({'point':'10','duration':trip_durationpt10,"distance":trip_distance10,"poi_name":this.value.pointten,"vehicle_id":this.vehicle_id,"id":this.value.id,"smsstatus":this.value.createtrip});
    this.http.post(linktwo, myDatatwo)
    .subscribe(data => {
    //this.pt4=data["_body"];
    this.pt10=JSON.parse(data["_body"]); 
    
    // if(this.pt10['ETA']=='')
    // {
    // var linktwo='http://gtrac.in/snowmanappmacv1/direction_api_responsev3.php';
    // var myDatatwo=JSON.stringify({'point':'10','duration':trip_durationpt10,"poi_name":this.value.pointten,"vehicle_id":this.vehicle_id,"id":this.value.id});
    // this.http.post(linktwo, myDatatwo)
    // .subscribe(data => {
    // // this.pt1=data["_body"];
    //  this.pt10=JSON.parse(data["_body"]); 
    
    //  this.data.st10="ETA"+":"+this.pt10['ETA'];
    //  //console.log("ETA Point 4 -2 "+this.pt5['ETA']);
    
    // });
    // //this.data.st2="ETA"+":"+this.pt2['ETA'];
    // }
    //else{
    this.data.st10="ETA"+":"+this.pt10['ETA'];
    
    //console.log("ETA Point 4 "+this.pt4['ETA']);
    //}
    
    
    
    
    
    
    //this.data.st4="ETA"+":"+this.pt4['ETA'];
    
         var link = 'http://gtrac.in/snowmanappmacv1/snowinouteta_status.php';
         var myData = JSON.stringify({"point":'10',"pt_eta":this.pt10['ETA'],'id':this.value.id,"poi_name":this.value.pointten,'action':'eta_update'});  
         this.http.post(link, myData).subscribe(data => {
         let result=JSON.parse(data["_body"]); 
         if(result['status']=='success'){
  
          if(this.value.createtrip=='1')
          {
            var linksms='http://gtrac.in/snowmanappmacv1/etaupdateandsendsms.php';
            
            var myDatasms=JSON.stringify({
                                          "id":this.value.id
                                        });
          
            this.http.post(linksms, myDatasms).subscribe(data => { 
              this.sms=data["_body"];
            console.log(this.sms);
            });
          
          }
  
           }
         }, error => {
         console.log("Oooops!");
         });
   // console.log(this.pt4);
    
    
    //  var link = 'http://192.168.3.57/snowinouteta_status.php';
    //  var myData = JSON.stringify({"point":'4',"pt4_eta":this.pt4,'id':this.value.id,"poi_name":this.value.pointfour,'action':'eta_update'});  
    //  this.http.post(link, myData).subscribe(data => {
    //  let result=JSON.parse(data["_body"]); 
    //  }, error => {
    //  console.log("Oooops!");
    //  });
    
    
    
    }); 
    
    } else {
      window.alert('Directions request failed due to ' + status);
    }
    resolve(true);
    console.log('resolve10_trip');
    });
    
    
    
    
    
    
    });
    
    
    
    
    
    
    }
    
    });
    
    }
  
  }).catch(alert);
}
async serialpoint2()
{
await this.pointone(),
await this.pointtwotrip()
}

async serialpoint3()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthreetrip()
}

async serialpoint4()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthree(),
await this.pointfourtrip()
}
async serialpoint5()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthree(),
await this.pointfour(),
await this.pointfivetrip()
}

async serialpoint6()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthree(),
await this.pointfour(),
await this.pointfive(),
await this.pointsixtrip()
}

async serialpoint7()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthree(),
await this.pointfour(),
await this.pointfive(),
await this.pointsix(),
await this.pointseventrip()
}

async serialpoint8()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthree(),
await this.pointfour(),
await this.pointfive(),
await this.pointsix(),
await this.pointseven(),
await this.pointeighttrip()
}

async serialpoint9()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthree(),
await this.pointfour(),
await this.pointfive(),
await this.pointsix(),
await this.pointseven(),
await this.pointeight(),
await this.pointninetrip()
}

async serialpoint10()
{
await this.pointone(),
await this.pointtwo(),
await this.pointthree(),
await this.pointfour(),
await this.pointfive(),
await this.pointsix(),
await this.pointseven(),
await this.pointeight(),
await this.pointnine(),
await this.pointtentrip()
}







doRefresh(refresher) {
  this.data.tripdatetime=this.value.start_date;
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

  var link='http://trackingexperts.com/appv2/dipatchclient/searchVehiclemac.php';
  var myData=JSON.stringify({uname:this.username, password: this.pass, vehicle_id:this.vehicle_id});
  this.http.post(link, myData)
  .subscribe(data => {
  this.abc=JSON.parse(data["_body"]);  
  this.data.current=String(this.abc[0]['Location']);
 
  
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

  this.serialpoint2();

}else if(this.abcd['poi_no']==3){
  this.serialpoint3();
//------------
}
 else if (this.abcd['poi_no']==4){
console.log('poi=4');
this.serialpoint4();
}







//done
else if (this.abcd['poi_no']==5){
this.serialpoint5();
}

//done
else if (this.abcd['poi_no']==6){
  this.serialpoint6();

}
//done
else if (this.abcd['poi_no']==7){
console.log('In 7');
this.serialpoint7();
}


//done
else if (this.abcd['poi_no']==8){
  this.serialpoint8();
}


//done
else if (this.abcd['poi_no']==9){
this.serialpoint9();
}

else if (this.abcd['poi_no']==10){
  this.serialpoint10();
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
