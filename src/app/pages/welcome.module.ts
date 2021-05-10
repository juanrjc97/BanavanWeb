import { NgModule } from '@angular/core';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AppComponent } from 'src/app/app.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalComponent } from './personal/personal.component';
import { SharedModule } from '../shared/shared.module';
import { RespaldoComponent } from './respaldo/respaldo.component';
import { InventarioComponent } from './inventario/inventario.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoteComponent } from './lote/lote.component';
import { ColorComponent } from './color/color.component';
import { SemanaComponent } from './semana/semana.component';
import { MotivoComponent } from './motivo/motivo.component';
import { CosechaComponent } from './cosecha/cosecha.component';
import { SolpersonalComponent } from './solpersonal/solpersonal.component';

//para la tabla 
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
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
    NzInputModule

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
    SolpersonalComponent

  ],
  exports: [WelcomeComponent],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class WelcomeModule { }
