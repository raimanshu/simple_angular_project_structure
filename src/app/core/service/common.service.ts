import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private test = new Subject<any>();

  private MODULE_API = {
    BECOME_A_SELLER: environment.url + 'api/addCompanyInfo',
    GET_BECOME_A_SELLER: environment.url + 'api/getCompanyDetails',
    COUNTRYLIST: environment.url + 'api/showAllCountries',
    STATELIST: environment.url + 'api/showAllStates',
    CITYLIST: environment.url + 'api/showAllCities',
    GET_PROFILE_DETAILS: environment.url + 'api/getUserDetail',
    CREATE_AIRPARTS: environment.url + 'api/addAirPartInfo',
    SUBSCRIPTION_PLAN_LIST: environment.url + 'api/getSubscriptionPlans',
    AIRPART_IMAGES_LIST: environment.url + 'api/getAllAirpartImages',
    ALL_AIRPARTS_LIST: environment.url + 'api/getAllProductsList',
    EDIT_PROFILE_DATA: environment.url + 'api/editUserProfileDetails',
  }
  data: any = '';

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar; 
  fromPage = 'dashboard';

  constructor(
    private http: HttpClient,
  ) { }

  onSearchClick(data) {    
    this.invokeFirstComponentFunction.emit(data); 
  } 

  sendProductData(data: any) {
    this.test.next(data);
  }
  getProductData(): Observable<any> {
    return this.test.asObservable();
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  // get profile details api 
  getProfileDetailsApi() {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    let data = {
      user_id: localStorage.getItem('user_id')
    }
    return this.http.post<any>(this.MODULE_API.GET_PROFILE_DETAILS, data, options)
  }
  // become a seller   
  postAddCompanyInfo(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.BECOME_A_SELLER, data, options)
  }

  // country list api 
  getCountry(): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.get<any>(this.MODULE_API.COUNTRYLIST)
  }

  // state Api implements   
  postStates(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    let data1 = {
      country_id: data
    }
    return this.http.post<any>(this.MODULE_API.STATELIST, data1, options)
  }

  // city Api implements 
  postCity(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    let data1 = {
      state_id: data
    }
    return this.http.post<any>(this.MODULE_API.CITYLIST, data1, options)
  }

  // create airparts api 
  createAirpart(data) {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.CREATE_AIRPARTS, data, options)
  }

  // get list of subscription plans 
  getSubscriptionPlanList() {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.get<any>(this.MODULE_API.SUBSCRIPTION_PLAN_LIST, options)
  }

  // get list of airpart images 
  getAirPartImagesList() {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.get<any>(this.MODULE_API.AIRPART_IMAGES_LIST, options)
  }

  // get all airparts list 
  getAllAirpartsList(data) {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.ALL_AIRPARTS_LIST, data, options)
  }

  getBestSellerInfo(data) {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.GET_BECOME_A_SELLER, data, options)
  }

  editProfileData(data) {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'multipart/form-data');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.EDIT_PROFILE_DATA, data, options)
  }
}
