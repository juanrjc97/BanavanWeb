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
    this.cargando =true;
    this.solicitudService.getSolicutes().subscribe(
        ( resp : any)=>{
          this.cargarTipos();
          resp.solicitudes.forEach((element:any) => {
            if (element.is_answered ==='0') {
              this.listOfData.push(element);
            }
          });
          console.log(this.listOfData);
          this.cargando =false;
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
          // this.cargando =false;
        },
    );
  }

  aceptarSol(id: number) {
    Swal.fire({
      title: 'Esta seguro de aceptar la solicitud?',
      text: 'Esta accion no se pude revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.solicitudService.updateSolicitudes(id, true)
            .pipe(delay(100)).subscribe(
                (resp:any)=>{
                  if (resp.status) {
                    this.listOfData = [];
                    this.cargarSolicitud();
                    Swal.fire('Exito', 'Solicitud Aceptada', 'success');
                  } else {
                    Swal.fire('Atención', resp.message, 'warning');
                  }
                }, (error)=>{
                  Swal.fire('Exito', error.message, 'error');
                },
            );
      }
    });
  }

  rechazarSol(id: number) {
    Swal.fire({
      title: 'Esta seguro de rechazar la solicitud?',
      text: 'Esta accion no se pude revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Rechazar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.solicitudService.updateSolicitudes(id, false)
            .pipe(delay(100)).subscribe(
                (resp:any)=>{
                  if (resp.status) {
                    this.listOfData = [];
                    this.cargarSolicitud();
                    Swal.fire('Exito', 'Solicitud Rechazada', 'success');
                  } else {
                    Swal.fire('Atención', resp.message, 'warning');
                  }
                }, (error)=>{
                  Swal.fire('Exito', error.message, 'error');
                },
            );
      }
    });
  }
}
