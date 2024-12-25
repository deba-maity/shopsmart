import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = !!localStorage.getItem('userId');

    if (!isAuthenticated) {
      alert('Please log in to access this page.');
      this.router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}
