import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
