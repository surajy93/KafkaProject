import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { WebsocketService } from './websocket.service';

export interface Message {
  message: string;
}
const CHAT_URL = "ws://localhost:8080/";



@Injectable({
  providedIn: 'root'
})


export class KafkaConsumerService {


  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(
      map((response: MessageEvent): Message => {
        console.log(" res", response.data)
        let data = response.data
        return {
          message: data
        };
      })
    )
  }
}
