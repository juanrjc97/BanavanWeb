import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/models/solicitudes';

@Component({
  selector: 'app-cosecha',
  templateUrl: './cosecha.component.html',
  styleUrls: ['./cosecha.component.css']
})
export class CosechaComponent implements OnInit {

  public size = 20;
  public listOfData: solicitud[] = [{
    id: 1,
    solicitud_tipo_id : 1,
    mensaje : "Buenos dias, nos puede mandar 5 personas al  lote 10",
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
