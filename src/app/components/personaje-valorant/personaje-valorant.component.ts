import {Component, OnInit} from '@angular/core';
import {Daum} from "../../common/ValorantAPI";
import {ActivatedRoute} from "@angular/router";
import {ValorantService} from "../../services/valorant.service";

@Component({
  selector: 'app-personaje-valorant',
  templateUrl: './personaje-valorant.component.html',
  styleUrls: ['./personaje-valorant.component.css']
})
export class PersonajeValorantComponent implements OnInit{
  personajeValorant!: Daum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charService: ValorantService){

  }

  ngOnInit() {
    this.loadValorantCharacter();
  }


  private loadValorantCharacter() {
    const uuid = this.activatedRoute.snapshot.params['uuid'];

    this.charService.getOneValorant(uuid).subscribe({
      next: value =>{
        this.personajeValorant = value.data;
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
