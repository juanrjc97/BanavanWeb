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
  public path = 'http://demo5983135.mockable.io/solpersonal';

  constructor(private http: HttpClient) { }

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
