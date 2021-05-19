import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//para la tabla 
interface ItemData {
  Semana: number;
  enfundado: number;
  Cosechado: number;
  CPerdida: number;
  fecha: string;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})


export class InventarioComponent implements OnInit {

  public  size = 20;
  public formSummitted = true;
  public semanafb: FormGroup = this.fb.group({
    rango: ['Entre', Validators.required],
    minimo: ['', [Validators.required]],
    maximo: [ '', [Validators.required]],
  }) ;   

  public listOfData: ItemData[] = [];
  public dataFiltrada: ItemData[] =[];
  constructor( private fb: FormBuilder) { 
   
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        Semana: i,
        enfundado: i+10,
        Cosechado: i+15,
        CPerdida: i+20,
        fecha: '20-2-2021'
      });
    }
    this.listOfData = data;
  }

  buscarSemana(){ 
    if (!this.semanafb.valid ||
        this.semanafb.get('minimo')?.value === this.semanafb.get('maximo')?.value
        || this.semanafb.get('minimo')?.value <0 
        || this.semanafb.get('maximo')?.value <0
        || this.semanafb.get('maximo')?.value > this.listOfData.length) {
      return;
    }
    if (this.semanafb.get('rango')?.value ==='Entre') {
        if (this.semanafb.get('maximo')?.value < this.listOfData.length ) {
          this.listOfData =  this.listOfData.slice(this.semanafb.get('minimo')?.value,
          this.semanafb.get('maximo')?.value + 1);
          this.semanafb.disable();
          return;
        }else{
          this.listOfData =  this.listOfData.slice(this.semanafb.get('minimo')?.value,
          this.semanafb.get('maximo')?.value);
          this.semanafb.disable();
          return;
        }
             
    }
  }

  resetData():void{
      this.semanafb.enable()
      this.semanafb.setValue( {'rango':'Entre','minimo':'','maximo':'' }) ;
      const data = [];
      for (let i = 0; i < 20; i++) {
        data.push({
          Semana: i,
          enfundado: i+10,
          Cosechado: i+15,
          CPerdida: i+20,
          fecha: '20-2-2021'
        });
      }
      this.listOfData = data;
      
  }
 




}
