import {Component, OnInit} from '@angular/core';
import {PersonajesRyMAPI} from "../../common/PersonajesRyMAPI";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{
infoAPI: PersonajesRyMAPI;

constructor(private charService: CharactersService){

}
  ngOnInit(): void {
  this.cargarPersonajes();
  }

  private cargarPersonajes() {
    this.charService.getCharacters().subscribe(
      {
        next: (data: PersonajesRyMAPI) =>{
          this.infoAPI = data;
        },
        error: err => {
          console.log(err);
        },
        complete: () =>{
          console.log("Complete");
        }
      }
    )
  }
}
