import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonajeComponent} from "./components/personaje/personaje.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {PersonajesComponent} from "./components/personajes/personajes.component";
import {ValorantComponent} from "./components/valorant/valorant.component";
import {MonsterHunterComponent} from "./components/monster-hunter/monster-hunter.component";
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import {FinalSpaceComponent} from "./components/final-space/final-space.component";
import {PersonajeValorantComponent} from "./components/personaje-valorant/personaje-valorant.component";
import {ArmasMonsterHunterComponent} from "./components/armas-monster-hunter/armas-monster-hunter.component";
import {PersonajePokemonComponent} from "./components/personaje-pokemon/personaje-pokemon.component";
import {PersonajeFinalSpaceComponent} from "./components/personaje-final-space/personaje-final-space.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo:'personajes'
  },
  {
    path: 'personaje', component: PersonajeComponent,
  },
  {
    path: 'personaje/:id',
    component: PersonajeComponent
  },
  {
    path: 'personaje-Valorant/:uuid',
    component: PersonajeValorantComponent
  },
  {
    path: 'ArmasMonsterHunter/:id',
  component:ArmasMonsterHunterComponent
  },

  {
    path:'personajePokemon/:id',
  component:PersonajePokemonComponent
  },
  {
    path:'personajeFinalSpace/:id',
    component:PersonajeFinalSpaceComponent
  },

  {
    path:'personajes', component:PersonajesComponent
  },

  {
    path:'Valorant', component:ValorantComponent
  },

  {
    path: 'MonsterHunter', component:MonsterHunterComponent
  },

  {
    path: 'Pokemon', component: PokemonComponent
  },

  {
    path: 'FinalSpace', component:FinalSpaceComponent
  },

  {
    path: '**',
    component:ErrorPageComponent,
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
