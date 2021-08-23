import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import Swal from 'sweetalert2';
import { RespaldoService } from 'src/app/services/respaldo/respaldo.service';

@Component({
  selector: 'app-respaldo',
  templateUrl: './respaldo.component.html',
  styleUrls: ['./respaldo.component.css'],
})
export class RespaldoComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor( private respaldoService: RespaldoService) {}

  ngOnInit(): void {}

  realizar_respaldo() {
    Swal.fire({
      title: '¿Deseas realizar el respaldo de la base de datos?',
      text: '',
      showCancelButton: true,
      confirmButtonText: `Respaldar`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.respaldoService.crearBackup().subscribe(
          (resp : any) =>{
            console.log("Respaldo respuesta: ");
            console.log(resp);
            if(resp.status){
              Swal.fire('Respaldo exitoso!', '', 'success');
            }else{
              Swal.fire('Ocurrió un error!', 'Lamentamos inconvenientes', 'error');
            }
          },
          (err) =>{
            console.log(err);            
              Swal.fire(
                'Ocurrió un error general!',
                'Lamentamos inconvenientes',
                'error'
              );
          }
        )
        //Swal.fire('Respaldo exitoso!', '', 'success');
      }
    });
  }
}
