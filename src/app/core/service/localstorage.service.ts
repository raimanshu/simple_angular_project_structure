import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private userName: BehaviorSubject<string> = new BehaviorSubject(localStorage.getItem("userName") !== null?localStorage.getItem("userName"): null);
  private authToken: BehaviorSubject<any> = new BehaviorSubject(localStorage.getItem("token") !== null?localStorage.getItem("token"): null);

  constructor() {
  
  }

  sendUserName(message: string) {
    this.userName.next(message);
    localStorage.setItem('userName', message);
  }

  getUserName(): Observable<any> {
    return this.userName.asObservable();
  }

sendToken(token:string){
  this.authToken.next(token);
  localStorage.setItem('token', token)
}

getvalueToken(): Observable<any>{
  return this.authToken.asObservable();
}

public get currentAuthTokenValue() {
  return localStorage.getItem('token')
}

isLoggedIn(): boolean {
  return this.currentAuthTokenValue !== null;
}

  signOut(){
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('company-id');
    const demo =''; 
    this.userName.next(demo);
  }

}
