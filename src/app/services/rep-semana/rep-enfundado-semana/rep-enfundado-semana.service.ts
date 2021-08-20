/* eslint-disable require-jsdoc */
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RepEnfundadoSemanaService {
  public getRepEnfundado: string = environment.get_reporte_enfundado_semana;

  constructor(private http: HttpClient, private auth: AuthService) {}

  cargarReporteEnfundado(year: number, hectarea: number) {
    const options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`,
      }),
      params: new HttpParams()
          .append('anho', year + '')
          .append('hectarea', hectarea + ''),
    };
    return this.http.get(this.getRepEnfundado, options);
  }
}
