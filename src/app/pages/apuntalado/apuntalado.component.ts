/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {InventarioService} from '../../services/inventario/inventario.service';

@Component({
  selector: 'app-apuntalado',
  templateUrl: './apuntalado.component.html',
  styleUrls: ['./apuntalado.component.css'],
})
export class ApuntaladoComponent implements OnInit {
public data = {
  'headers': [
    'Lote',
    'Jueves',
    'Viernes',
    'Lunes',
    'Martes',
    'Miercoles',
    'Total',
  ],
  'lotes': {
    '0': {
      '0': 'Lote 1',
      '1': 120,
      '2': 130,
      '3': 130,
      '4': 130,
      '5': 130,
      '6': 640,
    },
    '1': {
      '0': 'Lote 2',
      '1': 120,
      '2': 130,
      '3': 130,
      '4': 130,
      '5': 130,
      '6': 640,
    },
    '2': {
      '0': 'Lote 1',
      '1': 120,
      '2': 130,
      '3': 130,
      '4': 130,
      '5': 130,
      '6': 640,
    },
    '3': {
      '0': 'Lote N',
      '1': 120,
      '2': 130,
      '3': 130,
      '4': 130,
      '5': 130,
      '6': 640,
    },
    '4': {
      '0': 'Total',
      '1': 600,
      '2': 600,
      '3': 600,
      '4': 600,
      '5': 600,
      '6': 3000,
    },
  },
}
public titulos:any = [];
public filas:any = [];
public cargando = true;
constructor(private inventarioService:InventarioService) { }

ngOnInit(): void {
  this.cargarInventario();
}


cargarInventario() {
  this.cargando =true;
  this.inventarioService.cargarEnfundado(4, 2019).subscribe(
      (resp:any)=>{
        console.log(resp);
        this.formatearResp(resp);
        this.cargando =false;
      },
  );
}

formatearResp(resp: any) {
  this.titulos = resp.headers;
  Object['values'](resp.dataset).forEach((element:any) => {
    this.filas.push(Object['values'](element));
  });
}
}
