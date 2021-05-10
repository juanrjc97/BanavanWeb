import { Component, OnInit } from '@angular/core';

//para la tabla 
interface ItemData {
  id: number;
  Semana: string;
  Cinta: string;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})


export class InventarioComponent implements OnInit {

  editCache: { [key: number]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  constructor() { }


  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        id: i,
        Semana: `Edrward ${i}`,
        Cinta: `London Park no. ${i}`
      });
    }
    this.listOfData = data;
    this.updateEditCache();
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
    });
  }




}
