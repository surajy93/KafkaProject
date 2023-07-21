import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsocketService } from './websocket.service';
import { KafkaConsumerService } from './kafka-consumer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WebsocketService,
    KafkaConsumerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
