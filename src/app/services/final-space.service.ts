import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FinalSpace, FinalsSpace} from "../common/FinalSpaceAPI";

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {
  URL = 'https://finalspaceapi.com/api/v0/character/';

  constructor(private http:HttpClient) { }

  getSpace(): Observable<FinalSpace>{
    return this.http.get<FinalSpace>(this.URL)
  }

  getOneSpace(id: number): Observable<FinalsSpace>{
    return this.http.get<FinalsSpace>(this.URL+id)
  }

}
