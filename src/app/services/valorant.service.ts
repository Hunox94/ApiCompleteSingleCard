import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Daum, ValorantAPI, ValorantOneCharacter} from "../common/ValorantAPI";

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  URLBASE = 'https://valorant-api.com/v1/agents'

  constructor(private http:HttpClient) { }

  getValorant(): Observable<ValorantAPI>{
    return this.http.get<ValorantAPI>(this.URLBASE)
  }
  getOneValorant(uuid: string): Observable<ValorantOneCharacter>{
    return this.http.get<ValorantOneCharacter>(this.URLBASE+'/'+uuid)
  }
}
