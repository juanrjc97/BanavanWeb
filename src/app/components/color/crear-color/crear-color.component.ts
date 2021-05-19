import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ColorEvent } from 'ngx-color';

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

  handleChange($event: ColorEvent) {
    console.log($event.color);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      codigo: [null, [Validators.required]]
    });
  }

}
