import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutePath } from '../config';
import { LocalstorageService } from '../service/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private localstorage:LocalstorageService,
    private router:Router
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const tokenchecked = this.localstorage.isLoggedIn();
    //  const tokenchecked = this.localstorage.getvalueToken().subscribe(res => {
    //    return res;
    //  })
     if(tokenchecked){
      return true;
     }
      else {
       this.router.navigate([RoutePath.Empty])
        // return false;
      }
    }
  
  }
  
