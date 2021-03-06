import {NgModule} from '@angular/core';
// eslint-disable-next-line camelcase
import {es_ES, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';

import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';

import {AppComponent} from 'src/app/app.component';
import {IconsProviderModule} from 'src/app/icons-provider.module';
import {DatePipe} from '@angular/common';

import {WelcomeRoutingModule} from './welcome-routing.module';

import {WelcomeComponent} from './welcome.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonalComponent} from './personal/personal.component';
import {SharedModule} from '../shared/shared.module';
import {RespaldoComponent} from './respaldo/respaldo.component';
import {InventarioComponent} from './inventario/inventario.component';
import {AppRoutingModule} from '../app-routing.module';
import {LoteComponent} from './lote/lote.component';
import {ColorComponent} from './color/color.component';
import {SemanaComponent} from './semana/semana.component';
import {MotivoComponent} from './motivo/motivo.component';
import {CosechaComponent} from './solcosecha/cosecha.component';
import {SolpersonalComponent} from './solpersonal/solpersonal.component';
// para la tabla
import {NzTableModule} from 'ng-zorro-antd/table';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NzDividerModule} from 'ng-zorro-antd/divider';

import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzInputModule} from 'ng-zorro-antd/input';

// eslint-disable-next-line max-len
import {ModificarColorSemanaComponent} from '../components/semana/modificar-color-semana/modificar-color-semana.component';
// Para las cintas
import {ColorPickerModule} from 'ngx-color-picker';
// Para los reportes administrador
import {ChartsModule} from 'ng2-charts';
//
import {NzTypographyModule} from 'ng-zorro-antd/typography';
// Directiva
import {ValidateFormDirective} from '../directive/validate-form.directive';

import {RacimoComponent} from './racimo/racimo.component';
import {EnfundadoComponent} from './enfundado/enfundado.component';
import {ApuntaladoComponent} from './apuntalado/apuntalado.component';
// eslint-disable-next-line max-len
import {RepInventarioComponent} from './rep-inventario/rep-inventario.component';
import {RepEnfundeComponent} from './rep-enfunde/rep-enfunde.component';
import {RepRacimosPComponent} from './rep-racimos-p/rep-racimos-p.component';
import {RepSemanasComponent} from './rep-semanas/rep-semanas.component';


// eslint-disable-next-line new-cap
@NgModule({
  imports: [
    WelcomeRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzGridModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    NzTableModule,
    NzPopconfirmModule,
    NzInputModule,
    NzSpaceModule,
    ColorPickerModule,
    ChartsModule,
    NzDividerModule,
    NzTypographyModule,
    NzDatePickerModule,
  ],
  declarations: [
    WelcomeComponent,
    PersonalComponent,
    RespaldoComponent,
    InventarioComponent,
    LoteComponent,
    ColorComponent,
    SemanaComponent,
    MotivoComponent,
    CosechaComponent,
    SolpersonalComponent,

    ModificarColorSemanaComponent,
    ValidateFormDirective,

    RacimoComponent,
    EnfundadoComponent,
    ApuntaladoComponent,
    RepInventarioComponent,
    RepEnfundeComponent,
    RepRacimosPComponent,
    RepSemanasComponent,
  ],
  exports: [WelcomeComponent],
  providers: [{provide: NZ_I18N, useValue: es_ES}, DatePipe],
  bootstrap: [AppComponent],
})
/**
 *params:
 */
export class WelcomeModule {}
