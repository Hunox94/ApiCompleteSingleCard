import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonAPI, PokemonONE} from "../common/PokemonAPI";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  URL = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http:HttpClient) { }

  getPokemon(): Observable<PokemonAPI>{
    return this.http.get<PokemonAPI>(this.URL)
  }

  getOnePokemon(id : string): Observable<PokemonONE>{
    return this.http.get<PokemonONE>(this.URL+'/'+id)
  }
}
