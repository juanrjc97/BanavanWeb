import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  public userRole: string = '' ; 
  public menu: any[] = [
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
    },
    {
      title :'Inventario',
      icon: 'container',
      submenu: [
        {title: 'Racimo' ,  icon: 'table',      path: 'racimo'},
        {title: 'Enfundados' , icon: 'file-done',  path: 'enfudado'},
        {title: 'Apuntalado' ,icon: 'schedule',  path: 'apuntalado'},
      ],
      
    },
    {
      title :'Reportes',
      icon: 'fund',
      submenu: [
        {title: 'Racimos' ,  icon: 'table',      path: 'inventarioRacimos'},
        {title: 'Enfunde' , icon: 'file-done',  path: 'enfunde'},
        {title: 'Semanas' ,icon: 'schedule',  path: 'semanasRacimos'},
        {title: 'Perdidos' ,icon: 'stop',  path: 'racimosPerdidos'},
      ],
      
    }
  ]

  constructor() {
    if (this.userRole === 'admin') {
      this.menu.splice(0,2);  
    }else{
      this.menu.splice(2,2);  
    }
   }
}
