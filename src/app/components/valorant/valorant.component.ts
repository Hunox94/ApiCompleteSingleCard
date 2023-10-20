import {Component, OnInit} from '@angular/core';
import {ValorantAPI} from "../../common/ValorantAPI";
import {ValorantService} from "../../services/valorant.service";

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.component.html',
  styleUrls: ['./valorant.component.css']
})
export class ValorantComponent implements OnInit {
  infoAPI!: ValorantAPI;


  constructor(private charService: ValorantService) {

  }

  ngOnInit(): void {
  this.cargarValorant();
  }

  private cargarValorant() {
    this.charService.getValorant().subscribe(
      {
        next: (data: ValorantAPI) => {
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
