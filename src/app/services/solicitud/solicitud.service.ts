import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  public path = "http://demo5983135.mockable.io/solpersonal";

  constructor(private http: HttpClient) { }

  getSolicutes(){
    return this.http.get(this.path);
  }
}
