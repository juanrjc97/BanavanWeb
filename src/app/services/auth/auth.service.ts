/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {FormGroup} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public path = environment.login;
  constructor(private http: HttpClient) { }

  saveUserInfo(token: string, rol: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', rol);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }
  getRol(): string {
    return localStorage.getItem('rol') || '';
  }

  removeInfo() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }
 
  login(data: any) {
    console.log(data);
    return this.http.post(this.path, data)
        .pipe(
            tap((resp:any)=>{
              this.saveUserInfo(resp.access_token, resp.rol);
            }),
        );
  }

  logout() {
    this.removeInfo();
  }
}
