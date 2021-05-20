import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lote } from 'src/app/models/lote';
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
    id: [null, [Validators.required, Validators.pattern("^[0-9]*$"),]  ],
    superficie: [null, [Validators.required, Validators.pattern("^[0-9]*$"),]]
  });

  constructor(private fb: FormBuilder, private loteService: LoteService) { }

  ngOnInit(): void {
    this.loteService.cargarLotes().subscribe( 
      (resp:any) => this.listOfData = resp.lotes
    )
  }

  //hacer aqui la llamada a ActualizarcrearLote
  guardarCambios(data: any){
    console.log(data);
  }

  //hacer aqui la llamada a EliminarcrearLote
  Eliminar(data: any){
    console.log(data);
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
    console.log(this.loteForm.value);
    this.isVisible = false;
    this.loteForm.reset();    
  }

  
 
  



}
