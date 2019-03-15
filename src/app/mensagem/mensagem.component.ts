import { Component, OnInit } from '@angular/core';
import { MensagemServService } from '../mensagem-serv.service';
@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  constructor(public mensagemServ: MensagemServService) { }

  ngOnInit() {
  }

}
