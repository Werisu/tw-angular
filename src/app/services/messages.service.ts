import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
	private messages: string[] = [];

  constructor() { }

	addMessage(message: string){

	}
}
