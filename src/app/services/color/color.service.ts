/* eslint-disable require-jsdoc */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Color} from 'src/app/models/color';
import {environment} from 'src/environments/environment';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  public get_cinta = environment.get_cinta;
  public post_cinta = environment.post_cinta;
  public update_cinta = environment.put_cinta;
  public delete_cinta = environment.delete_cinta;

  constructor(private http: HttpClient, private auth: AuthService) {}
  public options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`,
    }),
  };

  cargarCinta() {
    return this.http.get(this.get_cinta, this.options);
  }

  crearCinta(Cinta: Color) {
    return this.http.post(this.post_cinta, Cinta, this.options);
  }

  actualizarCinta(Cinta: Color) {
    return this.http.put(this.update_cinta, Cinta, this.options);
  }

  // Enviando Color en el cuerpo del metodo delete
  eliminarCinta(Cinta: Color) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`,
      }),
      body: Cinta,
    };
    return this.http.delete(`${this.delete_cinta}`, options);
  }
}
