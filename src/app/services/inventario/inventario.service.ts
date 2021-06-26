import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  //http://demo5983135.mockable.io/lotes
  // https://api.jsonbin.io/b/60a59f966dbafa6b0d356a7d

  public path: string = 'http://demo5983135.mockable.io/inventario';

  constructor( private http: HttpClient) { }

  cargarInventario(){
    return this.http.get(this.path)
    .pipe( 
      map((resp:any) => resp['inventarioSem'])
      );
  }
}
