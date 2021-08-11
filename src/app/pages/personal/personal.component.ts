import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Alerta } from 'src/app/models/alert';
import { Rol } from 'src/app/models/rol';
import { PersonalService } from 'src/app/services/personal/personal.service';
import { RolService } from 'src/app/services/rol/rol.service';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import {Personal} from '../../models/personal';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  public size = 8;
  public editCache: { [key: number]: { edit: boolean; data: Personal } } = {};
  selectedValue = null;
  alerta: AlertsComponent = new AlertsComponent();
  public listOfRol: Rol[] = [];
  listOfPersonal: Personal[] = [];
  isVisible = false;
  validateForm!: FormGroup;

  succesPut: Alerta = {
    title: 'Personal Actualizado',
    text: 'Actualización exitosa en la base de datos.',
    icon: 'success',
  };

  errorPut: Alerta = {
    title: 'Personal No Actualizado',
    text: 'Error en la base de datos o desconexión.',
    icon: 'error',
  };

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
      nombres: [null, [Validators.required]],
      apellidos: [null, [Validators.required]],
      rol: [null, [Validators.required]],
      cedula: [null, [Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]+$')]],
      email: [null, [Validators.required, Validators.email]],
      contrasena: [null, [Validators.required, Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
    this.cargarPersonal();
    this.cargarRoles();
  }

  cargarRoles() {
    this.listOfRol = this.RolService.cargarRol();
    /*this.RolService.cargarRol().subscribe((resp: any) => {
      this.listOfRol = resp;
      console.log(resp);
    });*/
  }

  cargarPersonal() {
    this.PersonalService.cargarPersonal().subscribe(
      (resp: any) => {
        this.listOfPersonal = resp;
        this.updateEditCache();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   * Actualiza personal
   * @param Personal Objeto de tipo Personal
   * @param id
   * @param index
   */
  actualizarPersonal(Personal: Personal, id: number, index: number) {
    this.PersonalService.actualizarPersonal(Personal).subscribe(
      (resp: any) => {
        //console.log(Personal);
        this.alerta.createBasicNotification(this.succesPut);
        Object.assign(this.listOfPersonal[index], this.editCache[id].data);
        this.editCache[id].edit = false;
        console.log(resp);
      },
      (err) => {
        console.log(err);
        this.alerta.createBasicNotification(this.errorPut);
      }
    );
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
      this.validateForm.reset();
  }

  startEdit(id: number): void {
    const index = this.listOfPersonal.findIndex((item) => item.id === id);
    //console.log(this.listOfPersonal[index]);

    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfPersonal.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfPersonal[index] },
      edit: false,
    };
  }

  saveEdit(id: number): void {
    const index = this.listOfPersonal.findIndex((item) => item.id === id);
    this.actualizarPersonal(this.editCache[id].data, id, index);
    /*Object.assign(this.listOfPersonal[index], this.editCache[id].data);
    this.editCache[id].edit = false;*/
  }

  updateEditCache(): void {
    this.listOfPersonal.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }, // con los 3 puntos se genera un copia completa del objeto al cual se le
        // esta iterando (crea otro elemento igual) es como una copia sin referencia
        //al objeto anterior
      };
    });
    //console.log(this.editCache);
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
        this.cargarPersonal();
        this.validateForm.reset();
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
    } else if (control.value !== this.validateForm.controls.contrasena.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
