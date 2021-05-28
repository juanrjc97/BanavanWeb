import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from 'src/app/models/color';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  public get_post_cinta = environment.get_post_cinta;
  public update_cinta = environment.put_delete_cinta;

  constructor(private http: HttpClient) {}

  cargarCinta() {
    return this.http.get(this.get_post_cinta);
  }

  crearCinta(Cinta: Color) {
    return this.http.post(this.get_post_cinta, Cinta);
  }

  actualizarCinta(Cinta: Color) {
    return this.http.put(`${this.update_cinta}`, Cinta);
    
  }

  //Revisar esto
  eliminarCinta(id: number) {
    return this.http.delete(`${this.get_post_cinta}/${id}`);
    
  }
}
