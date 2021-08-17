import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RepRacimoSemanaService {

  public getRepRacimo: string = environment.get_reporte_racimo_semana;

  constructor(private http: HttpClient) {}

  cargarReporteCosechadoso() {
    let currentYear = new Date().getFullYear();
    let options = {
      params: new HttpParams().append('anho', 2019 + ''),
    };
    return this.http.get(this.getRepRacimo, options);
  }
}
