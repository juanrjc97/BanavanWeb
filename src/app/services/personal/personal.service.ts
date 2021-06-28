import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginForm } from 'src/app/models/login-form';
import { Personal } from 'src/app/models/personal';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  public getPersonal: string = environment.get_personal;
  public postPersonal: string = environment.post_personal;
  public updatePersonal: string = environment.update_personal;

  constructor(private http: HttpClient) {}

  cargarPersonal() {
    return this.http.get(this.getPersonal).pipe(map((resp: any) => resp));
  }

  crearPersonal(Personal: Personal) {
    return this.http.post(this.postPersonal, Personal);
  }

  actualizarPersonal(Personal: Personal) {
    return this.http.put(`${this.updatePersonal}`, Personal);
  }

  login(formData: loginForm): Observable<any> {
    //agregar "login" al final de la url
    // el pipe siempre regresa un observable
    return this.http.post(`${this.updatePersonal}`, formData);
    /* .pipe(
                      tap((resp: any) => {
                        // token es la llave con la que se guardara el dato
                        this.guardaMenu(resp.token, resp.menu);
                      } )
                    );*/
  }

  getCoockie(correo: string, pass: string) {}
}
