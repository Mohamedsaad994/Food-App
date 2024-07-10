import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ILogin, IRegister } from '../Interfaces/Auth';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  role:string | any = '';

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('userToken') !== null){
      this.getProfile()
    }
   }

  getProfile(){
    let encoded:any = localStorage.getItem('userToken')

    let decoded: any = jwtDecode(encoded)
    console.log(decoded.userGroup);
    localStorage.setItem('role', decoded.userGroup)
    localStorage.setItem('userName', decoded.userName)
    this.getRole()
  }

  getRole(){
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') !== null){
      this.role = localStorage.getItem('role');
    }
  }

  login(userData:ILogin):Observable<any>{
    return this._HttpClient.post('Users/Login', userData)
  }
  register(userData:FormData):Observable<any>{
    return this._HttpClient.post('Users/Register', userData)
  }

  verify(mail:string, code: string):Observable<any>{
    return this._HttpClient.put('Users/verify', {email: mail, code: code})
  }

  forgotPass(data: any):Observable<any>{
    return this._HttpClient.post('Users/Reset/Request', data)
  }

  resetPass(data:any):Observable<any>{
    return this._HttpClient.post('Users/Reset', data)
  }
}
