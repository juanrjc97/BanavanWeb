import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-respaldo',
  templateUrl: './respaldo.component.html',
  styleUrls: ['./respaldo.component.css'],
})
export class RespaldoComponent implements OnInit {
  size: NzButtonSize = 'large';
  fecha_respaldo: string = 'Viernes, 13 de Agosto del 2021';
  megas_respaldo: string = '0.58 Mb';

  constructor() {}

  ngOnInit(): void {}

  realizar_respaldo(){
    Swal.fire({
      title: '¿Deseas realizar el respaldo de la base de datos?',
      text: 'Se almacenarán en tu cuenta de Google Drive',
      showCancelButton: true,
      confirmButtonText: `Respaldar`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Respaldo exitoso!', '', 'success');
        this.fecha_respaldo = 'Domingo, 15 de Agosto del 2021';
        this.megas_respaldo = '0.71 Mb';
      }
    });
  };
}
