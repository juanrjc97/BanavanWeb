import { Component } from '@angular/core';
import {Alerta} from '../../models/alert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

//https://atit53.medium.com/how-to-make-resuable-sweetalert2-in-angular-9756652bb2c7
export class AlertsComponent {
  createBasicNotification(alerta: Alerta) {
    return Swal.fire({
      title: alerta.title,
      text: alerta.text,
      icon: alerta.icon,
      confirmButtonColor: '#40a9ff',
    });
  }
}
