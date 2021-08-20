import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonalComponent} from './personal/personal.component';
import {WelcomeComponent} from './welcome.component';
import {InventarioComponent} from './inventario/inventario.component';
import {RespaldoComponent} from './respaldo/respaldo.component';
import {LoteComponent} from './lote/lote.component';
import {ColorComponent} from './color/color.component';
import {SemanaComponent} from './semana/semana.component';
import {CosechaComponent} from './solcosecha/cosecha.component';
import {SolpersonalComponent} from './solpersonal/solpersonal.component';
import {MotivoComponent} from './motivo/motivo.component';
import {RacimoComponent} from './racimo/racimo.component';
import {EnfundadoComponent} from './enfundado/enfundado.component';
import {ApuntaladoComponent} from './apuntalado/apuntalado.component';
// eslint-disable-next-line max-len
import {RepInventarioComponent} from './rep-inventario/rep-inventario.component';
import {RepEnfundeComponent} from './rep-enfunde/rep-enfunde.component';
import {RepSemanasComponent} from './rep-semanas/rep-semanas.component';
import {RepRacimosPComponent} from './rep-racimos-p/rep-racimos-p.component';
import {AuthGuard} from '../guards/auth.guard';
import {GerenteGuard} from '../guards/gerente.guard';
import { AdminGuard } from '../guards/admin.guard';


const routes: Routes = [

  {path: 'dashboard', component: WelcomeComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    children: [
      {path: '', canActivate: [GerenteGuard], component: PersonalComponent},
      {path: 'inventario',
        component: InventarioComponent},
      {path: 'respaldo',
        canActivate: [GerenteGuard], component: RespaldoComponent},
      {path: 'lote', canActivate: [GerenteGuard], component: LoteComponent},
      {path: 'cinta', canActivate: [GerenteGuard], component: ColorComponent},
      {path: 'semana', canActivate: [GerenteGuard], component: SemanaComponent},
      {path: 'motivo', canActivate: [GerenteGuard], component: MotivoComponent},
      {path: 'cosecha',
        canActivate: [GerenteGuard], component: CosechaComponent},
      {path: 'solicitud-personal',
        canActivate: [GerenteGuard], component: SolpersonalComponent},

      {path: 'racimo', canActivate: [AdminGuard],component: RacimoComponent},
      {path: 'enfudado', canActivate: [AdminGuard],
        component: EnfundadoComponent},
      {path: 'apuntalado',canActivate: [AdminGuard],
        component: ApuntaladoComponent},
      {path: 'inventarioRacimos',canActivate: [AdminGuard],
        component: RepInventarioComponent},
      {path: 'enfunde', canActivate: [AdminGuard],
        component: RepEnfundeComponent},
      {path: 'semanasRacimos', canActivate: [AdminGuard],
        component: RepSemanasComponent},
      {path: 'racimosPerdidos',canActivate: [AdminGuard],
        component: RepRacimosPComponent},

    ],
  },


];

// eslint-disable-next-line new-cap
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
/**
 * params
 */
export class WelcomeRoutingModule { }
