import {Component, OnInit} from '@angular/core';
import {MonsterHunter} from "../../common/MonsterHunterAPI";
import {ActivatedRoute} from "@angular/router";
import {MonsterHunterService} from "../../services/monster-hunter.service";


@Component({
  selector: 'app-armas-monster-hunter',
  templateUrl: './armas-monster-hunter.component.html',
  styleUrls: ['./armas-monster-hunter.component.css']
})
export class ArmasMonsterHunterComponent implements OnInit {

  ArmaMonster!: MonsterHunter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private armaService: MonsterHunterService
  ){

  }
  ngOnInit() {
    this.loadArmasMonster();
  }

  private loadArmasMonster(){
    const id = this.activatedRoute.snapshot.params['id'];

    this.armaService.getOneWeapon(id).subscribe({
      next: value => {
        this.ArmaMonster = value;
      },
      error: err => {
        console.log(err);
      },
      complete: () =>{
        console.log('Complete')
      }
    })
  }

}
