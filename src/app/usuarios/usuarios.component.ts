import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
Usuarios:any = [
  {
    "nombre": "Mauricio Hezqueda",
    "id": "1595146",
    "telefono": "4627754120",
    "ciudad": "Irapuato",
    "estado": "Guanajuato",
    "activo": "no"
},
{
    "nombre": "Hector Medrano",
    "id": "1695147",
    "telefono": "462625489",
    "ciudad": "Irapuato",
    "estado": "Guanajuato",
    "activo": "si"
},
{
    "nombre": "Mario Alberto",
    "id": "1795148",
    "telefono": "4626978410",
    "ciudad": "Irapuato",
    "estado": "Guanajuato",
    "activo": "si"
},
{
    "nombre": "Osvaldo Leon",
    "id": "1995149",
    "telefono": "464546344",
    "ciudad": "Irapuato",
    "estado": "Guanajuato",
    "activo": "si"
},
{
    "nombre": "Alma Rosa",
    "id": "2095150",
    "telefono": "429324444",
    "ciudad": "Abasolo",
    "estado": "Guanajuato",
    "activo": "si"
},
{
    "nombre": "Axel Ivan",
    "id": "2195151",
    "telefono": "4621783196",
    "ciudad": "Abasolo",
    "estado": "Guanajuato",
    "activo": "si"
}
];
  constructor() { }

  ngOnInit(): void {
  }




}
