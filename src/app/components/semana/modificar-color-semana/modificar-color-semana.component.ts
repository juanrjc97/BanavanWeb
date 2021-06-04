import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Color } from 'src/app/models/color';
import { Semana } from 'src/app/models/semana';
import { ColorService } from 'src/app/services/color/color.service';
import { SemanasService } from 'src/app/services/semanas/semanas.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-color-semana',
  templateUrl: './modificar-color-semana.html',
  styleUrls: ['./modificar-color-semana.css'],
})
export class ModificarColorSemanaComponent implements OnInit {
  validateForm!: FormGroup;
  listOfCinta: Color[] = [];

  selectedValueDate = null;
  selectedValueCinta = null;

  submitForm(): void {
    if(this.validateForm.invalid){
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }else{
      this.actualizarCintaSemana();
      this.validateForm.reset();
    }
  }

  constructor(
    private fb: FormBuilder,
    private ColorService: ColorService,
    private SemanasService: SemanasService
  ) {}

  ngOnInit(): void {
    this.cargarCinta();
    this.validateForm = this.fb.group({
      semana: [null, [Validators.required]],
      cinta: [null, [Validators.required]],
    });
  }

  cargarCinta() {
    this.ColorService.cargarCinta().subscribe((resp: any) => {
      this.listOfCinta = resp;
    });
  }

  actualizarCintaSemana() {
    const semana: any = {
      ...this.validateForm.value,
    };
    semana.idSession = 1;
    

    this.SemanasService.actualizarSemanas(semana).subscribe(
      (resp: any) => {
        console.log(semana);
        console.log(resp);       

        Swal.fire(
          'Cinta de semana actualizada',
          `Actualizado con exito`,
          'success'
        );
      },
      (err) => {
        Swal.fire('Error en la actualizacion', err, 'error');
      }
    );
  }
}
