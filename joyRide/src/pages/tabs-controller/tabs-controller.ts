import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostTripPage } from '../post-trip/post-trip';
import { CameraTabDefaultPagePage } from '../camera-tab-default-page/camera-tab-default-page';
import { FindTripPage } from '../find-trip/find-trip';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = PostTripPage;
  tab2Root: any = FindTripPage;
  constructor(public navCtrl: NavController) {
  }
  goToPostTrip(params){
    if (!params) params = {};
    this.navCtrl.push(PostTripPage);
  }goToCameraTabDefaultPage(params){
    if (!params) params = {};
    this.navCtrl.push(CameraTabDefaultPagePage);
  }goToFindTrip(params){
    if (!params) params = {};
    this.navCtrl.push(FindTripPage);
  }
}
