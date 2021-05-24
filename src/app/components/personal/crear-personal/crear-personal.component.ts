import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
//import { AlertaService } from 'src/app/services/alerta/alerta.service';
import { PersonalService } from 'src/app/services/personal/personal.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-crear-personal',
  templateUrl: './crear-personal.component.html',
  styleUrls: ['./crear-personal.component.css'],
})
export class CrearPersonalComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue = null;
  //alerta = AlertaComponent;

  constructor(
    private fb: FormBuilder,
    private PersonalService: PersonalService,
    //private NzNotificationService: NzNotificationService,
    //private AlertaService: AlertaService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      rol: [null, [Validators.required]],
      cedula: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]*$')]],
    });
  }

  /*createBasicNotification(type: string, title: string, content: string): void {
    this.NzNotificationService.create(type, title, content);
  }*/

  crearPersonal() {
    const personal = {
      ...this.validateForm.value,
    };
    console.log(personal);
    this.PersonalService.crearPersonal(personal).subscribe(
      (resp: any) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submitForm(): void {
    if ( this.validateForm.invalid ) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    } else {
      this.crearPersonal();
      this.validateForm.reset();
      //this.AlertaService.createBasicNotification("success","Personal Agregado","Guardado exitosamente en la base");
      /*this.createBasicNotification(
        'success',
        'Personal Agregado',
        'Guardado exitosamente en la base'
      );*/
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

  /*getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }*/
}
