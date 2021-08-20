/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import {Injectable} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public userRole?: string;
  public menu: any[] = [];

  constructor(private auth: AuthService) {
    this.cargarMenu();
  }

  cargarMenu() {
    this.userRole = this.auth.getRol();
    if (this.userRole === 'Administrador') {
      const items = [
        {
          title: 'Inventarios',
          icon: 'container',
          submenu: [
            {title: 'Semanal', icon: 'table', path: 'inventario'},
            {title: 'Acumulado', icon: 'file-done', path: 'racimo'},
            {title: 'Enfundado', icon: 'schedule', path: 'apuntalado'},
          ],
        },
        {
          title: 'Reportes',
          icon: 'fund',
          submenu: [
            {title: 'Racimos', icon: 'table', path: 'inventarioRacimos'},
            {title: 'Enfunde', icon: 'file-done', path: 'enfunde'},
          ],
        },
      ];
      this.menu = items;
    } else if (this.userRole === 'Gerente') {
      const items = [
        {
          title: 'Finca',
          icon: 'dashboard',
          submenu: [
            {title: 'Lote', icon: 'table', path: 'lote'},
            {title: 'Cinta', icon: 'bg-colors', path: 'cinta'},
            {title: 'Semana', icon: 'schedule', path: 'semana'},
            {title: 'Motivo', icon: 'message', path: 'motivo'},
          ],
        },
      ];
      this.menu = items;
    }
  }
}
