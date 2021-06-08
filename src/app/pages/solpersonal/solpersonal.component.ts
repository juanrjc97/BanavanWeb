import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/models/solicitudes';

@Component({
  selector: 'app-solpersonal',
  templateUrl: './solpersonal.component.html',
  styleUrls: ['./solpersonal.component.css']
})
export class SolpersonalComponent implements OnInit {

  public size = 20;
  public listOfData: solicitud[] = [{
    id: 1,
    solicitud_tipo_id : 1,
    mensaje : "Buenos dias, nos puede mandar una jaba al lote 10",
    is_accepted: false,
  }];

  constructor() { }

  ngOnInit(): void {
  }

  aceptarSol(id: number):void {

  }
  rechazarSol(id: number): void{

  }

}
