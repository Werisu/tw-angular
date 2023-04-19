import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tw-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
	public tweetMessage: string = "";
	public tweetMaxLegth = 240;
	public tweetRemain: number = this.tweetMaxLegth;

	constructor() {}

	ngOnInit(): void {

	}

	changeTweet() {
		this.tweetRemain = 240 - this.tweetMessage.length;
	}

	sendTweet(){
		alert("twitter criado")
	}

}
