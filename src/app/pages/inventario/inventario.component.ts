import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from '../../services/inventario/inventario.service';

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

  public listOfData: Inventario[] = [];
  // public dataFiltrada: Inventario[] =[];
  constructor( private fb: FormBuilder, private inventarioService: InventarioService) { 
   
  }

  ngOnInit(): void {
    
    this.cargarInvetario();
  }

  buscarSemana(){ 

    if (!this.semanafb.valid ||
        this.semanafb.get('minimo')?.value === this.semanafb.get('maximo')?.value
        || this.semanafb.get('minimo')?.value <0 
        || this.semanafb.get('maximo')?.value <0
        || this.semanafb.get('maximo')?.value > this.listOfData.length) {
      return this.listOfData;
    }else if(this.semanafb.get('rango')?.value ==='Entre') {
        if (this.semanafb.get('maximo')?.value < this.listOfData.length ) {
          this.semanafb.disable();
          return this.listOfData =  this.listOfData.slice(this.semanafb.get('minimo')?.value -1,
                             this.semanafb.get('maximo')?.value );
        
        }else{
          this.semanafb.disable();
          return this.listOfData =  this.listOfData.slice(this.semanafb.get('minimo')?.value -1,
                             this.semanafb.get('maximo')?.value);  
          
        }        
    }else{
      return this.listOfData;
    }
    
  }

  resetData():void{
      this.semanafb.enable()
      this.semanafb.setValue( {'rango':'Entre','minimo':'','maximo':'' }) ;
      const data = [];
      this.cargarInvetario();
      
  }

  cargarInvetario(){
    this.inventarioService.cargarInventario().subscribe(
      (inventarioSem)=> this.listOfData = inventarioSem
    )
  }
 




}
