import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  getApiUrl : string = "http://67.71.129.60:3000/api/";
  constructor(public http: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getPosts() {

    return  this.http.get(this.getApiUrl+"drivers/")
    .do((res : Response ) => console.log(res.json))
            
}

getHistory() {

  return  this.http.get(this.getApiUrl+"driverhistory/")
  .do((res : Response ) => console.log(res.json))
          
}

}
