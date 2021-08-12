/* eslint-disable require-jsdoc */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Rol} from 'src/app/models/rol';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  // public get_roles = environment.get_rol;
  public listOfRol: Rol[] = [
    {
      id: 1,
      nombre: 'Gerente',
    },
    {
      id: 2,
      nombre: 'Administrador',
    },
    {
      id: 3,
      nombre: 'Jefe de Bodega',
    },
    {
      id: 4,
      nombre: 'Jefe de Campo',
    },
    {
      id: 5,
      nombre: 'Recibidor de Fruta',
    },
    {
      id: 6,
      nombre: 'Enfundador',
    },
    {
      id: 7,
      nombre: 'Calibrador',
    },
    {
      id: 8,
      nombre: 'Trabajador',
    },
  ];

  constructor() {}

  cargarRol() {
    return this.listOfRol;
  }
}
