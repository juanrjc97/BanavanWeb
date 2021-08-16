/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Lote} from 'src/app/models/lote';
import Swal from 'sweetalert2';
import {LoteService} from '../../services/lote/lote.service';


@Component({
  selector: 'app-lote',
  templateUrl: './lote.component.html',
  styleUrls: ['./lote.component.css'],
})
export class LoteComponent implements OnInit {
  public editCache: { [key: number]: { edit: boolean; data: Lote } } = {};
  public listOfData: Lote[] = [];
  public size = 8;
  public isVisible = false;

  public loteForm:FormGroup = this.fb.group({
    numero: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    superficie: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  constructor(private fb: FormBuilder, private loteService: LoteService) { }

  ngOnInit(): void {
    this.cargarLotes();
  }

  cargarLotes() {
    this.loteService.cargarLotes().subscribe(
        (resp:any) => {
          this.listOfData = resp.lotes;
          console.log(this.listOfData);
          this.updateEditCache();
        },
    );
  }

  // hacer aqui la llamada de post
  crearLote( ) {
    const lote = {
      ...this.loteForm.value,
    };
    console.log(lote);
    this.loteService.crearLote(lote).subscribe(
        (resp:any)=>{
          Swal.fire('Nuevo Lote Creado', `El lote  se ha creado co Exito`, 'success');
          this.cargarLotes();
        }, (err)=>{
          Swal.fire('Error', 'Ocurrio un erro al crear el Lote', 'error');
          console.log(err);
        },
    );
  }


  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  saveEdit(id: number): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
    console.log('lote compo');
    this.loteService.actualizarLote( this.editCache[id].data).subscribe(
        (resp:any)=>{
          Swal.fire('Lote Actualizado', 'Se ha actualizado exitosamente', 'success');
          console.log('Lote actualizo');
        }, (err)=>{
          Swal.fire('Error', 'Sucedio un error, no se pudo actualizar el elemento', 'error');
          this.editCache[id].edit = false;
          console.log('Error al actualizat el Lote' + id);
        },
    );
  }

  deleteRow(id: number): void {
    this.loteService.eliminarLote(id).subscribe(
        (resp:any)=>{
          Swal.fire('Exito', 'Elemento eliminado correctamente', 'success');
          console.log('Lote eliminado');
          this.listOfData = this.listOfData.filter((d) => d.id !== id);
        }, (err)=>{
          Swal.fire('Error', 'Ocurrio un error al eliminar el elemento', 'error');
          console.log('Error al elminar el Lote' + id + '\n' +err);
        },
    );
  }

  updateEditCache(): void {
    this.listOfData.forEach(
        (item) => {
          this.editCache[item.id] = {
            edit: false,
            data: {...item}, // con los 3 puntos se genera un copia completa del objeto al cual se le
            // esta iterando (crea otro elemento igual) es como una copia sin referencia
            // al objeto anterior
          };
        },
    );
    // console.log(this.editCache);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.loteForm.reset();
  }

  // hacer aqui la llamada a crearLote
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
