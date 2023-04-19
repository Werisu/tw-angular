import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'tw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public tweets: any = [];
	public apiError = false;
	public error: any;

	constructor(private messagesService: MessagesService) {}

	ngOnInit(): void {
		this.getMessages();
	}

	getMessages(){
		this.messagesService.getMessages().subscribe({
			next: res => {
				this.tweets = res
			},
			error: erro => {
				this.apiError = true;
				this.error = erro;
			}
		});
	}

}
