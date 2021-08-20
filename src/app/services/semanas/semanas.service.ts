/* eslint-disable require-jsdoc */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SemanasService {
  public get_semanas: string = environment.get_semanas;
  public post_semanas: string = environment.post_semanas;
  public options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`,
    }),
  };
  constructor(private http: HttpClient, private auth: AuthService) {}

  cargarSemanas() {
    let currentYear = new Date().getFullYear();
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`,
      }),
      params: new HttpParams().append('anhos[]', currentYear+""),
    };
    return this.http.get(this.get_semanas, options);
  }

  actualizarSemanas(Semana: any) {
    return this.http.post(`${this.post_semanas}`, Semana, this.options);
  }
}
