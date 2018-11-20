import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-trip-history',
  templateUrl: 'trip-history.html'
})
export class TripHistoryPage {

  postList: any = [];

    constructor(public navCtrl: NavController, 
      private remoteService : RemoteServiceProvider){
        this.getHistory();
    }
    getHistory(){
      this.remoteService.getHistory().subscribe((data)=>{
          this.postList = data;
      });
  }
  seeFullHistory(){}
  goBackMain(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
  
}
