import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepEnfundadoSemanaService {
  public getRepEnfundado: string = environment.get_reporte_enfundado_semana;

  constructor(private http: HttpClient) {}

  cargarReporteEnfundado(year: number) {
    let options = {
      params: new HttpParams().append('anho', year + ''),
    };
    return this.http.get(this.getRepEnfundado, options);
  }


}
