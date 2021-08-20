import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeRoutingModule} from './pages/welcome-routing.module';
import {LoginRoutingModule} from './auth/auth-routing.module';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full',
  }, {
    path: 'login',
    loadChildren: ()=> import('../app/auth/auth.module')
        .then((module)=> module.LoginModule ),
  },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    WelcomeRoutingModule,
    LoginRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
