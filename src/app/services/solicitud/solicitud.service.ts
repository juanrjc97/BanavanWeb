/* eslint-disable require-jsdoc */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import { AuthService } from '../auth/auth.service';


// eslint-disable-next-line new-cap
@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  public getSolicitud: string = environment.get_solicitud;
  public updateSolicitud : string = environment.update_solicitud;
  public getTipoSolicitud: string = environment.get_tipoSolicitud;

  constructor(private http: HttpClient, private auth: AuthService) { }
  public options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`,
    }),
  };
  getTipoSolicitudes() {
    return this.http.get(this.getTipoSolicitud, this.options);
  }

  getSolicutes() {
    return this.http.get(this.getSolicitud, this.options);
  }

  updateSolicitudes(idSolicitud : number, respuesta: boolean) {
    const body = {
      'id': idSolicitud,
      'respuesta': respuesta,
    };
    return this.http.put(this.updateSolicitud, body, this.options);
  }
}
