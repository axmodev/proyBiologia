


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {  tap } from "rxjs/operators";
import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

  if(localStorage.getItem('token')!= null){
    this.router.navigateByUrl('/dashboard');
    return true;
  }
  else{
    this.router.navigateByUrl('/login');
    return false;
  }


      /*
      return  this.UsuarioService.validarToken() //RETORNA FALSO O VERDADERO DE ACUERDO A SI EL TOKEN ES VALIDO
      .pipe(
        tap(estaAutenticado =>{
          if(!estaAutenticado){
           // alert("TU SESION A TERMINADO, INGRESA NUEVAMENTE")
            this.limpiarLocalStorage();
          }
        } )
      )*/
  }

}
