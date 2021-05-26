import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Motivo } from 'src/app/models/motivo';
import { MotivoService } from '../../services/motivo/motivo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.css']
})
export class MotivoComponent implements OnInit {

  public size = 20;
  public editCache: { [key: number]: { edit: boolean; data: Motivo } } = {};
  public listOfData: Motivo[] = [];

  public  isVisible = false;
  public motivoForm:FormGroup = this.fb.group({
    titulo: [null, [Validators.required,]  ],
    Desc: [null, [Validators.required,]]
  });
 

  constructor(private fb: FormBuilder, private motivoService: MotivoService ) { }

  ngOnInit(): void {
    this.cargarMotivos();
    
  }

  crearMotivo(){
    console.log(this.motivoForm.value);
    this.motivoService.crearMotivo(this.motivoForm.value).subscribe(
      (resp:any)=>{
        Swal.fire('Motivo Creado','Nuevo motivo creado Exitosamente','success')
        
      },(err)=>{
        Swal.fire('ERROR', 'Ocurrio un error al crear el motivo, Intentalo mas tarde','error')
      }
    )
   
  }

  cargarMotivos(){
    this.motivoService.cargarMotivos().subscribe(
      (resp:any)=>{
      this.listOfData = resp.motivos;
        //console.log(resp.motivos);
        this.updateEditCache();
      }
    )
  }


  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

 

  saveEdit(id: number): void {
   
    this.motivoService.actualizarMotivo( this.listOfData[id]).subscribe(
      (resp:any)=>{
        console.log('motivo actualizo');
        const index = this.listOfData.findIndex(item => item.id === id);
        Object.assign(this.listOfData[index], this.editCache[id].data);
        this.editCache[id].edit = false;
      }, (err)=>{
        this.editCache[id].edit = false;
        console.log("Error al actualizat el motivo" + id);
      }
    )
  
  }

  deleteRow(id: number): void {
    this.motivoService.eliminarMotivo(id).subscribe(
      (resp:any)=>{
        Swal.fire('Exito',"Elemento eliminado correctamente",'success')
        console.log("motivo eliminado");
        this.listOfData = this.listOfData.filter(d => d.id !== id);
      },(err)=>{
        Swal.fire('Error',"Ocurrio un error al eliminar el elemento",'error')
        console.log("Error al elminar el motivo" + id + "\n" +err);
      }
    );
    
  }


  updateEditCache(): void {
    this.listOfData.forEach(
      item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item } // con los 3 puntos se genera un copia completa del objeto al cual se le
                          // esta iterando (crea otro elemento igual) es como una copia sin referencia 
                          //al objeto anterior 
      };
    }
    );
   // console.log(this.editCache);
  }

  //For modal 
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.motivoForm.reset();   
  }

  //hacer aqui la llamada a crearMotivo
  submitForm(): void {
    if (this.motivoForm.invalid) {
      for (const i in this.motivoForm.controls) {
        this.motivoForm.controls[i].markAsDirty();
        this.motivoForm.controls[i].updateValueAndValidity();
      }
      return;
    }
    this.crearMotivo();
    this.isVisible = false;
    this.motivoForm.reset();    
  }


  /* verificar mejor la funcinalidad de guardar
   cancelEdit(id: number): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }*/

}
