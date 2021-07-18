/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Lote} from 'src/app/models/lote';
import {environment} from 'src/environments/environment';

//  <Summary>
//  Author: juan jiménez
//  Date: 2021-06-12
//  Description: Servicio encargado de las peticiones http sobre el modulo lotes
//  </summary>

@Injectable({
  providedIn: 'root',
})
export class LoteService {
  public getLoteUrl: string = environment.get_lote;
  public postLoteUrl: string = environment.post_lote;
  public deleteLoteUrl : string = environment.delete_lote;
  public updateLoteUrl : string = environment.put_lote;
  constructor(private http: HttpClient) { }

  //  <Summary>
  //  Author: juan jiménez
  //  Date: 2021-06-12
  //  Description: Servicio para obtener los lotes del back
  //  params: no params
  //  </summary>
  cargarLotes() {
    return this.http.get(this.getLoteUrl);
  }
  //  <Summary>
  //  Author: juan jiménez
  //  Date: 2021-06-12
  //  Description: Servicio para obtener los lotes del back
  //  params: recibe una instancia de lote
  //  </summary>
  crearLote(lote: Lote) {
    return this.http.post(this.postLoteUrl, lote);
  }
  //  <Summary>
  //  Author: juan jiménez
  //  Date: 2021-06-12
  //  Description: Servicio para obtener los lotes del back
  //  params: recibe una instancia de lote
  //  </summary>
  actualizarLote(lote: Lote) {
    return this.http.put(this.updateLoteUrl, lote);
  }
  //  <Summary>
  //  Author: juan jiménez
  //  Date: 2021-06-12
  //  Description: Servicio para obtener los lotes del back
  //  params: recibe un id del lote de tipo numerico
  //  </summary>
  eliminarLote(id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: `{
        "id": ${id}
     }`,
    };
    return this.http.delete(`${this.deleteLoteUrl}`, options );
  }
}
