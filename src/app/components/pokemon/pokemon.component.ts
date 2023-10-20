import {Component, OnInit} from '@angular/core';
import {PokemonAPI} from "../../common/PokemonAPI";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  infoAPI: PokemonAPI;

  constructor(private charService: PokemonService){

  }

  ngOnInit() {
    this.cargarPokemon();
  }

  private cargarPokemon() {
    this.charService.getPokemon().subscribe(
      {
        next: (data: PokemonAPI) => {
          this.infoAPI = data;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("Complete");
        }
      }
    )
  }


}
