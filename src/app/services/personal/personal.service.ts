import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginForm } from 'src/app/models/login-form';
import { Personal } from 'src/app/models/personal';
import { environment } from 'src/environments/environment';
import axios from 'axios';

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
  
  login(formData: loginForm): Observable<any>{
    //agregar "login" al final de la url 
    // el pipe siempre regresa un observable 
    return this.http.post(`${this.updatePersonal}`, formData)
                   /* .pipe(
                      tap((resp: any) => {
                        // token es la llave con la que se guardara el dato
                        this.guardaMenu(resp.token, resp.menu);
                      } )
                    );*/
  }

  getCoockie(correo: string, pass: string){
    axios.get('https://coco-backend-api.herokuapp.com/sanctum/csrf-coockie').then(()=>{
      this.http.post('https://coco-backend-api.herokuapp.com/login', {email: correo, password: pass}).subscribe(
        (resp:any)=>{
          return resp;
        }
      );
    } );
   
  }

}
