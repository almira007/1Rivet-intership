import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../service/auth-guard.service';

@Injectable()

export class AuthGuard implements CanActivate {

  // isAuth:boolean=false

  // constructor(private authGuardService: AuthGuardService,
  //   private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // this.authGuardService.authSubject.subscribe((res) => {
      //   this.isAuth = res;
      // });
    return true;
  }
  
}
