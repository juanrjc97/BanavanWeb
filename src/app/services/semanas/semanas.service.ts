import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
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
    let paramsA = new HttpParams();
    const anhos = ["2021"];
    paramsA.append('anhos', JSON.stringify(anhos));

    let options = {
      /*headers: {
        'Content-Type': 'application/json',
      },*/
      //params: { paramsA },
      params: new HttpParams().append('anhos[]', '2021'),
    };
    //return this.http.get(this.get_semanas, {params: paramsA});
    return this.http.get(this.get_semanas, options);
  }

  actualizarSemanas(Semana: any) {
    return this.http.post(`${this.post_semanas}`, Semana);
  }
}
