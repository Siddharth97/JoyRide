import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { TranslateService } from '@ngx-translate/core';
import {TabsControllerPage} from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  
 // Our translated text strings
 private loginErrorString: string;

 constructor(public navCtrl: NavController,
   public user: User,
   public toastCtrl: ToastController,
   public translateService: TranslateService) {

   this.translateService.get('LOGIN_ERROR').subscribe((value) => {
     this.loginErrorString = value;
   })
 }
 // Attempt to login in through our User service
 doLogin() {
  this.user.login(this.account).subscribe((resp) => {
    this.navCtrl.push(TabsControllerPage);
  }, (err) => {
    this.navCtrl.push(TabsControllerPage);
    // Unable to log in
    
  });
}
doSignup(params){
  if (!params) params = {};
  this.navCtrl.push(SignupPage);
}
}
