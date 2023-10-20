import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MonsterHunter, MonsterHunterAPI} from "../common/MonsterHunterAPI";

@Injectable({
  providedIn: 'root'
})
export class MonsterHunterService {

  constructor(private http:HttpClient) { }

  URL = 'https://mhw-db.com/weapons';


  getMonsterHunter(): Observable<MonsterHunterAPI>
  {
    return this.http.get<MonsterHunterAPI>(this.URL);
  }

  getOneWeapon(id: number): Observable<MonsterHunter>{
    return this.http.get<MonsterHunter>(this.URL+'/'+id);
  }
}
