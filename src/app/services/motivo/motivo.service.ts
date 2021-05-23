import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {


  public path: string = 'http://demo5983135.mockable.io/motivo';

  constructor(private http: HttpClient) { }

  cargarMotivos() {
    return this.http.get(this.path);
  }
  
}
