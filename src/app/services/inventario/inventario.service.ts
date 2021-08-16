/* eslint-disable require-jsdoc */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  // http://demo5983135.mockable.io/lotes
  // https://api.jsonbin.io/b/60a59f966dbafa6b0d356a7d

  public path: string = 'http://demo5983135.mockable.io/inventario';
  public pathEnfunde: string = environment.get_inventario_enfunde;

  constructor( private http: HttpClient) { }

  cargarInventario() {
    return this.http.get(this.path)
        .pipe(
            map((resp:any) => resp['inventarioSem']),
        );
  }

  cargarEnfundado(idSemana:number, anho:number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: `{
        "semana": ${idSemana}
        "anho": ${anho}
     }`,
    };
    return this.http.get(this.pathEnfunde, options);
  }
}
