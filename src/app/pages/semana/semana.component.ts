import { Component, OnInit } from '@angular/core';
import { SemanasService } from 'src/app/services/semanas/semanas.service';
import { Semana } from '../../models/semana';

@Component({
  selector: 'app-semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css'],
})
export class SemanaComponent implements OnInit {
  isVisible = false;
  listOfWeeks: Semana[] = [];

  constructor(private SemanasService: SemanasService) {}

  ngOnInit(): void {
    this.rellenar_lista();
  }

  rellenar_lista(): void {
    this.SemanasService.cargarSemanas().subscribe((resp: any) => {
      this.listOfWeeks = resp;
      console.log(resp);
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
}
