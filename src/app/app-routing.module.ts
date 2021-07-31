import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    
  },
{
  path:"dashboard",
  component:DashboardComponent,
 // canActivate:[AuthGuard],

},

{
  path:"animales",
  component:AnimalesComponent,
 // canActivate:[AuthGuard],

},

{
  path:"usuarios",
  component:UsuariosComponent,
//  canActivate:[AuthGuard],

},

{
  path:"login",
  component:LoginComponent
},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
