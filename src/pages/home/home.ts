import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { FeedBack } from '../../models/feedback';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: FormGroup; //ชื่อฟอร์ม
  username: FormControl;
  password: FormControl;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private authServiceProvider: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    this.loginForm = fb.group({
      'username': this.username,
      'password': this.password
    });
  }
  login() {
    //this.navCtrl.push(LoginPage);
    let username = this.loginForm.controls['username'].value;
    alert(username);

  }
  register() {
    this.navCtrl.push(RegisterPage);
  }
}
