//import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
declare var google;
/**
 * Generated class for the CurrentlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currentlocation',
  templateUrl: 'currentlocation.html',
})
export class CurrentlocationPage {
  @ViewChild('map') mapElement: ElementRef;
  // map: GoogleMap;
  map: any;
  value: any;
  coordinates: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('data');
    
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
   this.coordinates =String(this.value[0]['latlong']);

    let latLng = new google.maps.LatLng(20.5937,78.9629);

    let mapOptions = {
      center: latLng,
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }


    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.makeMarker(this.coordinates,'location',this.map ,this.value[0]['Location']);
    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //   zoom: 7,
    //   //center: {lat: 41.85, lng: -87.65}
    //   center: {lat: 20.5937, lng: 78.9629}
    // });
  }
  makeMarker(position,  title, map,content) {
 var newpos=position.split(',');
var newlat=newpos[0];
var newlong=newpos[1];

// console.log(newpos);


//var myLatlng = new google.maps.LatLng(position);
          var marker=  new google.maps.Marker({
          position: new google.maps.LatLng(newlat,newlong),
          map: map,
          zoom:12,
          icon: 'http://gtrac.in/newtracking/reports/dist/map/map_icon/truck-green.png',
          title: title
      });
      var infowindow2 = new google.maps.InfoWindow({
        content:String (content)
      });
     // google.maps.event.trigger(map, "resize");
    var  bounds  = new google.maps.LatLngBounds();
   var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
bounds.extend(loc);
//map.panTo(marker.getPosition());
map.fitBounds(bounds);  
map.panToBounds(bounds); 
//map.setZoom(1);
      marker.addListener('click', function() {
        infowindow2.open(map, marker);
      });
  }


}

