import { Component, OnInit } from '@angular/core';
import { Heroes } from './heroi';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

	hero: Heroes = {
		id: 1,
		name: 'SuperSirca'
	};

  constructor() {
  }

  ngOnInit() {
  }

}
