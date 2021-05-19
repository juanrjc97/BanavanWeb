import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crear-color',
  templateUrl: './crear-color.component.html',
  styleUrls: ['./crear-color.component.css'],
})
export class CrearColorComponent implements OnInit {
  
  validateForm!: FormGroup;
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
      nombre: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      muestra: [null, [Validators.required]],
    });
  }

}
