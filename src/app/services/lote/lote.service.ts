import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lote } from 'src/app/models/lote';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  public path: string = 'http://demo5983135.mockable.io/lotes';

  public getLoteUrl: string = environment.get_lote;
  public postLoteUrl: string = environment.post_lote;
  public deleteLoteUrl : string = environment.delete_lote;
  public updateLoteUrl : string = environment.put_lote;
  constructor(private http: HttpClient) { }

  cargarLotes() {
    return this.http.get(this.getLoteUrl);
  }

  crearLote(lote: Lote){ 
    return this.http.post(this.postLoteUrl, lote);
  }
  
  actualizarLote(lote: Lote){
  console.log(lote );
  console.log('lote ser');
    return this.http.put(this.updateLoteUrl, lote);
  }

  eliminarLote(id: number){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: `{
        "id": ${id}
     }` ,
    };
    //agregar el idLote en el delete
    return this.http.delete(`${this.deleteLoteUrl}`,options );
  }

  


}
