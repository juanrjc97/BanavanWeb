import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  public get_roles = environment.get_rol;

  constructor(private http: HttpClient) {}

  cargarRol() {
    return this.http.get(this.get_roles);
  }

}
