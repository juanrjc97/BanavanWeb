/* eslint-disable require-jsdoc */
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GerenteGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  /**
   *
   * @return {boolean} La respuesta la verificacion del token
   */
  canActivate(): boolean {
    const role = this.auth.getRol();
    if (role === 'Gerente') {
      return true;
    } else {
      this.router.navigateByUrl('login');
      this.auth.logout();
      return false;
    }
  }
}
