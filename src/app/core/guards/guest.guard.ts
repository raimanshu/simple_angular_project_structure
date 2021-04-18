import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutePath } from '../config';
import { LocalstorageService } from '../service/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(private localstorage:LocalstorageService, 
    private router:Router
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const tokenchecked = this.localstorage.isLoggedIn();
       if(tokenchecked){
        this.router.navigate([RoutePath.Empty])
       }
        else {
          return true;
          // return false;
        }
      }
    
    }
    
  