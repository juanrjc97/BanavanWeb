/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Personal} from 'src/app/models/personal';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  public getPersonal: string = environment.get_personal;
  public postPersonal: string = environment.post_personal;
  public updatePersonal: string = environment.update_personal;

  constructor(private http: HttpClient, private auth: AuthService) {}
  public options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`,
    }),
  };
  cargarPersonal() {
    return this.http.get(this.getPersonal, this.options)
        .pipe(map((resp: any) => resp));
  }

  crearPersonal(Personal: Personal) {
    return this.http.post(this.postPersonal, Personal, this.options);
  }

  actualizarPersonal(Personal: Personal) {
    return this.http.put(`${this.updatePersonal}`, Personal, this.options);
  }
}
