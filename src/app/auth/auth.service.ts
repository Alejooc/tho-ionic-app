import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY1 = 'UsrData';
const STORAGE_KEY2 = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user testeos and password = 3157215219
  url = 'https://tuhogaronline.com/backTHO/index.php/';

  constructor(public http: HttpClient,private storage:Storage) {
    this.init();
   }
  init(){
    this.storage.create();
  }
  getData(){
    return this.storage.get(STORAGE_KEY1)|| [];
  }

  async addData(item){
    this.storage.set(STORAGE_KEY1,item.usr)
    this.storage.set(STORAGE_KEY2,item.curren)
    return true
  }
  validate(){
    return this.storage.get(STORAGE_KEY1)|| [];
  }

  // Login POST REQ
  postLogin(data):Observable<any>{
    let _urlParams: any = new FormData();
    _urlParams.append('data', JSON.stringify(data));
    return this.http.post(this.url+'storeclient/login/',_urlParams);
  }
}
