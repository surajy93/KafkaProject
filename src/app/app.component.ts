import { Component } from '@angular/core';
import { KafkaConsumerService } from './kafka-consumer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  demoArray:any[] = []
  title: any;
  constructor(private kafkaConsumerService: KafkaConsumerService) {
    this.kafkaConsumerService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
      this.title = msg.message
      this.demoArray.push(this.title)
    });
  }

  
}
