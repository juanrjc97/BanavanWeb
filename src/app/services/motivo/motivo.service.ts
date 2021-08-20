/* eslint-disable require-jsdoc */
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Motivo} from 'src/app/models/motivo';
import {FormBuilder} from '@angular/forms';
import {environment} from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MotivoService {
  public getMotivoUrl: string = environment.get_motivo;
  public updateMotivoUrl: string = environment.put_motivo;
  public createMotivoUrl: string = environment.post_motivo;
  public deleteMotivoUrl: string = environment.delete_motivo;
  public options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`,
    }),
  };

  // path para put motivo/id

  constructor(private http: HttpClient, private auth: AuthService) { }
  
  cargarMotivos() {
    return this.http.get(this.getMotivoUrl, this.options);
  }

  crearMotivo( data: {titulo: string, descripcion: string}) {
    return this.http.post(this.createMotivoUrl, data, this.options);
  }

  actualizarMotivo(motivo: Motivo) {
    // luego cambiar por esto el id ${motivo.id}
    return this.http.put(this.updateMotivoUrl, motivo, this.options);
  }

  eliminarMotivo(id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`,
      }),
      body: `{
        "id": ${id}
     }`,
    };
    return this.http.delete(`${this.deleteMotivoUrl}`, options);
  }
}
