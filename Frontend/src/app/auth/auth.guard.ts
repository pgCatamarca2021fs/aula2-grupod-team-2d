import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';

import { AuthService } from '../servicios/auth/auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService, 
        private router: Router
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean | UrlTree {
        if (!this.authService.estaAutenticado){
            this.router.navigate(['../'])
            return false
           
        }
        // this.router.navigate(['../dashboard'])
        return true
  }
  
}
