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

	heroiSelecionado : Heroes;
	hero: Heroes = {
		id: 1,
		name: 'SuperSirca',
    caracteristica : ''
	};
  //Importa direto da classe de objetos
	todosHerois = HEROES;

  //importa de um servico que obtem objetos
  heroes: Heroes[];

  constructor(private heroService: HeroiService) {
  //Boas praticas  de injetar o servico de requisicao do obj
  //no ngInit e nao no construtor
  
  }

  ngOnInit() {
    //chama funcao getHeroes do proprio componente
    this.getHeroes();
  }

  //Recebe como parametro um obj
  OnSelecionarHeroi(hero: Heroes):void {
    //Seta o obj recebido para uma variavel interna do componente
  	this.heroiSelecionado = hero;
  	console.log(hero);
  }
  getHeroes(): void {
    //chama funcao de um Servico que injetara' obj no componente
    //.subscribe() espera assincronamente o Observable do servico
    // retornar um array de heroes 
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
