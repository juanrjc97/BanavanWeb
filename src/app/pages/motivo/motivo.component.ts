/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Motivo} from 'src/app/models/motivo';
import {MotivoService} from '../../services/motivo/motivo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.css'],
})
export class MotivoComponent implements OnInit {
  public size = 20;
  public editCache: { [key: number]: { edit: boolean; data: Motivo } } = {};
  public listOfData: Motivo[] = [];

  public isVisible = false;

  public motivoForm:FormGroup = this.fb.group({
    titulo: [null, [Validators.required]],
    descripcion: [null, [Validators.required]],
  });


  constructor(private fb: FormBuilder,
              private motivoService: MotivoService ) { }

  ngOnInit(): void {
    this.cargarMotivos();
  }

  crearMotivo() {
    console.log(this.motivoForm.value);
    this.motivoService.crearMotivo(this.motivoForm.value).subscribe(
        (resp:any)=>{
          Swal.fire('Motivo Creado',
              'Nuevo motivo creado Exitosamente', 'success');
        }, (err)=>{
          Swal.fire('ERROR',
              'Ocurrio un error al crear el motivo, Intentalo mas tarde',
              'error');
        },
    );
  }

  cargarMotivos() {
    this.motivoService.cargarMotivos().subscribe(
        (resp:any)=>{
          this.listOfData = resp;
          this.updateEditCache();
        },
    );
  }


  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }


  saveEdit(id: number): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    const updateMotivo = this.editCache[id].data;
    this.motivoService.actualizarMotivo( updateMotivo).subscribe(
        (resp:any)=>{
          Swal.fire('Motivo Actualizado',
              'Se ha actualizado exitosamente', 'success');
          console.log('motivo actualizo');
          Object.assign(this.listOfData[index], this.editCache[id].data);
          this.editCache[id].edit = false;
        }, (err)=>{
          Swal.fire('Error',
              'Sucedio un error, no se pudo actualizar el elemento', 'error');
          this.editCache[id].edit = false;
          console.log('Error al actualizat el motivo' + id);
        },
    );
  }

  deleteRow(id: number): void {
    console.log(id);
    this.motivoService.eliminarMotivo(id).subscribe(
        (resp:any)=>{
          Swal.fire('Exito', 'Elemento eliminado correctamente', 'success');
          console.log('motivo eliminado');
          this.listOfData = this.listOfData.filter((d) => d.id !== id);
        }, (err)=>{
          Swal.fire('Error',
              'Ocurrio un error al eliminar el elemento', 'error');
          console.log(err);
        },
    );
  }


  updateEditCache(): void {
    this.listOfData.forEach(
        (item) => {
          this.editCache[item.id] = {
            edit: false,
            data: {...item},
          };
        },
    );
    // console.log(this.editCache);
  }

  // For modal
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.motivoForm.reset();
  }

  // hacer aqui la llamada a crearMotivo
  submitForm(): void {
    if (this.motivoForm.invalid) {
      // eslint-disable-next-line guard-for-in
      for (const i in this.motivoForm.controls) {
        this.motivoForm.controls[i].markAsDirty();
        this.motivoForm.controls[i].updateValueAndValidity();
      }
      return;
    }
    this.crearMotivo();
    this.cargarMotivos();
    this.isVisible = false;
    this.motivoForm.reset();
  }


  cancelEdit(id: number): void {
    const index = this.listOfData.findIndex( (item) => item.id === id);
    this.editCache[id] = {
      data: {...this.listOfData[index]},
      edit: false,
    };
  }
}
