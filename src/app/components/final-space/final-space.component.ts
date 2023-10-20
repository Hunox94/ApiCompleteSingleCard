import {Component, OnInit} from '@angular/core';
import {FinalSpace, FinalsSpace} from "../../common/FinalSpaceAPI";
import {FinalSpaceService} from "../../services/final-space.service";
import {PokemonAPI} from "../../common/PokemonAPI";

@Component({
  selector: 'app-final-space',
  templateUrl: './final-space.component.html',
  styleUrls: ['./final-space.component.css']
})
export class FinalSpaceComponent implements OnInit{
  infoAPI: FinalSpace;

  constructor(private charService: FinalSpaceService){

  }

  ngOnInit() {
    this.cargarFinals();
  }

  private cargarFinals() {
    this.charService.getSpace().subscribe(
      {
        next: (data: FinalSpace) => {
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
