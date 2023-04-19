import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'tw-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
	public tweetMessage: string = "";
	public tweetMaxLegth = 240;
	public tweetRemain: number = this.tweetMaxLegth;

	constructor(private messagesService: MessagesService) {}

	ngOnInit(): void {

	}

	sendTweet(){
		this.messagesService.addMessage(this.tweetMessage);
		this.tweetMessage = "";
		this.tweetRemain = this.tweetMaxLegth;
	}

	changeTweet() {
		this.tweetRemain = this.tweetMaxLegth - this.tweetMessage.length;
	}

}
