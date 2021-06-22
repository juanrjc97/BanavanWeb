import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/models/solicitudes';

@Component({
  selector: 'app-cosecha',
  templateUrl: './cosecha.component.html',
  styleUrls: ['./cosecha.component.css']
})
export class CosechaComponent implements OnInit {

  public size = 20;
  public listOfData: solicitud[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  aceptarSol(id: number):void {

  }
  rechazarSol(id: number): void{

  }

}
