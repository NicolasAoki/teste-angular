import { Component, OnInit } from '@angular/core';
import { Heroes } from '../hero/heroi';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Heroes[] = [];

  //sempre injetar servico no componente
  // para obte-lo
  constructor(private heroiService: HeroiService) { }

  ngOnInit() {
  	this.getHeroes();
  }
  getHeroes():void{
  	this.heroiService.getHeroes()
  		.subscribe(heroes => this.heroes = heroes.slice(1,5));
  		//slice retorna uma copia parcial ou total de um array
  }

}
