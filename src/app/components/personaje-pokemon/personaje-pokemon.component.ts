import {Component, OnInit} from '@angular/core';
import {Daum} from "../../common/PokemonAPI";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-personaje-pokemon',
  templateUrl: './personaje-pokemon.component.html',
  styleUrls: ['./personaje-pokemon.component.css']
})
export class PersonajePokemonComponent implements OnInit{

  onePokemon!: Daum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private onePokemonService: PokemonService
  ){}

  ngOnInit() {
    this.loadOnePokemon();
  }

  loadOnePokemon(){
    const id = this.activatedRoute.snapshot.params['id']

    this.onePokemonService.getOnePokemon(id).subscribe({
      next: value =>{
        this.onePokemon = value.data;
        console.log(this.onePokemon);
    },
      error: err=>{
        console.log(err);
      },
      complete: () =>{
        console.log('Complete')
      }
      }

    )
  }
}
