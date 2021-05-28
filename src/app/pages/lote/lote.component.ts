import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lote } from 'src/app/models/lote';
import Swal from 'sweetalert2';
import { LoteService } from '../../services/lote/lote.service';


//para la tabla 
interface ItemData {
  Lote: number;
  Superficie: number;
}
@Component({
  selector: 'app-lote',
  templateUrl: './lote.component.html',
  styleUrls: ['./lote.component.css']
})
export class LoteComponent implements OnInit {

  public listOfData: Lote[] = [];
  public  size = 8;
  public  isVisible = false;

  public loteForm:FormGroup = this.fb.group({
    numLote: [null, [Validators.required, Validators.pattern("^[0-9]*$"),]  ],
    superficie: [null, [Validators.required, Validators.pattern("^[0-9]*$"),]]
  });

  constructor(private fb: FormBuilder, private loteService: LoteService) { }

  ngOnInit(): void {
      this.cargarLotes();
  }


  cargarLotes(){
    this.loteService.cargarLotes().subscribe( 
      (resp:any) => this.listOfData = resp.lotes
    )
  }

  //hacer aqui la llamada de post 
  crearLote( ){
    const lote = {
     ...this.loteForm.value
    }
    console.log(lote);
    this.loteService.crearLote(lote).subscribe(
      (resp:any)=>{
        Swal.fire('Nuevo Lote Creado', `El lote  se ha creado co Exito`, 'success')
        console.log(resp);
      },(err)=>{
        Swal.fire('Error','Ocurrio un erro al rear el Lote','error')
        console.log(err);
      }
    )
    

  }

  //hacer aqui la llamada a ActualizarLote
  ActualizarCambios(lote: Lote){
    this.loteService.actualizarLote(lote).subscribe(
      (resp:any)=>{
        Swal.fire('Lote Actualizado', 'El elemento se ha actualizado exitosamente','success')
        console.log(resp);
        console.log(lote);
      },(err)=>{
      Swal.fire('Error','No se ha actualizado el elemento','error')
      }
    )
    
  }


  //hacer aqui la llamada a EliminarcrearLote
  Eliminar(lote: Lote){
    this.loteService.eliminarLote(`${lote.id}`).subscribe(
      (resp:any)=>{
        Swal.fire('Lote Eliminado','Se ha eliminado exitosamente de la base', 'success')
        
        //this.listOfData.splice(lote,1);
        // activar esto cuando ya este el backend
        //this.cargarLotes();
      },(err)=>{
          console.log(err);
      }
    )
    
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.loteForm.reset();   
  }

  //hacer aqui la llamada a crearLote
  submitForm(): void {
    if (this.loteForm.invalid) {
      for (const i in this.loteForm.controls) {
        this.loteForm.controls[i].markAsDirty();
        this.loteForm.controls[i].updateValueAndValidity();
      }
      return;
    }
    this.crearLote();
    this.isVisible = false;
    this.loteForm.reset();    
  }

  
 
  



}
