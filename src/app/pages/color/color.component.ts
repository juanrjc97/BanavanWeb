import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Alerta } from 'src/app/models/alert';
import { ColorService } from 'src/app/services/color/color.service';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import {Color} from '../../models/color'
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  isVisible = false;
  public editCache: { [key: number]: { edit: boolean; data: Color } } = {};
  listOfCinta: Color[] = [];

  public color1: string = '#2889e9';

  public validateForm:FormGroup = this.fb.group({
    nombre: [null, [Validators.required]]
  });

  alerta: AlertsComponent = new AlertsComponent();

  succesPut: Alerta = {
    title: 'Cinta Actualizada',
    text: 'Actualización exitosa en la base de datos.',
    icon: 'success',
  };

  errorPut: Alerta = {
    title: 'Cinta No Actualizada',
    text: 'Error en la base de datos o desconexión.',
    icon: 'error',
  };

  successDelete: Alerta = {
    title: 'Cinta Eliminada',
    text: 'Borrado exitoso en la base de datos.',
    icon: 'success',
  };

  errorDelete: Alerta = {
    title: 'Cinta No Eliminada',
    text: 'Error en la base de datos o desconexión.',
    icon: 'error',
  };

  constructor(private fb: FormBuilder, private ColorService: ColorService) {}

  ngOnInit(): void {
    this.cargarCinta();
  }

  cargarCinta() {
    this.ColorService.cargarCinta().subscribe(
      (resp: any) => {
        this.listOfCinta = resp;
        this.updateEditCache();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  crearCinta() {
    const cinta = {
      ...this.validateForm.value,
    };
    cinta.hex_code = this.color1;
    console.log(cinta);
    this.ColorService.crearCinta(cinta).subscribe(
      (resp: any) => {
        console.log(resp);
        this.validateForm.reset();
        this.isVisible = false;
        Swal.fire(
          'Nueva cinta Agregada',
          `La cinta  se ha creado con éxito`,
          'success'
        );
        this.cargarCinta();
      },
      (err) => {
        console.log(err);
        Swal.fire(
          'Cinta No Agregada',
          `Error en la base de datos o desconexión.`,
          'error'
        );
      }
    );
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    } else {
      this.crearCinta();
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.validateForm.reset();
    this.isVisible = false;
  }

  /**Recibe el Color, id del objeto, index de la fila en la tabla */
  actualizarCinta(Color: Color, id: number, index: number) {
    this.ColorService.actualizarCinta(Color).subscribe(
      (resp: any) => {
        console.log(resp);
        console.log(Color);
        this.alerta.createBasicNotification(this.succesPut);
        Object.assign(this.listOfCinta[index], this.editCache[id].data);
        this.editCache[id].edit = false;
      },
      (err) => {
        console.log(err);
        this.alerta.createBasicNotification(this.errorPut);
      }
    );
  }

  deleteRow(Cinta: Color, id: number): void {
    this.ColorService.eliminarCinta(Cinta).subscribe(
      (resp: any) => {
        this.listOfCinta = this.listOfCinta.filter((d) => d.id !== id);
        this.alerta.createBasicNotification(this.successDelete);
      },
      (err) => {
        this.alerta.createBasicNotification(this.errorDelete);
        console.log('Error al elminar el color' + id );
        console.log(err);
        
      }
    );
  }

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfCinta.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfCinta[index] },
      edit: false,
    };
  }

  saveEdit(id: number): void {
    const index = this.listOfCinta.findIndex((item) => item.id === id);
    console.log(
      'El nombre es ' +
        this.listOfCinta[index].nombre +
        ' y el codigo: ' +
        this.listOfCinta[index].hex_code
    );

    this.actualizarCinta(this.editCache[id].data, id, index);
    /*Object.assign(this.listOfCinta[index], this.editCache[id].data);
    this.editCache[id].edit = false;*/
  }

  updateEditCache(): void {
    this.listOfCinta.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }, // con los 3 puntos se genera un copia completa del objeto al cual se le
        // esta iterando (crea otro elemento igual) es como una copia sin referencia
        //al objeto anterior
      };
    });
  }
}
