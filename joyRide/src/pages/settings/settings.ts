import { TabsControllerPage } from './../tabs-controller/tabs-controller';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {
  }
  goBackMain(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
