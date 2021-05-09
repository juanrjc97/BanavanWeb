import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modificar-color-semana',
  templateUrl: './modificar-color-semana.html',
  styleUrls: ['./modificar-color-semana.css'],
})
export class ModificarColorSemanaComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue = null;
  selectedValueSemana = null;
  selectedValueCinta = null;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      anio: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      muestra: [null, [Validators.required]],
    });
  }
}
