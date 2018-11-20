import { TabsControllerPage } from './../tabs-controller/tabs-controller';
import { CartTabDefaultPagePage } from './../cart-tab-default-page/cart-tab-default-page';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { myService } from './../../providers/data-service/data-service';

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html'
})

export class ConfirmPage {
  postList: any = [];
   username: any;
   starttime:any;
   startlocation:any;
   endlocation:any;
   price: any;
   seats: any;
  

  constructor(public navCtrl: NavController, 
    private remoteService : RemoteServiceProvider,
    private myService: myService){
      this.getPosts();
      

      this.username=myService.getSharedUser();

      
  }
  getPosts(){
    this.remoteService.getPosts().subscribe((data)=>{
        this.postList = data;
        console.log(this.postList);
        
        for (var i = 0; i < this.postList.length; i++) {
          console.log('outer ' +i);
          if (this.postList[i]['username'] === this.username) {
                console.log(i);
                console.log(this.postList[i]['username'] + ' sl ' + this.postList[i]['startlocation'] + ' pr ' + this.postList[i]['price'] +' t  '+ this.postList[i]['starttime']);
              this.starttime=this.postList[i]['starttime'];
              this.startlocation=this.postList[i]['startlocation'];
              this.endlocation=this.postList[i]['endlocation']
              this.price=this.postList[i]['price'];
              this.seats=this.postList[i]['seats']
              }
        }
         });
}

  
  doConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
  
  
  cancel(params){
    if (!params) params = {};
    this.navCtrl.push(CartTabDefaultPagePage);
  }
  
}
