import {Component, OnInit} from '@angular/core';
import {Result} from "../../common/PersonajesRyMAPI";
import {HttpClientModule} from "@angular/common/http";
import {CharactersService} from "../../services/characters.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit{
  personaje!: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charService:CharactersService){

  }

  ngOnInit() {
    this.loadCharacter();
  }

  private loadCharacter(){
    const id = this.activatedRoute.snapshot.params['id'];

    this.charService.getOneCharacter(id).subscribe(
      {
        next: value =>{
          this.personaje = value;
        },
        error: err=> {
          console.log(err)
        },
        complete: () =>{
          console.log('Complete');
        }

      }
    )
  }

}
