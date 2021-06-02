import { Component, OnInit } from '@angular/core';
import { Semana } from '../../models/semana';

@Component({
  selector: 'app-semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css'],
})
export class SemanaComponent implements OnInit {
  isVisible = false;
  listaOfColors: string[] = [
    'Amarilla',
    'Verde',
    'Azul',
    'Blanca',
    'Negro',
    'Lila',
    'Roja',
    'Cafe',
  ];

  listOfWeeks: Semana[] = [];

  rellenar_lista(): void{
    for (let index = 0; index < 8; index++) {
      this.listOfWeeks.push({
        id: 100 + index,
        semana: (15 + index).toString(),
        fecha_inicial: "02/05/2021",
        cinta: this.listaOfColors[index],
      });
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.rellenar_lista();
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
