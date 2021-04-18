import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private MODULE_API = {
    BECOME_A_SELLER: environment.url + 'api/addCompanyInfo',
    COUNTRYLIST: environment.url + 'api/showAllCountries',
    STATELIST: environment.url + 'api/showAllStates',
    CITYLIST: environment.url + 'api/showAllCities',

  }

  constructor(
    private http: HttpClient,
  ) { }

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
    return this.http.post<any>(this.MODULE_API.STATELIST, data, options)
  }

  // city Api implements 
  postCity(data): Observable<any> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpheader
    };
    return this.http.post<any>(this.MODULE_API.CITYLIST, data, options)
  }

}
