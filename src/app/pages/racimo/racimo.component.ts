/* eslint-disable guard-for-in */
/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {inventarioRacimos} from 'src/app/models/inventarioRacimo';
import Swal from 'sweetalert2';
import {InventarioService} from '../../services/inventario/inventario.service';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-racimo',
  templateUrl: './racimo.component.html',
  styleUrls: ['./racimo.component.css'],
})
export class RacimoComponent implements OnInit {
 

  public size = 20;
  public formSummitted = true;
  public titulos:any = [];
  public filas:any = [];
  public cargando = true;
  public semanafb: FormGroup = this.fb.group({
    rango: ['Entre', Validators.required],
    minimo: ['', [Validators.required]],
    maximo: ['', [Validators.required]],
  }) ;
  public filterForm: FormGroup = this.fb.group({
    anho: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
  });
  public filterLote: FormGroup = this.fd.group({
    numeroLote: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
  });
  /**
   * params:
   */
  constructor(private fb: FormBuilder, private fd: FormBuilder,
    private inventarioService:InventarioService) { }

  /**
   * params:
   */
  ngOnInit(): void {

  }
  /**
  * @return {array} Una lista de datos filtrados.
   */
  buscarSemana() {
    if (!this.semanafb.valid ||
        this.semanafb.get('minimo')?.value === this.semanafb
            .get('maximo')?.value ||
        this.semanafb.get('minimo')?.value <=0 ||
        this.semanafb.get('maximo')?.value <=0 ||
        this.semanafb.get('maximo')?.value > 52) {
      Swal.fire('Warning', 'Verifique que los datos sean correctos', 'warning');
      return this.filas;
    } else if (this.semanafb.get('rango')?.value ==='Entre') {
      if (this.semanafb.get('maximo')?.value < 52 ) {
        this.semanafb.disable();
        const temporal:any[] = [];
        this.filas.forEach((iterador:any) => {
          console.log(parseInt(iterador[1]));
          if ( parseInt(iterador[1]) > this.semanafb.get('minimo')?.value -1 &&
               parseInt(iterador[1])< this.semanafb.get('maximo')?.value ) {
            temporal.push(iterador);
          }
        });
        return this.filas = temporal;
      }
    } else {
      return this.filas;
    }
  }

  filtrarLote() {
    if (!this.filterLote.valid ||
      this.filterLote.get('numeroLote')?.value <=0) {
      Swal.fire('Warning', 'Verifique que los datos sean correctos', 'warning');
      return this.filas;
    } else {
      this.filterLote.disable();
      const temporal:any[] = [];
      this.filas.forEach((iterador:any) => {
        console.log(parseInt(iterador[2]));
        if ( parseInt(iterador[2]) ===
             this.filterLote.get('numeroLote')?.value ) {
          temporal.push(iterador);
        }
      });
      return this.filas = temporal;
    }
  }
  /**
   * params
   */
  resetData():void {
    this.semanafb.enable();
    this.semanafb.setValue( {'rango': 'Entre', 'minimo': '', 'maximo': ''});
    this.filas = [];
    this.cargarInvetario();
  }

  resetLotes():void {
    this.filterLote.enable();
    this.filterLote.setValue( {'numeroLote': ''});
    this.filas = [];
    this.cargarInvetario();
  }

  formatearResp(resp: any) {
    this.titulos = resp.headers;
    Object['values'](resp.dataset).forEach((element:any) => {
      this.filas.push(Object['values'](element));
    });
  }
  /**
   * params
   */
  cargarInvetario(anho?:number) {
    const today = new Date();
    const year = today.getFullYear();
    if (anho!> year) {
      Swal.fire('Warning', 'Revise el año que ingreso', 'warning');
      return;
    }
    this.filas = [];
    this.cargando =true;
    this.inventarioService.cargarxLote(anho).subscribe(
        (resp:any)=>{
          console.log(resp);
          this.formatearResp(resp);
          this.cargando =false;
        }, (error)=>{
          Swal.fire('Ocurrio un error inesperado', '', 'error');
        },
    );
  }

  submitForm() {
    if (this.filterForm.invalid) {
      for (const i in this.filterForm.controls) {
        this.filterForm.controls[i].markAsDirty();
        this.filterForm.controls[i].updateValueAndValidity();
      }
      return;
    }

    this.cargarInvetario(this.filterForm.get('anho')?.value );
    console.log(this.filterForm.value);
  }
}
