import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http:HttpClient) { }




  getPokemon(ID:number){
    return  this.http.get('https://pokeapi.co/api/v2/pokemon/' + ID);
  }


}
