import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }
  private subject: Subject<MessageEvent> | undefined;
  public connect(url: string | URL): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  private create(url: string | URL): Subject<MessageEvent> {
    let ws = new WebSocket(url, "echo-protocol");


    let observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: any) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(data);
          console.log("Hello", ws.send(data))
        }
      }
    };

    return Subject.create(observer, observable);
  }

}
