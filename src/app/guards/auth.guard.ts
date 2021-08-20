import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, CanLoad, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Route} from '@angular/compiler/src/core';
import {AuthService} from '../services/auth/auth.service';

// eslint-disable-next-line new-cap
@Injectable({
  providedIn: 'root',
})
/**
 *
 */
export class AuthGuard implements CanActivate, CanLoad {
  /**
   *
   * @param {router} router permite redirigir a la ruta deseada
   */
  constructor(private router: Router, private auth: AuthService) {}
  /**
   *
   * @param {route} route redirigir a la ruta deseada.
   * @param {segments} segments el estado de la ruta.
   * @return {boolean} indica si se puede o no cargar la ruta
   */
  canLoad(route: Route, segments: UrlSegment[]) : boolean {
    if (this.auth.getToken()!==' ') {
      return true;
    } else {
      return false;
    }
  }
  /**
   * @param {route} route redirigir a la ruta deseada.
   * @param {state} state el estado de la ruta.
   * @return {boolean} indica si se puede o no activar la ruta
   */
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
    if (this.auth.getToken()!==' ') {
      return true;
    } else {
      return false;
    }
  }
}
