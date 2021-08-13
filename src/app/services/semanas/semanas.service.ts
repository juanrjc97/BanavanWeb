import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SemanasService {
  public get_semanas: string = environment.get_semanas;
  public post_semanas: string = environment.post_semanas;
  constructor(private http: HttpClient) {}

  cargarSemanas() {
    let currentYear = new Date().getFullYear();
    let options = {
      params: new HttpParams().append('anhos[]', currentYear+""),
    };
    return this.http.get(this.get_semanas, options);
  }

  actualizarSemanas(Semana: any) {
    return this.http.post(`${this.post_semanas}`, Semana);
  }
}
