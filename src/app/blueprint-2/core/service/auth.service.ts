import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sliderPara = new Subject<any>();

  private MODULE_API = {
    SIGNUP: environment.url + 'api/register',
    LOGIN: environment.url + 'api/login',
    FORGOT: environment.url + 'api/forgetpassword',
    COUNTRYLIST: environment.url + 'api/showAllCountries',
    STATELIST: environment.url + 'api/showAllStates',
    CITYLIST: environment.url + 'api/showAllCities',
    CHANGE_PASSWORD: environment.url + 'api/changePassword',
    SOCIAL_LOGIN: environment.url + 'api/socialLogin',
  }

  constructor(
    private http: HttpClient,
    public router: Router,
  ) { }

  // slider paragrph change 
  sendMessage(message: any) {
    this.sliderPara.next({ text: message });
  }
  getMessage(): Observable<any> {
    return this.sliderPara.asObservable();
  }


  // geo location code implements 
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }

  // Registeration Api Implements 
  postRegister(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.SIGNUP, data, options)
  }

  // Login Api Implements 
  postLogin(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.LOGIN, data, options)
  }

  // Forgot Password 
  postForgot(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.FORGOT, data, options)
  }

  // coutry Api implements 

  getCountry(): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.get<any>(this.MODULE_API.COUNTRYLIST)
  }

  // state Api implements   
  postCoutry(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.STATELIST, data, options)
  }

  // city Api implements 
  postState(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.CITYLIST, data, options)
  }

  // change password api implements 
  postChangePassword(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.CHANGE_PASSWORD, data, options)
  }

  // social login api 
  socialLogin(data) {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.SOCIAL_LOGIN, data, options);
  }


}
