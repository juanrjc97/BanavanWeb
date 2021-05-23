import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { WelcomeComponent } from './welcome.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RespaldoComponent } from './respaldo/respaldo.component';
import { LoteComponent } from './lote/lote.component';
import { ColorComponent } from './color/color.component';
import { SemanaComponent } from './semana/semana.component';
import { CosechaComponent } from './cosecha/cosecha.component';
import { SolpersonalComponent } from './solpersonal/solpersonal.component';
import { MotivoComponent } from './motivo/motivo.component';


const routes: Routes = [

  { path: 'dashboard', component: WelcomeComponent , 
    children: [
    //{ path: '', loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)},
    { path: '', component: PersonalComponent},
    { path: 'inventario', component: InventarioComponent},
    { path: 'respaldo', component: RespaldoComponent},
    { path: 'lote', component: LoteComponent},
    { path: 'cinta', component: ColorComponent},
    { path: 'semana', component: SemanaComponent},
    { path: 'motivo', component: MotivoComponent},
    { path: 'cosecha', component: CosechaComponent},
    { path: 'solicitud-personal', component: SolpersonalComponent},
     ] 
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
