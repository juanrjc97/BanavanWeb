import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class RepRacimoSemanaService {

  public getRepRacimo: string = environment.get_reporte_racimo_semana;

  constructor(private http: HttpClient,  private auth: AuthService) {}

  cargarReporteCosechadoso() {
    let currentYear = new Date().getFullYear();
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`,
      }),
      params: new HttpParams().append('anho', currentYear + ''),
    };
    return this.http.get(this.getRepRacimo, options);
  }
}
