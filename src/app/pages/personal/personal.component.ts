import { Component, OnInit } from '@angular/core';
import { Alerta } from 'src/app/models/alert';
import { PersonalService } from 'src/app/services/personal/personal.service';
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
  alerta: AlertsComponent = new AlertsComponent();

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

  listOfPersonal: Personal[] = [];
  isVisible = false;

  constructor(private PersonalService: PersonalService) {}

  ngOnInit(): void {
    this.cargarPersonal();
    console.log(this.listOfPersonal);
  }

  cargarPersonal() {
    this.PersonalService.cargarPersonal().subscribe((resp: any) => {
      this.listOfPersonal = resp;
      this.updateEditCache();
    });
  }

  //hacer aqui la llamada a ActualizarPersonal
  actualizarPersonal(Personal: Personal, id: number, index: number) {
   
    this.PersonalService.actualizarPersonal(Personal).subscribe(
      (resp: any) => {
        console.log(resp);
        console.log(Personal);
        this.alerta.createBasicNotification(this.succesPut);
        Object.assign(this.listOfPersonal[index], this.editCache[id].data);
        this.editCache[id].edit = false;
      },
      (err) => {
        console.log('Error: ' + err);
        this.alerta.createBasicNotification(this.errorPut);
      }
    );
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfPersonal.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfPersonal[index] },
      edit: false,
    };
  }

  //Falta Validar que si arroja un error en el Put, no hacer actualizacion
  saveEdit(id: number): void {
    const index = this.listOfPersonal.findIndex((item) => item.id === id);
    this.actualizarPersonal(this.listOfPersonal[index], id, index);
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
    console.log(this.editCache);
  }
}
