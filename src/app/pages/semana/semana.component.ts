import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorService } from 'src/app/services/color/color.service';
import { SemanasService } from 'src/app/services/semanas/semanas.service';
import { Semana } from '../../models/semana';
import { Color } from '../../models/color';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css'],
})
export class SemanaComponent implements OnInit {
  validateForm!: FormGroup;
  isVisible = false;
  selectedValueDate = null;
  selectedValueCinta = null;
  listOfWeeks: Semana[] = [];
  listOfCinta: Color[] = [];
  checkedSemana = false;

  public editCache: { [key: number]: { edit: boolean; data: Semana } } = {};

  constructor(
    private SemanasService: SemanasService,
    private ColorService: ColorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cargarCinta();
    this.validateForm = this.fb.group({
      semana: [null, [Validators.required]],
      color: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    } else {
      this.actualizarCintaSemana();
      this.validateForm.reset();
    }
  }

  rellenar_lista(): void {
    this.SemanasService.cargarSemanas().subscribe(
      (resp: any) => {
        if (resp.semanas.length > 0) {
          for (let index = 0; index < resp.semanas.length; index++) {
            let element = resp.semanas[index];
            element.name_color = this.getColorId(element.color_id);
            //console.log(element);
            this.listOfWeeks = resp.semanas;
          }

          this.updateEditCache();
        }
        //console.log(this.listOfWeeks);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getColorId(color_id: string): string {
    let color: string = 'error-get-color';
    for (let index = 0; index < this.listOfCinta.length; index++) {
      let cinta = this.listOfCinta[index];
      if (cinta.id + '' === color_id) {
        color = cinta.nombre;
        return color;
      }
    }
    return color;
  }

  cargarCinta() {
    this.ColorService.cargarCinta().subscribe(
      (resp: any) => {
        this.listOfCinta = resp;
        this.rellenar_lista();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  actualizarCintaSemana() {
    const semana: any = {
      ...this.validateForm.value,
    };
    if (this.checkedSemana) {
      semana.semana_id = 1;
    } else {
      semana.semana_id = semana.semana;
    }
    this.SemanasService.actualizarSemanas(semana).subscribe(
      (resp: any) => {
        this.rellenar_lista();
        //console.log(semana);
        Swal.fire('Cinta de semana actualizada', resp.message, 'success');
      },
      (err) => {
        console.log(err);
        Swal.fire('Error en la actualizacion', '', 'error');
      }
    );
  }

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfWeeks.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfWeeks[index] },
      edit: false,
    };
  }

  saveEdit(id: number): void {
    const index = this.listOfWeeks.findIndex((item) => item.id === id);
    console.log(
      'El numero es ' +
        this.listOfWeeks[index].numero +
        ' y el anho: ' +
        this.listOfWeeks[index].anho +
        ' y el color y su ide es ' +
        this.listOfWeeks[index].name_color +
        this.listOfWeeks[index].color_id
    );

    this.actualizarUnicaSemana(this.editCache[id].data, id, index);
  }

  /**
   * Cambiar este metodo para llamar el endpoint respectivo para
   * actualizar unica semana.
   * Aparentemente el id se almacena en el name_color porque esa columna a editar
   * tiene referenciado el name_color
   */
  actualizarUnicaSemana(Semana: Semana, id: number, index: number) {
    const semana_seleccionada: any = {
      semana: Semana.id,
      color: Semana.name_color,
      //color : Semana.color_id
    };
    console.log(semana_seleccionada);
    this.SemanasService.actualizarSemanas(semana_seleccionada).subscribe(
      (resp: any) => {
        //console.log(resp);
        Swal.fire('Única semana modificada', '', 'success');
        Object.assign(this.listOfWeeks[index], this.editCache[id].data);
        this.rellenar_lista();
        this.editCache[id].edit = false;
      },
      (err) => {
        console.log(err);
        Swal.fire('Error', `Semana no actualizada`, 'error');
      }
    );
  }

  updateEditCache(): void {
    this.listOfWeeks.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }, // con los 3 puntos se genera un copia completa del objeto al cual se le
        // esta iterando (crea otro elemento igual) es como una copia sin referencia
        //al objeto anterior
      };
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
