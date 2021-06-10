import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [
    {
      title :'Finca',
      icon: 'dashboard',
      submenu: [
        {title: 'Lote' ,  icon: 'table',      path: 'lote'},
        {title: 'Cinta' , icon: 'bg-colors',  path: 'cinta'},
        {title: 'Semana' ,icon: 'schedule',  path: 'semana'},
        {title: 'Motivo' , icon: 'message' ,path: 'motivo'},
      ],
    },
    {
      title :'Solicitud',
      icon: 'mail',
      submenu: [
        {title: 'Personal' , icon: 'team', path: 'solicitud-personal'},
        {title: 'Cosecha' , icon: 'scissor', path: 'cosecha'},
      ],
    }
  ]

  constructor() { }
}
