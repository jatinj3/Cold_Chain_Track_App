import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {Http}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

import { SuperTabsModule, SuperTabsComponent,SuperTabsController } from 'ionic2-super-tabs';
import { ActivetripnewPage } from '../activetripnew/activetripnew';
import { ActivetripnewPageModule } from '../activetripnew/activetripnew.module';
import { ActivetripPage } from '../activetrip/activetrip';
//import * as moment from 'moment';
//import { add } from 'timelite/time';

/*import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Marker,
  BaseArrayClass
} from '@ionic-native/google-maps';*/
declare var google;

/**
 * Generated class for the GmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gm',
  templateUrl: 'gm.html',
})
export class GmPage {

  //@ViewChild(SuperTabsComponent) superTabs: SuperTabsComponent;
  @ViewChild(SuperTabsComponent) superTabs: SuperTabsComponent;
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
 now:any;
  arr: any;
  hello: any;
  qw: any;
  qa: any;
  qt: any;
  origin: any;
  dst: any;
  value: any;
  jk: number;
  gh: number;
  qz: number;
  qk: number;
  ports: any;
  vehicle_id: any;
  abc: any;
  current: string;
  username: string;
  pass: string;
  gp: string;
  userid: string;
  arrnew: any;
  constructor( private tabsCtrl: SuperTabsController,private authProvider: AuthProvider,public navParams: NavParams,public navCtrl: NavController,public loadingController: LoadingController,private http: Http) {

  }

  ionViewDidLoad(){
  
   if (this.authProvider.isUser()) {
    this.username = this.authProvider.currentUser.name;
    this.pass=this.authProvider.currentUser.pass;
    this.gp=this.authProvider.currentUser.groupid;
    this.userid=this.authProvider.currentUser.userid;
  }
    this.initMap();
    
    this.calculateAndDisplayRoute(); 
  }

 ionViewDidEnter() {
  this.tabsCtrl.enableTabSwipe('activeTab',false);
  }
  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      //center: {lat: 41.85, lng: -87.65}
      center: {lat: 20.5937, lng: 78.9629}
    });

    this.directionsDisplay.setMap(this.map);
  this.directionsDisplay.setOptions({suppressMarkers:true});
  }
  makeMarker(position,  icon, map,content) {
    var marker=  new google.maps.Marker({
          position: position,
          map: map,
         // icon: 'http://gtrac.in/newtracking/reports/dist/map/map_icon/truck-green.png',
        //  title: title
        icon:icon
      });
      var infowindow2 = new google.maps.InfoWindow({
        content:String (content)
      });

      marker.addListener('click', function() {
        infowindow2.open(map, marker);
        //self.presentAlert()
      });
 
  }
  calculateAndDisplayRoute() {

 var linktwo='http://trackingexperts.com/appv2/dipatchclient/poilistspecificmac.php';
 var myDatatwo=JSON.stringify({uname:this.username, password: this.pass });
 this.http.post(linktwo, myDatatwo)
 .subscribe(data => {
   this.arrnew=JSON.parse(data["_body"]); 


 
 
 this.value = this.navParams.get('data');


       var linkfirst='http://trackingexperts.com/appv2/dipatchclient/vehicle_listmac.php';
       var myDatafirst=JSON.stringify({uname:this.username, password: this.pass ,userid:this.userid});
   
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
       var myData=JSON.stringify({uname:this.username,password: this.pass, vehicle_id:this.vehicle_id});
       this.http.post(link, myData)
       .subscribe(data => {
       this.abc=JSON.parse(data["_body"]);  
      
       this.current=String(this.abc[0]['Location']);
      // console.log(this.abc[0]['Location']);
     var link = 'http://gtrac.in/snowmanappmacv1/direction_pointarray.php';
 //var link = 'http://192.168.3.173/snowmanappmac-old/direction_pointarray.php';
      var myData = JSON.stringify({"vehicle_id":this.vehicle_id,"id":this.value.id});  
      this.http.post(link, myData).subscribe(data => {
      //let result = data["_body"]; 
      this.arr = JSON.parse(data["_body"]);

   
      var waypts = [];
      for (var i = 0; i <=this.arr.length-2; i++) {
            
                waypts.push({
               // location: this.waypoints[i],
               // location:String(arrconcat[i]['lat']+','+arrconcat[i]['long']) ,
               location:String(this.arr[i]['latlong']) ,
                stopover: true
               });
             
            }
         
      this.directionsService.route({
        //origin: '"'+this.hello+','+this.qw+'"',
       
       // destination:'"'+this.qa+','+this.qt+'"',
     
      
       origin: String(this.abc[0]['latlong']),
       waypoints: waypts,
       destination:String(this.arr[this.arr.length-1]['latlong']),
     //  [{location: "15.83727932,78.04385376", stopover: true}]
      // origin: '17.6997719,83.1775818',
      // waypoints: [{location: "15.83727932,78.04385376", stopover: true},{location: "15.82727932,78.05385376", stopover: true}],
      // destination:'14.693819,77.6076431',
       
      optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          new google.maps.DirectionsRenderer({
           
           map: this.map,
           directions: response,
           suppressMarkers: true
        });
       
        
       // var leg = response.routes[0].legs[0];
       // console.log(response.routes[0].legs[0]);
        // var path = new google.maps.MVCArray();
        // for (var j = 0, len = response.routes[0].overview_path.length; j < len; j++) {
        //   path.push(response.routes[0].overview_path[j]);
        // }
        //this.makeMarker(leg.end_location, 'icon', 'title', this.map);
         // console.log(this.directions.routes[0])
         this.directionsDisplay.setDirections(response);
     
      for (var i = 0; i <this.directionsDisplay.directions.routes[0].legs.length; i++) {
        var leg = this.directionsDisplay.directions.routes[0].legs[i];
        var order=this.directionsDisplay.directions.routes[0].waypoint_order;
      
        if(i==0)
        {
        //  this.makeMarker(leg.start_location, 'http://gtrac.in/newtracking/reports/dist/map/map_icon/truck-green.png', this.map,this.abc[0]['Location']);
        this.makeMarker(leg.start_location, 'http://gtrac.in/newtracking/reports/dist/map/map_icon/truck-green.png', this.map,this.abc[0]['Location']); 
      
        }
        else if(i>0)
        {
         
          for(var j=0;j<this.arr.length;j++)
          {
           // console.log(this.arr.indexOf(this.arr[j]['status']));
          
          if(order[i-1]==j)
          {
            var location=this.arr[order[i-1]]['poiname'];

            var icon=this.arr[order[i-1]]['image'];
          }
        }
         // this.makeMarker(leg.start_location, 'icon', this.map,this.arr[i-1]['status']);
     
//if(String(this.arrnew[j]['lat']+','+this.arrnew[j]['long'])==String(this.arr[i]['latlong']))
/*var temp=String(this.arr[i-1]['latlong']).split(',');
console.log(temp);
var t1=parseFloat(temp[0]).toFixed(2);
var t2=parseFloat(temp[1]).toFixed(2);
var t3=t1+","+t2;
console.log(t3);
console.log(String(parseFloat(leg.start_location.lat()).toFixed(2)+','+parseFloat(leg.start_location.lng()).toFixed(2)));
if(String(parseFloat(leg.start_location.lat()).toFixed(2)+','+parseFloat(leg.start_location.lng()).toFixed(2))==String(t3))
{
  var loc=this.arr[i-1]['status'];
}*/

      
      
         this.makeMarker(leg.start_location, icon, this.map,location);
     
         // console.log(leg.start_location.lng());
          if(i==this.directionsDisplay.directions.routes[0].legs.length-1)
          {
        
          // this.makeMarker(leg.end_location, 'icon', this.map,this.arr[i-1]['status']);
//           var temp=String(this.arr[i]['latlong']).split(',');
// console.log(temp);
// var t11=parseFloat(temp[0]).toFixed(2);
// var t22=parseFloat(temp[1]).toFixed(2);
// var t33=t11+","+t22;
// console.log(t33);
// if(String(parseFloat(leg.start_location.lat()).toFixed(2)+','+parseFloat(leg.start_location.lng()).toFixed(2))==String(t33))
// {
//   var loc2=this.arr[i]['status'];
// }

          this.makeMarker(leg.end_location, 'http://gtrac.in/snowmanappmacv1/PictureDestination.png', this.map,this.arr[this.arr.length-1]['poiname']);
          }
        }
       

      
        }



     //   this.makeMarker(leg.start_location, 'icon', this.map,"title");
        // for (var i = 0; i < leg.length; i++) {
          
        // }

       //   this.makeMarker(leg.end_location,'icon',this.map,'title');
//this.makeMarker();
         
      var date = new Date();
   
  var dateMillis = date.getTime();


       } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }, err =>{
      console.log(err);
        });
      }, error => {
      console.log("Oooops!");
      });
   
   
         }
     
       ,err => {
       console.log("Oooops!");
       });



      }
  
      ,err => {
        console.log("Oooops!");
        });
        
    
    
  }


  
  //console.log(this.hello);
  async presentLoading() {
    const loading = await this.loadingController.create({
     
      spinner: "dots",
      
      duration: 2000
    });
    return await loading.present();
  }

}
