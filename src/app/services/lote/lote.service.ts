import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lote } from 'src/app/models/lote';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  
  // Get: https://api.jsonbin.io/b/60a597c64e1de86b45d2222b
  //         CRUD lote/id
  // GET : http://demo5983135.mockable.io/lotes 
  // DELETE: /id
  // POST: misma url
  // PUT: /id
  public path: string = 'http://demo5983135.mockable.io/lotes';

  constructor(private http: HttpClient) { }

  cargarLotes() {
    return this.http.get(this.path);
  }

  crearLote(lote: Lote){ 
    return this.http.post(this.path, lote);
  }
  
  actualizarLote(lote: Lote){
    return this.http.put(`${this.path}/id`, lote);
  }

  eliminarLote(idLote: string){
    //agregar el idLote en el delete
    return this.http.delete(`${this.path}/id`);
  }

  


}
