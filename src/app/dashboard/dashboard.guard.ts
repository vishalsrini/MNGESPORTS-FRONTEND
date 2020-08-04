import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor(private firebaseAuthService: FirebaseAuthService,
    private router: Router) {
      
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // check if user is authenticated
    if (this.firebaseAuthService.getLoggedInUser() != null) {
      // console.log(this.firebaseAuthService.getLoggedInUser());
      return true;
    } else {
      // Navigate to the login page
      this.router.navigate(['sign-in']);
      return false;
    }
  }
  
}
