import { Component, OnInit } from '@angular/core';
import { Heroes } from './heroi';
import { HEROES } from './herois-recebidos';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Heroes[];

	heroiSelecionado : Heroes;
	hero: Heroes = {
		id: 1,
		name: 'SuperSirca',
    caracteristica : ''
	};
	todosHerois = HEROES;

  constructor() {
  }

  ngOnInit() {
  }

  OnSelecionarHeroi(hero: Heroes):void {
  	this.heroiSelecionado = hero;
  	console.log(hero);
  }

}
