/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {solicitud} from 'src/app/models/solicitudes';
import {SolicitudService} from '../../services/solicitud/solicitud.service';
import Swal from 'sweetalert2';
import {delay} from 'rxjs/operators';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-solpersonal',
  templateUrl: './solpersonal.component.html',
  styleUrls: ['./solpersonal.component.css'],
})
export class SolpersonalComponent implements OnInit {
  public size = 20;
  public listOfData: solicitud[] = [];
  public tiposSolicitud: { [key: string]: { titulo:string} } = {};
  public cargando = true;

  constructor( private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.cargarTipos();
    this.cargarSolicitud();
    /* setTimeout(
        function() {
          location.reload();
        }, 10000);*/
  }

  cargarSolicitud() {
    this.solicitudService.getSolicutes().subscribe(
        ( resp : any)=>{
          resp.solicitudes.forEach((element:any) => {
            if (element.is_answered ==='0') {
              this.listOfData.push(element);
            }
          });
        }, (error)=>{
          Swal.fire('Error',
              'Sucedio un error al cargar las Solicitudes', 'error');
        },
    );
  }
  cargarTipos() {
    this.solicitudService.getTipoSolicitudes().subscribe(
        (resp:any)=>{
          resp.forEach((item:any) => {
            this.tiposSolicitud[`${item.id}`] = item.titulo;
          });
          this.cargando =false;
        },
    );
  }
  aceptarSol(id: number):void {
    this.solicitudService.updateSolicitudes(id, true)
        .pipe(delay(100)).subscribe(
            (resp:any)=>{
              if (resp.status) {
                this.cargando =true;
                this.cargarSolicitud();
                Swal.fire('Exito', resp.message, 'success');
                this.listOfData = [];
              } else {
                Swal.fire('Atención', resp.message, 'warning');
              }
            }, (error)=>{
              Swal.fire('Exito', error.message, 'error');
            },
        );
  }
  rechazarSol(id: number): void {
    this.solicitudService.updateSolicitudes(id, false)
        .pipe(delay(100)).subscribe(
            (resp:any)=>{
              if (resp.status) {
                this.cargando =true;
                this.cargarSolicitud();
                Swal.fire('Exito', resp.message, 'success');
                this.listOfData = [];
              } else {
                Swal.fire('Atención', resp.message, 'warning');
              }
            }, (error)=>{
              Swal.fire('Exito', error.message, 'error');
            },
        );
  }
}
