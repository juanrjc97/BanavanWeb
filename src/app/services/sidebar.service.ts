/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public userRole: string = '';
  public menu: any[] = [];

  constructor() {
    if (this.userRole === 'admin') {
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
    } else {
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
