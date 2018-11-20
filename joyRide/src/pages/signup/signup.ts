import { LoginPage } from './../login/login';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit{

  signupFormGroup: FormGroup;
  name: string = '';
  email: string = '';
  password: string = '';
  number: string = '';
  constructor(public navCtrl: NavController, public httpClient: HttpClient, private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.createSignupFormGroup();
  }

  ngOnInit(){
    this.name=this.signupFormGroup.get('name').value;

  }
  createSignupFormGroup(){
    this.signupFormGroup=this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      number: ['']
    });

  }
  
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
    this.sendPostRequest();
 }

 sendPostRequest() {
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  let postData = {
    "username" : this.signupFormGroup.get('name').value, 
    "name" : this.signupFormGroup.get('name').value,
    "email" : this.signupFormGroup.get('email').value,
    "phonenum" : this.signupFormGroup.get('number').value,
    "password": this.signupFormGroup.get('password').value
  }

  this.http.post("http://67.71.129.60:3000/api/users", postData, httpOptions)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
}

}
