import { Component, OnInit } from '@angular/core';
import { Motivo } from 'src/app/models/motivo';
import { MotivoService } from '../../services/motivo/motivo.service';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.css']
})
export class MotivoComponent implements OnInit {

  public size = 20;
  public editCache: { [key: number]: { edit: boolean; data: Motivo } } = {};
  public listOfData: Motivo[] = [];
 

  constructor(private motivoService: MotivoService ) { }

  ngOnInit(): void {
    this.cargarMotivos();
    
  }

  cargarMotivos(){
    this.motivoService.cargarMotivos().subscribe(
      (resp:any)=>{
      this.listOfData = resp.motivos;
        console.log(resp.motivos);
        this.updateEditCache();
      }
    )
  }


  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(
      item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item } // con los 3 puntos se genera un copia completa del objeto al cual se le
                          // esta iterando (crea otro elemento igual) es como una copia sin referencia 
                          //al objeto anterior 
      };
    }
    );
    console.log(this.editCache);
  }


}
