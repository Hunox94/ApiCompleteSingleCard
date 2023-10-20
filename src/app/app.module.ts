import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import {HttpClientModule} from "@angular/common/http";
import { ValorantComponent } from './components/valorant/valorant.component';
import { MonsterHunterComponent } from './components/monster-hunter/monster-hunter.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FinalSpaceComponent } from './components/final-space/final-space.component';
import { PersonajeValorantComponent } from './components/personaje-valorant/personaje-valorant.component';
import { ArmasMonsterHunterComponent } from './components/armas-monster-hunter/armas-monster-hunter.component';
import { PersonajePokemonComponent } from './components/personaje-pokemon/personaje-pokemon.component';
import { PersonajeFinalSpaceComponent } from './components/personaje-final-space/personaje-final-space.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    ErrorPageComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    PersonajesComponent,
    ValorantComponent,
    MonsterHunterComponent,
    PokemonComponent,
    FinalSpaceComponent,
    PersonajeValorantComponent,
    ArmasMonsterHunterComponent,
    PersonajePokemonComponent,
    PersonajeFinalSpaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
