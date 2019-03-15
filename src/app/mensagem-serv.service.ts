import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemServService {

	mensagem: string[] = [];

	add(message: string){
		this.mensagem.push(message);
	}
	clear(){
		this.mensagem = [];
	}
}
