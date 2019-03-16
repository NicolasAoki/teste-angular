import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroes } from './hero/heroi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
		{id:1,name:'SuperSirca', caracteristica:'Tem o poder de ressucitar lendas'},
		{id:2,name:'SuperBI', caracteristica:'Apresenta estatisticas da sua empresa'},
		{id:3,name:'SuperKPI', caracteristica:'Graficos pra voce com eficacia'},
		{id:4,name:'SuperDataflex', caracteristica:'ERP que veio pra ficar'},
		{id:5,name:'SuperPHP', caracteristica:'possui o poder da produção'},
		{id:6,name:'SrScriptcase', caracteristica:'Viabiliza seu banco de dados com facilidade'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Heroes[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}