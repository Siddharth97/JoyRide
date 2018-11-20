import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CartTabDefaultPagePage } from '../cart-tab-default-page/cart-tab-default-page';
import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-find-trip',
  templateUrl: 'find-trip.html'
})
export class FindTripPage {

  @ViewChild('map') mapElement: ElementRef;
  private map:GoogleMap;
  private location:LatLng;
 

  constructor(public navCtrl: NavController, private platform: Platform,
    private googleMaps: GoogleMaps) {
      this.location = new LatLng(43.7315, -79.7624);
  }
   goToCameraTabDefaultPage(params){
    if (!params) params = {};
    this.navCtrl.push(CartTabDefaultPagePage);
  }



  ionViewDidLoad() {
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = GoogleMaps.create(element);
  
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 8
        };

        let lats = 43.7315;
        let lngs = -79.7624;
        let late = 46.483012;
        let lnge = -81.008100;

        var m1 = this.map.addMarker({title: 'start', icon: 'green', animation: 'DROP', position:{lat: lats, lng: lngs}});
        var m2 = this.map.addMarker({title: 'end', icon: 'red', animation: 'DROP', position:{lat: late, lng: lnge}});

        this.map.addPolyline({
          points: [new LatLng(lats,lngs),new LatLng(late,lnge),],
            'color' : 'BLUE',
            'width': 10,
            'geodesic': true
        });

        this.map.moveCamera(options);
      });
    });
  }

addMarker() {
  this.map.addMarker({
    title: 'My Marker',
    icon: 'blue',
    animation: 'DROP',
    position: {
      lat: this.location.lat,
      lng: this.location.lng
    }
  })
  .then(marker => {
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('Marker Clicked');
    });
  });
}
}
