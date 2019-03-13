import { Component, OnInit } from '@angular/core';
import { Heroes } from './heroi';
import { HEROES } from './herois-recebidos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

	heroiSelecionado : Heroes;
	hero: Heroes = {
		id: 1,
		name: 'SuperSirca'
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
