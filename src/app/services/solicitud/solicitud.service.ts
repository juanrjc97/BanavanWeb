/* eslint-disable require-jsdoc */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';


// eslint-disable-next-line new-cap
@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  public getSolicitud: string = environment.get_solicitud;
  public updateSolicitud : string = environment.update_solicitud;
  public getTipoSolicitud: string = environment.get_tipoSolicitud;
  public path = 'http://demo5983135.mockable.io/solpersonal';

  constructor(private http: HttpClient) { }

  getTipoSolicitudes() {
    return this.http.get(this.getTipoSolicitud);
  }

  getSolicutes() {
    return this.http.get(this.getSolicitud);
  }

  updateSolicitudes(idSolicitud : number, respuesta: boolean) {
    const body = {
      'id': idSolicitud,
      'respuesta': respuesta,
    };
    return this.http.put(this.updateSolicitud, body);
  }
}
