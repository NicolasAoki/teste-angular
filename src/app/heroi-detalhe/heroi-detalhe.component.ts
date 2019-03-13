import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from '../hero/heroi'
@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {
	@Input() heroi: Heroes;
  constructor() { }

  ngOnInit() {
  }

}
