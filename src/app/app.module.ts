import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimalesComponent } from './animales/animales.component';
import { UsuariosComponent } from './usuarios/usuarios.component'
import {PeticionesService} from "./peticiones.service";
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    AnimalesComponent,
    UsuariosComponent,
    LoginComponent,
    
  ],
  imports: [
    //RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule ,
    
  ],
  providers: [PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
