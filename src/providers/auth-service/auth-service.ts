import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { FeedBack } from '../../models/feedback'; //import model FeedBack เข้ามาใช้งาน
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
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
  public signup(idcard:string,fullname: string, email: string, password: string): Observable<FeedBack> {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json'); //กำหนด header
    //ประกาศตัวแปร data เพื่อเก็บข้อมูลที่รับมา

    let data = {
      'idcard': idcard,
      'fullname': fullname,
      'email': email,
      'password': password
    }
    //ใช้ method post() สำหรับส่ง data เพื่อไปบันทึกข้อมูล
    return this.http.post('http://localhost:7777/newuser', data, {
      headers: myHeader
    })
      .map((res: Response) => {
        let data = res.json(); //รับ json จาก Backend แล้ว return ออกไปให้เพจ
        return data;
      }).catch(this.handleError);

  }
  public checkuser(idcard:string, email: string): Observable<FeedBack> {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json'); //กำหนด header
    //ประกาศตัวแปร data เพื่อเก็บข้อมูลที่รับมา
    //ใช้ method post() สำหรับส่ง data เพื่อไปบันทึกข้อมูล
    alert(idcard);
    alert(email);
    //http://localhost:7777/users/1100800748350&test@cc.vo
    return this.http.get('http://localhost:7777/users/'+idcard+'&'+email,{headers: myHeader}).map((res: Response) => {
        let data = res.json(); //รับ json จาก Backend แล้ว return ออกไปให้เพจ
        return data;
      }).catch(this.handleError);

  }
  private handleError(error: any) {
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผิดพลาด');
  }
}

