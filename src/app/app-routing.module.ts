import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeRoutingModule } from './pages/welcome-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';

const routes: Routes = [
  { path:'' , redirectTo: '/welcome', pathMatch:'full' },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    WelcomeRoutingModule,
    LoginRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
