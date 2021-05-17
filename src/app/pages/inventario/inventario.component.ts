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
  public formSummitted = false;
  public semanafb: FormGroup = this.fb.group({
    rango: ['Between', Validators.required],
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
    if (!this.semanafb.valid) {
      return;
    }
    if (this.semanafb.get('rango')?.value ==='Between') {
         this.dataFiltrada =  this.listOfData.splice(1,5);
          console.log(this.dataFiltrada);
    }else{
      let temp: ItemData[] = this.listOfData.splice(0,1);
      let temp2: ItemData[] = this.listOfData.splice(5,this.listOfData.length );
     // this.dataFiltrada.unshift(temp);

      
      // this.listOfData.filter(1,5);
      console.log(this.listOfData );
    }
    this.formSummitted = true;
    

  }

 




}
