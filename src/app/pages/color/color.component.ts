import { Component, OnInit } from '@angular/core';
import {Color} from '../../models/color'
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  listOfCinta: Color[] = [
    {
      id: 1,
      nombre: 'Azul',
      codigo: '#3342ff',
    },
    {
      id: 2,
      nombre: 'Amarilla',
      codigo: ' #fcff33',
    },
    {
      id: 3,
      nombre: 'Verde',
      codigo: ' #33ff4f',
    }
  ];

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
