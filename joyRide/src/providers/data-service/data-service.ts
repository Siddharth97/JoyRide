import { Injectable, Input } from '@angular/core';

@Injectable()
export class myService {
  public sharedData:string;
  public sharedUser:string;
  
  constructor(){
    this.sharedData = "String from myService";
    this.sharedUser = "String from myService";
  }

  setData (data) {
    this.sharedData = data;
  }
  getData () {
    return this.sharedData;
  }
  setSharedUser (sharedUser) {
    this.sharedData = sharedUser;
  }
  getSharedUser () {
    return this.sharedUser;
  }
}