import { Component, OnInit } from '@angular/core';
import {Personal} from '../../models/personal';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  isVisible = false;

  listOfPersonal: Personal[] = [
    {
      id: 1,
      nombres: 'John',
      apellidos: 'Brown',
      cedula: '0983243565',
      rol: 'Admin',
      activo: 'Si',
      username: 'jbrown'
    },
    {
      id: 2,
      nombres: 'Jim',
      apellidos: 'Green',
      cedula: '0983243565',
      rol: 'Gerente',
      activo: 'Si',
      username: 'jgreen'
    },
    {
      id: 3,
      nombres: 'Joe',
      apellidos: 'Black',
      cedula: '0983243565',
      rol: 'JefeCampo',
      activo: 'Si',
      username: 'jblack'
    }
  ];

  constructor() { }

  ngOnInit(): void {
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

}
