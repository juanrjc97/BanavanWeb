/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {inventarioRacimos} from 'src/app/models/inventarioRacimo';
import { InventarioService } from '../../services/inventario/inventario.service';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-racimo',
  templateUrl: './racimo.component.html',
  styleUrls: ['./racimo.component.css'],
})
export class RacimoComponent implements OnInit {
  public listOfData: inventarioRacimos[] = [
    {
      color: 'Amarillo',
      semana: 1,
      lote: 1,
      enfundado: 100,
      cosechado: 200,
      cPerdida: 100,
    },
    {
      color: 'Azul',
      semana: 2,
      lote: 2,
      enfundado: 300,
      cosechado: 500,
      cPerdida: 200,
    },
    {
      color: 'Rojo',
      semana: 3,
      lote: 4,
      enfundado: 400,
      cosechado: 800,
      cPerdida: 400,
    },
    {
      color: 'Rojo',
      semana: 4,
      lote: 4,
      enfundado: 400,
      cosechado: 800,
      cPerdida: 400,
    },
    {
      color: 'Rojo',
      semana: 5,
      lote: 4,
      enfundado: 400,
      cosechado: 800,
      cPerdida: 400,
    },
    {
      color: 'Rojo',
      semana: 6,
      lote: 4,
      enfundado: 400,
      cosechado: 800,
      cPerdida: 400,
    },
  ];
  public filterlote = [
    {text: '1', value: 1},
    {text: '2', value: 2},
    {text: '3', value: 3},
    {text: '4', value: 4},
    {text: '5', value: 5},
    {text: '6', value: 6},
    {text: '7', value: 7},
    {text: '8', value: 8},
  ];
  public size = 20;
  public formSummitted = true;
  public semanafb: FormGroup = this.fb.group({
    rango: ['Entre', Validators.required],
    minimo: ['', [Validators.required]],
    maximo: ['', [Validators.required]],
  }) ;
  public loteFilterFn = (list: string[], item: inventarioRacimos) => list.some(
      (lote) => item.lote.toString().indexOf(lote) !== -1,
      this.semanafb.disable(),
  );
  /**
   * params:
   */
  constructor(private fb: FormBuilder) { }

  /**
   * params:
   */
  ngOnInit(): void {
    this.cargarInvetario();
  }
  /**
  * @return {array} Una lista de datos filtrados.
   */
  buscarSemana() {
    if (!this.semanafb.valid ||
        this.semanafb.get('minimo')?.value === this.semanafb
            .get('maximo')?.value ||
        this.semanafb.get('minimo')?.value <0 ||
        this.semanafb.get('maximo')?.value <0 ||
        this.semanafb.get('maximo')?.value > this.listOfData.length) {
      return this.listOfData;
    } else if (this.semanafb.get('rango')?.value ==='Entre') {
      if (this.semanafb.get('maximo')?.value < this.listOfData.length ) {
        this.semanafb.disable();
        return this.listOfData = this.listOfData
            .slice(this.semanafb.get('minimo')?.value -1,
                this.semanafb.get('maximo')?.value );
      } else {
        this.semanafb.disable();
        return this.listOfData = this.listOfData
            .slice(this.semanafb.get('minimo')?.value -1,
                this.semanafb.get('maximo')?.value);
      }
    } else {
      return this.listOfData;
    }
  }
  /**
   * params
   */
  resetData():void {
    this.semanafb.enable();
    this.semanafb.setValue( {'rango': 'Entre', 'minimo': '', 'maximo': ''});
    const data = [];
    this.cargarInvetario();
  }
  /**
   * params
   */
  cargarInvetario() {
   
  }
}
