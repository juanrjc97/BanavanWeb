/* eslint-disable new-cap */
/* eslint-disable guard-for-in */
/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InventarioService} from '../../services/inventario/inventario.service';

@Component({
  selector: 'app-apuntalado',
  templateUrl: './apuntalado.component.html',
  styleUrls: ['./apuntalado.component.css'],
})
export class ApuntaladoComponent implements OnInit {

public titulos:any = [];
public filas:any = [];
public cargando = true;
public filterForm: FormGroup = this.fb.group({
  semana: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
  anho: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
});
constructor(private inventarioService:InventarioService, private fb: FormBuilder) {

}

ngOnInit(): void {

}


cargarInventario(idSemana: number, anho:number) {
  this.cargando =true;
  this.inventarioService.cargarEnfundado(idSemana, anho).subscribe(
      (resp:any)=>{
        console.log(resp);
        this.formatearResp(resp);
        this.cargando =false;
      },
  );
}

formatearResp(resp: any) {
  this.titulos = resp.headers;
  Object['values'](resp.dataset).forEach((element:any) => {
    this.filas.push(Object['values'](element));
  });
}

submitForm() {
  if (this.filterForm.invalid) {
    for (const i in this.filterForm.controls) {
      this.filterForm.controls[i].markAsDirty();
      this.filterForm.controls[i].updateValueAndValidity();
    }
    return;
  }

  this.cargarInventario(this.filterForm.get('semana')?.value,
      this.filterForm.get('anho')?.value );
  console.log(this.filterForm.value);
}

}
