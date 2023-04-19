import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
const headers = new HttpHeaders().append('Authorization', 'OAuth oauth_consumer_key="wRcWCt5BnqWjkrox0sG1l1a0N",oauth_token="3525195269-XDVP2YBvtQIaA5jc1W8QAtQEkaBl6oGVVncHN9w",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1681914336",oauth_nonce="c2lbRMyfrUn",oauth_version="1.0",oauth_signature="MbjFcXk00ltANLtHk25qivwgt7s%3D"');

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
	private messages: string[] = [];

  constructor(private http: HttpClient) { }

	addMessage(message: string){
		this.messages.push(message);
	}

	getMessages(){
		return this.http.get(API, {headers})
	}

	clearMessages(){
		this.messages = [];
	}
}
