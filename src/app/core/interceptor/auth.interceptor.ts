import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../service/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localstorage:LocalstorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentAuthToken = this.localstorage.currentAuthTokenValue;
    if (currentAuthToken && currentAuthToken.length > 0) {
      const headers = {
        Authorization: `Bearer ${currentAuthToken}`,
        "Content-Type": "application/json"
      };
      request = request.clone({
        setHeaders: headers
      });
    }

    return next.handle(request);
  }

}
