import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr';
import { LoginService } from 'src/app/auth/Services/login.service';
import { ChatService } from 'src/app/chat/service/chat.service';


@Component({
  selector: 'app-delivery-chat',
  templateUrl: './delivery-chat.component.html',
  styleUrls: ['./delivery-chat.component.scss'],
})
export class DeliveryChatComponent implements OnInit {
  messages: string[] = []; // Array to store messages
  recievedmessages: string[] = []; // Array to store messages
  currentDateAndTime?: Date
  LoginUserName!: string
  constructor(
    private chatService: ChatService,
    private formBuilder: FormBuilder,
    public _route: Router,
    private LoginServive: LoginService
  ) {}
  ngOnInit(): void {
    this.LoginUserName=this.LoginServive.getUserName()
    this.chatService.StartConnection();

    this.chatService.hubConnection.on('DeliveryReceiveMessage', (msg) => {
      this.recievedmessages.push(msg);
    });
  }
  ChatForm = this.formBuilder.group({
    Msg: ['', []],
  });

  send() {
    if (
      this.chatService.hubConnection &&
      this.chatService.hubConnection.state ===
        signalR.HubConnectionState.Connected
    ) {
      const req = {
        msg: this.ChatForm.get('Msg')?.value,
        deliveryId: this.LoginServive.getUserId(),
        clientId: '5febec64-a97a-4b34-9a12-59e0bad7eb3e',
      };
      console.log(req);

      this.chatService.hubConnection.invoke('DeliverySendMessage', req);
      this.messages.push(req.msg || '');
      this.currentDateAndTime=new Date();
      this.ChatForm.reset();
    } else {
      console.error('SignalR connection is not in the "Connected" state.');
    }
  }
}