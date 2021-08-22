import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RespaldoService {
  public post_backup = environment.post_backup;

  constructor(private http: HttpClient, private auth: AuthService) {}

  public options = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.auth.getToken()}`,
    }),
  };

  crearBackup() {
    return this.http.post(this.post_backup, "", this.options);
  }
}
