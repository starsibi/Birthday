import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(take(1), map((isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }));
  }
}
