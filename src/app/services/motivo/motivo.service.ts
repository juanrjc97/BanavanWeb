/* eslint-disable require-jsdoc */
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Motivo} from 'src/app/models/motivo';
import {FormBuilder} from '@angular/forms';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MotivoService {
  public getMotivoUrl: string = environment.get_motivo;
  public updateMotivoUrl: string = environment.put_motivo;
  public createMotivoUrl: string = environment.post_motivo;
  public deleteMotivoUrl: string = environment.delete_motivo;

  public path: string = 'http://demo5983135.mockable.io/motivo';
  // path para put motivo/id

  constructor(private http: HttpClient) { }

  cargarMotivos() {
    return this.http.get(this.getMotivoUrl);
  }

  crearMotivo( data: {titulo: string, descripcion: string}) {
    return this.http.post(this.createMotivoUrl, data);
  }

  actualizarMotivo(motivo: Motivo) {
    // luego cambiar por esto el id ${motivo.id}
    return this.http.put(this.updateMotivoUrl, motivo);
  }

  eliminarMotivo(id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: `{
        "id": ${id}
     }`,
    };
    return this.http.delete(`${this.deleteMotivoUrl}`, options);
  }
}
