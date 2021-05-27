import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Alerta } from 'src/app/models/alert';
import { ColorService } from 'src/app/services/color/color.service';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';

@Component({
  selector: 'app-crear-color',
  templateUrl: './crear-color.component.html',
  styleUrls: ['./crear-color.component.css'],
})
export class CrearColorComponent implements OnInit {
  public color1: string = '#2889e9';
  validateForm!: FormGroup;

  alerta: AlertsComponent = new AlertsComponent();

  successCinta: Alerta = {
    title: 'Cinta Agregado',
    text: 'Registro exitoso en la base de datos.',
    icon: 'success',
  };

  errorCinta: Alerta = {
    title: 'Cinta No Agregada',
    text: 'Error en la base de datos o desconexión.',
    icon: 'error',
  };

  crearCinta() {
    const cinta = {
      ...this.validateForm.value
    };
    cinta.codigo = this.color1
    console.log(cinta);
    this.ColorService.crearCinta(cinta).subscribe(
      (resp: any) => {
        console.log(resp);
        this.alerta.createBasicNotification(this.successCinta);
      },
      (err) => {
        console.log(err);
        this.alerta.createBasicNotification(this.errorCinta);
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
      this.validateForm.reset();
    }
  }

  constructor(private fb: FormBuilder, private ColorService: ColorService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]]
    });
  }
}
