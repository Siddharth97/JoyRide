import { FindTripPage } from './../find-trip/find-trip';
import { ConfirmPage } from './../confirm/confirm';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { myService } from './../../providers/data-service/data-service';

@Component({
  selector: 'page-cart-tab-default-page',
  templateUrl: 'cart-tab-default-page.html'
})
export class CartTabDefaultPagePage {

  postList: any = [];
  user = "";

    constructor(public navCtrl: NavController, 
      private remoteService : RemoteServiceProvider,
      private myService: myService){
        this.getPosts();
        
    }
    getPosts(){
      this.remoteService.getPosts().subscribe((data)=>{
          this.postList = data;
      });
  }

  seeDescription(params){
    this.user = params;
    this.myService.sharedUser = params;
    this.navCtrl.push(ConfirmPage);
  }

  findTrip(params){
    if (!params) params = {};
    this.navCtrl.push(FindTripPage);
  } 
}
