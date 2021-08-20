/* eslint-disable require-jsdoc */
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean
      | UrlTree>
      | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.auth.getRol();
    if (role === 'Administrador') {
      return true;
    } else {
      this.router.navigateByUrl('login');
      this.auth.logout();
      return false;
    }
  }
}
