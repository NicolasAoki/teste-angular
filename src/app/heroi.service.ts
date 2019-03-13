import { Injectable } from '@angular/core';
import { Heroes } from './hero/heroi';
import { HEROES } from './hero/herois-recebidos';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  heroes: Heroes[];

  constructor(private heroiService: HeroiService) {

  }

  getHeroes(): Heroes[]{
  	return HEROES;
  }
}
