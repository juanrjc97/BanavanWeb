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
  
  selectedValueSemana = null;
  selectedValueCinta = null;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      semana: [null, [Validators.required]],
      cinta: [null, [Validators.required]],
    });
  }
}
