import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { FeedBack } from '../../models/feedback'; //import model FeedBack เข้ามาใช้งาน

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  //method signup รับพารามิเตอร์ 3 ตัว และคืนค่า FeedBack กลับออกไป
  public signup(fullname: string, email: string, password: string): Observable<FeedBack> {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json'); //กำหนด header
    //ประกาศตัวแปร data เพื่อเก็บข้อมูลที่รับมา
    let data = {
      'fullname': fullname,
      'email': email,
      'password': password
    }
    //ใช้ method post() สำหรับส่ง data เพื่อไปบันทึกข้อมูล
    return this.http.post('https://codingthailand.com/api/insert_user.php', data, {headers: myHeader}).map((res: Response) => {
        let data = res.json(); //รับ json จาก Backend แล้ว return ออกไปให้เพจ
        return data;
      }).catch(this.handleError);
  }
  private handleError(error: any) {
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผิดพลาด');
  }
}


