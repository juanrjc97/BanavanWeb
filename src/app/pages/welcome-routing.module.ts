import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { WelcomeComponent } from './welcome.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RespaldoComponent } from './respaldo/respaldo.component';


const routes: Routes = [

  { path: '', component: WelcomeComponent , 
    children: [
    { path: 'personal', component: PersonalComponent},
    { path: 'inventario', component: InventarioComponent},
    { path: 'respaldo', component: RespaldoComponent},
     ] 
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
