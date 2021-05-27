import { Component, OnInit } from '@angular/core';
import { Alerta } from 'src/app/models/alert';
import { ColorService } from 'src/app/services/color/color.service';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import {Color} from '../../models/color'
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  isVisible = false;
  public editCache: { [key: number]: { edit: boolean; data: Color } } = {};
  listOfCinta: Color[] = [];
  
  alerta: AlertsComponent = new AlertsComponent();

  succesPut: Alerta = {
    title: 'Cinta Actualizada',
    text: 'Actualización exitosa en la base de datos.',
    icon: 'success',
  };

  errorPut: Alerta = {
    title: 'Cinta No Actualizada',
    text: 'Error en la base de datos o desconexión.',
    icon: 'error',
  };

  constructor(private ColorService: ColorService) {}

  ngOnInit(): void {
    this.cargarCinta();
  }

  cargarCinta() {
    this.ColorService.cargarCinta().subscribe((resp: any) => {
      this.listOfCinta = resp;
      this.updateEditCache();
    });
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

/**Recibe el Color, id del objeto, index de la fila en la tabla */
  actualizarCinta(Color: Color, id: number, index: number) {
    this.ColorService.actualizarCinta(Color).subscribe(
      (resp: any) => {
        console.log(resp);
        console.log(Color);
        this.alerta.createBasicNotification(this.succesPut);
        Object.assign(this.listOfCinta[index], this.editCache[id].data);
        this.editCache[id].edit = false;
      },
      (err) => {
        console.log('Error: ' + err);
        this.alerta.createBasicNotification(this.errorPut);
      }
    );
  }

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfCinta.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfCinta[index] },
      edit: false,
    };
  }

  saveEdit(id: number): void {
    const index = this.listOfCinta.findIndex((item) => item.id === id);
    this.actualizarCinta(this.listOfCinta[index], id, index);
    /*Object.assign(this.listOfCinta[index], this.editCache[id].data);
    this.editCache[id].edit = false;*/
  }

  updateEditCache(): void {
    this.listOfCinta.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }, // con los 3 puntos se genera un copia completa del objeto al cual se le
        // esta iterando (crea otro elemento igual) es como una copia sin referencia
        //al objeto anterior
      };
    });
  }
}
