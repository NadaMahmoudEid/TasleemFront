import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubConnection!: HubConnection;
  private messageReceived = new Subject<string>();
  constructor(private http: HttpClient) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7132/chatHub') // Use the SignalR hub URL you defined in your server
      .build();

    this.hubConnection.start().catch(err => console.error(err));

    // Register a client-side method to handle incoming messages
    this.hubConnection.on('ReceiveMessage', (message: string) => {
      this.messageReceived.next(message);
    });
  }

  sendMessage(message: string) {
    this.hubConnection.invoke('SendMessage', message).catch(err => console.error(err));
  }

  callApi(data:object):Observable<any>
  {
   return this.http.post('https://localhost:7132/api/Chat/SendMessageFromClient',data)
  }


  // Subscribe to incoming messages
  receiveMessage() {
    return this.messageReceived.asObservable();
  }
}
