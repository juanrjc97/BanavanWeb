import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personal } from 'src/app/models/personal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  public getPersonal: string = environment.get_post_personal;
  public updatePersonal: string = environment.update_personal;

  constructor(private http: HttpClient) {}

  cargarPersonal() {
    return this.http.get(this.getPersonal);
  }

  crearPersonal(Personal: Personal) {
    return this.http.post(this.getPersonal, Personal);
  }

  actualizarPersonal(Personal: Personal) {
    return this.http.put(`${this.updatePersonal}`, Personal);
  }
}
