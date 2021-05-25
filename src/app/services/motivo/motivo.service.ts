import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motivo } from 'src/app/models/motivo';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {


  public path: string = 'http://demo5983135.mockable.io/motivo';
  //path para put motivo/id

  constructor(private http: HttpClient) { }

  crearMotivo( data: {titulo: string, desc: string}){
   
    return this.http.post(this.path, data);
  }

  cargarMotivos() {
    return this.http.get(this.path);
  }

  actualizarMotivo(motivo: Motivo){
    //luego cambiar por esto el id ${motivo.id}
    return this.http.put(`${this.path}/id`, motivo);
  }

  eliminarMotivo(idMotivo: number){
    return this.http.delete(`${this.path}/id`);
  }


  
}
