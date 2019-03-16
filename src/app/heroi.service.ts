import { Injectable } from '@angular/core';
import { Heroes } from './hero/heroi';
import { HEROES } from './hero/herois-recebidos';
import { MensagemServService } from './mensagem-serv.service';

// fica esperando o retorno de um dado
//depois de retornado devolve uma promise
import { Observable, of } from 'rxjs';
 //A classe de servico
//Geralmente e' assincrono pois espera o dado
//Chegar do servidor

//Aceita um dado a ser injetado assim como @Component
@Injectable({
//'root' significa que este servico pode ser fornecido para 
//qualquer classe
  providedIn: 'root'
})
export class HeroiService {

  heroes: Heroes[];

  constructor(private mensagemServ: MensagemServService) { }

  getHeroes(): Observable<Heroes[]>{
  	//retorna um array dos herois
    this.mensagemServ.add('Servico Hero: Adquiriu heroi');
    return of(HEROES);

    // normalmente deve-se chamar a requisicao de obj por:
    // HttpClient.get<Hero[]>() 
  }
  getHero(id:number): Observable<Heroes>{
    this.mensagemServ.add(`HeroiServico: realizado com suceso HERO id=${id}`);
    console.log('chegou aqui');
    return of(HEROES.find(hero=>hero.id===id));
  }
}
