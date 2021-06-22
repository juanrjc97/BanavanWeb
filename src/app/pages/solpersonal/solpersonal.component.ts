import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/models/solicitudes';
import { SolicitudService } from '../../services/solicitud/solicitud.service';

@Component({
  selector: 'app-solpersonal',
  templateUrl: './solpersonal.component.html',
  styleUrls: ['./solpersonal.component.css']
})
export class SolpersonalComponent implements OnInit {

  public size = 20;
  public listOfData: solicitud[] = [];

  constructor( private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.cargarSolicitud();
    console.log(this.listOfData);
  }

  cargarSolicitud(){
   this.solicitudService.getSolicutes().subscribe(
     ( resp : any)=>{
      console.log(resp);
      resp.solicitudes.forEach((elemento: solicitud) => {
        console.log(elemento.tipoSolicitud);
        if (elemento.tipoSolicitud === 1) {
            console.log("funka");
            this.listOfData.push(elemento);
        }
      });
      console.log(this.listOfData[0]);
     }
   )
  }
  aceptarSol(id: number):void {

  }
  rechazarSol(id: number): void{

  }

}
