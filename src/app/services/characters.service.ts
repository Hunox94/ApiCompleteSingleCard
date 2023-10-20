import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonajesRyMAPI, Result} from "../common/PersonajesRyMAPI";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  URLBASE= "https://rickandmortyapi.com/api/character";

  constructor(private http:HttpClient) { }

  getCharacters(): Observable<PersonajesRyMAPI>{
    return this.http.get<PersonajesRyMAPI>(this.URLBASE);
  }

  getOneCharacter(id: number):Observable<Result>{
    return this.http.get<Result>(this.URLBASE+'/'+id);
  }
}
