import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, AlertController} from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FeedBack } from '../../models/feedback';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  myForm: FormGroup; //ชื่อฟอร์ม
  fullname: FormControl;
  email: FormControl;
  password: FormControl;
  errorMessage: string;
  data: FeedBack;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    //private authServiceProvider: AuthServiceProvider,
   private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    //ตรวจสอบความถูกต้องของฟอร์ม เช่น required, minLength
    this.fullname = fb.control('', Validators.required);
    this.email = fb.control('', Validators.compose([
      Validators.required,
      RegisterPage.emailValidator //เรียก method emailValidator เพื่อตรวจสอบความถูกต้องของอีเมล์
    ]));
    this.password = fb.control('', Validators.compose([Validators.required,
    Validators.minLength(3)]));
    this.myForm = fb.group({
      'fullname': this.fullname,
      'email': this.email,
      'password': this.password
    });
  }
  //ตรวจสอบความถูกต้องของอีเมล์โดยใช้ Regular Expression
  static emailValidator(control: FormControl) {
    let email_regxp: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
   return email_regxp.test(control.value) ? null : { invalidEmail: true };
   }
  signup(): void {
    //console.log(this.myForm.value);
    //รับข้อมูลต่างๆมาจากฟอร์ม
    let fullname = this.myForm.controls['fullname'].value;
    let email = this.myForm.controls['email'].value;
    let password = this.myForm.controls['password'].value;
    80
    //แสดง loading controller
    let loader = this.loadingCtrl.create({
      content: "กำลังบันทึกข้อมูล..."
    });
    loader.present();
    //เรียกใช้ provider (AuthServiceProvider)
    
    /*this.authServiceProvider.signup(fullname, email, password).subscribe(
      res => {
        this.data = res; //รับค่าข้อมูล json จาก provider (Backend)
        if (this.data.status === 'ok') { //ถ้าสถานะเท่ากับ 'ok' แสดงว่าบันทึกข้อมูลเรียบร้อย
          let alert = this.alertCtrl.create({
            title: this.data.message,
            buttons: ['ตกลง']
          });
          //console.log('signup ok');
          alert.present();
          this.myForm.reset(); //reset form
        } else { //ถ้าสถานะเท่ากับ 'error' ให้ทำงานและแสดงข้อความในส่วนนี้
          let alert = this.alertCtrl.create({
            title: this.data.message,
            buttons: ['ตกลง']
          });
          // console.log('signup not ok');
          alert.present();
        }
      },
      error => {
        this.errorMessage = <any>error
        console.log(this.errorMessage);
        loader.dismiss();
        81
      },
      () => {
        loader.dismiss();
      }
    );

    */
  }
}

