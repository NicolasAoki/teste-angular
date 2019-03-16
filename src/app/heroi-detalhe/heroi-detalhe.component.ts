import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from '../hero/heroi';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {
	
  hero: Heroes;

  constructor(
  	private route: ActivatedRoute,
  	private heroService: HeroiService,
  	private location: Location
  	) { }

  ngOnInit() :void{
  	this.getHero();
  }
  getHero():void{
  	//@route.snapshot retira uma snapshot da url
  	//assim que o componente for criado
  	//@paramMap um parametro da URL
  	//@ '+' converte de string para number
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.heroService.getHero(id)
  	.subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
