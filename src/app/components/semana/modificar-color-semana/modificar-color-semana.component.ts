import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Color } from 'src/app/models/color';
import { DatePipe } from '@angular/common';

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

  constructor(
    private fb: FormBuilder,
    private ColorService: ColorService,
    private SemanasService: SemanasService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.cargarCinta();
    this.validateForm = this.fb.group({
      fecha: [null, [Validators.required]],
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
    let latest_date = this.datepipe.transform(this.selectedValueDate, 'dd/MM/yyyy');    
    semana.fecha = latest_date;

    this.SemanasService.actualizarSemanas(semana).subscribe(
      (resp: any) => {
        console.log(semana);
        Swal.fire('Cinta de semana actualizada', resp.message, 'success');
      },
      (err) => {
        Swal.fire('Error en la actualizacion', "", 'error');
      }
    );
  }


}
