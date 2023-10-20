import {Component, OnInit} from '@angular/core';
import {MonsterHunterAPI} from "../../common/MonsterHunterAPI";
import {MonsterHunterService} from "../../services/monster-hunter.service";

@Component({
  selector: 'app-monster-hunter',
  templateUrl: './monster-hunter.component.html',
  styleUrls: ['./monster-hunter.component.css']
})
export class MonsterHunterComponent implements OnInit{

  infoAPI: MonsterHunterAPI;

  constructor(private charService: MonsterHunterService){

  }

  ngOnInit() {
    this.cargarMonster();
  }

  private cargarMonster() {
    this.charService.getMonsterHunter().subscribe(
      {
        next: (data: MonsterHunterAPI) => {
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
