import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { CameraTabDefaultPagePage } from '../camera-tab-default-page/camera-tab-default-page';
import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
  Geocoder
} from '@ionic-native/google-maps';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Component({
  selector: 'page-post-trip',
  templateUrl: 'post-trip.html'
})
export class PostTripPage implements OnInit {

  postTripFormGroup: FormGroup;
  username: string = '';
  startlocation: string = '';
  endlocation: string = '';
  starttime: string = '';
  endtime: string = '';
  price: string = '';
  passengerrating: string = '';
  car: string = '';
  desc: string = '';

  @ViewChild('mapPost') mapElement: ElementRef;
  private mapPost:GoogleMap;
  private location:LatLng;
 
  constructor(public navCtrl: NavController, private platform: Platform,
    private googleMaps: GoogleMaps, public httpClient: HttpClient, private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.location = new LatLng(43.7315, -79.7624);
      this.createPostTripFormGroup();
  }

  ngOnInit(){
    
  }

  createPostTripFormGroup(){
    this.postTripFormGroup=this.formBuilder.group({
      username: [''],
      from: [''],
      to: [''],
      date: [''],
      price: [''],
      desc: ['']
    });
  }

  sendPostRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    let postData = {
      "username" : "Sam", 
      "startlocation" : this.postTripFormGroup.get('from').value,
      "endlocation" : this.postTripFormGroup.get('to').value,
      "starttime" : this.postTripFormGroup.get('date').value,
      "endtime": this.postTripFormGroup.get('date').value,
      "price": this.postTripFormGroup.get('price').value,
      "passengerrating" : "5",
      "car": "testCar"
    }
  
    this.http.post("http://67.71.129.60:3000/api/drivers", postData, httpOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.mapPost = GoogleMaps.create(element);
  
      this.mapPost.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 8
        };
  
        this.mapPost.moveCamera(options);
      });
    });
  }

addMarker() {
  this.mapPost.addMarker({
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

  goToCameraTabDefaultPage(params){
    if (!params) params = {};
    this.navCtrl.push(CameraTabDefaultPagePage);
    //alert('pressed');
    //this.dropPoints();
    this.sendPostRequest(); 
  }
  myDate(){

  }

  dropPoints(){
    var geocoder;

    var start = this.postTripFormGroup.get('postTrip-search1').value;
    var end = this.postTripFormGroup.get('postTrip-search2').value;

    alert(start);

    geocoder.geocode({'address':start}, function(results, status){
      if(status == 'OK'){
        this.mapPost.setCenter(results[0].geometry.location);
        var pin = new this.mapPost.Marker({
          map: this.mapPost,
          position: results[0].geometry.location
        });
      }else{
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

  }
}
