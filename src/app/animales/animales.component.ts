import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import { PokemonDescriptionResponse } from '../models/pokemon';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  constructor(private peticiones:PeticionesService) { 
    this.getPokemon();
  }

 
  pokemon:any = [];
  nombrePokemon:any = [];
  cargando:boolean=true;
  ngOnInit(): void {

  }



  getPokemon(){
    this.cargando = true;
    for(let i = 1; i<50; i++){
      this.peticiones.getPokemon(i).subscribe((res:PokemonDescriptionResponse)=>{
      
       this.pokemon.push(res.sprites['other']['dream_world']['front_default']); 
       this.nombrePokemon.push(res.name);
       })
    }

    setTimeout(() => {
     this.nombrePokemon.forEach(element => {
       console.log(element);
       this.cargando = false;
     });
        
    }, 1500);
 
  }


}
