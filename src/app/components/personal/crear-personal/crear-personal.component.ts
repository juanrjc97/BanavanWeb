import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PersonalService } from 'src/app/services/personal/personal.service';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { Alerta } from 'src/app/models/alert';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol/rol.service';

@Component({
  selector: 'app-crear-personal',
  templateUrl: './crear-personal.component.html',
  styleUrls: ['./crear-personal.component.css'],
})
export class CrearPersonalComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue = null;
  listOfRol: Rol[] = [];

  alerta: AlertsComponent = new AlertsComponent();

  successPersonal: Alerta = {
    title: 'Personal Agregado',
    text: 'Registro exitoso en la base de datos.',
    icon: 'success',
  };

  errorPersonal: Alerta = {
    title: 'Personal No Agregado',
    text: 'Error en la base de datos o desconexión.',
    icon: 'error',
  };

  constructor(
    private fb: FormBuilder,
    private PersonalService: PersonalService,
    private RolService: RolService
  ) {}

  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      rol: [null, [Validators.required]],
      cedula: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z0-9]*$'),
        ],
      ],
    });
    this.cargarRoles();
    //console.log(this.listOfRol);
  }

  cargarRoles() {
    this.RolService.cargarRol().subscribe((resp: any) => {
      this.listOfRol = resp;
      console.log(this.listOfRol);
      
    });
  }

  /** Crea el Personal con los datos del Form.
   * Muestra un feedback en caso exitoso o fallido.
   */
  crearPersonal() {
    const personal = {
      ...this.validateForm.value,
    };
    console.log(personal);
    this.PersonalService.crearPersonal(personal).subscribe(
      (resp: any) => {
        console.log(resp);
        this.alerta.createBasicNotification(this.successPersonal);
      },
      (err) => {
        console.log(err);
        this.alerta.createBasicNotification(this.errorPersonal);
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
      this.crearPersonal();
      this.validateForm.reset();
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
}
