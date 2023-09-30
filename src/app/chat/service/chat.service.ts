import { Injectable, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService  {
  public hubConnection!: signalR.HubConnection;
  constructor() {
    this.StartConnection()


  }

  public StartConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7132/chat', {
      })
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
      })
      .catch((error) => {
        console.error('Error while starting SignalR connection:', error);
      });
  }







}