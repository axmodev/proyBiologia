import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cargando:boolean = false;
  usuario:string;
  contrasenia:string;
  error:boolean = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.cargando = true;
    this.error = false;
setTimeout(() => {
  if(this.usuario != 'axel' || this.contrasenia != 'axelivan123'){ //por temas de tiempo lo hice de esta manera pero estoy consiente que no es correcto esta practica.
    this.cargando = false;
    this.error = true;
    return
  }else{
    this.cargando = false;
    this.error = false;
   // alert('entroo');
  localStorage.setItem('token','cfb36abd-ef87-489e-8fc8-024028d0c3ce');
  this.route.navigateByUrl('/dashboard')
  }
}, 2000);


  }

}
