import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/Services/login.service';
import * as signalR from '@microsoft/signalr';
import { ClientService } from '../Services/client.service';
import { ChatService } from 'src/app/chat/service/chat.service';
import { AllDeliveryChatsWithClient } from 'src/app/chat/AllDeliveryChatWithClient';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client-chat.component.html',
  styleUrls: ['./client-chat.component.scss'],
})
export class ClientChatComponent implements OnInit {
  messages: string[] = []; // Array to store messages
  recievedmessages: string[] = [];
  AllClientDeliveryChats?: AllDeliveryChatsWithClient[] | undefined;
  currentDateAndTime?: Date;

  constructor(
    private formBuilder: FormBuilder,
    public _route: Router,
    private _ClientService:ClientService,
    private chatService: ChatService,
    private LoginServive: LoginService
  )
  {
  }
  ngOnInit(): void {
    this.GetAllDeliveryChatWithClientID()

    this.chatService.StartConnection();

    this.chatService.hubConnection.on('ClientReceiveMessage', (msg) => {
      console.log(msg);
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
      var req = {
        msg: this.ChatForm.get('Msg')?.value,
        clientId: this.LoginServive.getUserId(),
        deliveryId: '3c1faea0-569c-4f29-9a2d-32336f83794b',
      };
      console.log(req);
      this.chatService.hubConnection.invoke('ClientSendMessage', req);
      this.messages.push(req.msg || '');
      this.currentDateAndTime = new Date();
      this.ChatForm.reset();
    } else {
      console.error('SignalR connection is not in the "Connected" state.');
    }
  }

  GetAllDeliveryChatWithClientID()
  {
    this._ClientService.GetAllDeliveryChatWithClientId(this.LoginServive.getUserId()).subscribe((res)=>
      {
        console.log("response all chats",res);


            this.AllClientDeliveryChats=res.data;


      }
    )
  }
}