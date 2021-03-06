import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
//import * as Sentry from '@sentry/angular';
//rutas
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeModule } from './pages/welcome.module';
//import { LoginComponent } from './login/login.component';
import {LoginModule} from  './auth/auth.module';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WelcomeModule,
    LoginModule,
    RouterModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
