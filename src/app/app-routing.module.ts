import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{WelcomeModule} from './pages/welcome.module'



const routes: Routes = [

  { path:'' , redirectTo: '/welcome', pathMatch:'full' },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    WelcomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
