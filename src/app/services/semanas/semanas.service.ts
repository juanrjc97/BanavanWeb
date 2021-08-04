import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semana } from 'src/app/models/semana';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SemanasService {
  public get_semanas: string = environment.get_semanas;
  public post_semanas: string = environment.post_semanas;
  constructor(private http: HttpClient) {}

  cargarSemanas() {
    return this.http.get(this.get_semanas);
  }

  actualizarSemanas(Semana: any) {
    return this.http.post(`${this.post_semanas}`, Semana);
  }
}
