import {Component, OnInit} from '@angular/core';
import {FinalSpace, FinalsSpace} from "../../common/FinalSpaceAPI";
import {ActivatedRoute} from "@angular/router";
import {FinalSpaceService} from "../../services/final-space.service";

@Component({
  selector: 'app-personaje-final-space',
  templateUrl: './personaje-final-space.component.html',
  styleUrls: ['./personaje-final-space.component.css']
})
export class PersonajeFinalSpaceComponent implements OnInit{

  personajeSpace: FinalsSpace;

  constructor(
    private activatedRoute: ActivatedRoute,
    private finalService: FinalSpaceService){

  }
  ngOnInit() {
    this.loadOneSpace();
  }
  //TODO
  private loadOneSpace(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.finalService.getOneSpace(id).subscribe(
        {
          next: value => {
            this.personajeSpace = value;
            console.log(this.personajeSpace);
          },
          error: err => {
            console.log(err);
          },
          complete: () =>{
            console.log('Complete')
          }
        }
    )
  }

}
