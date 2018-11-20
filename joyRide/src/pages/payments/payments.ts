import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html'
})
export class PaymentsPage {

  constructor(public navCtrl: NavController) {
  }
  goBackMain(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
