import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../service/chat.service';
import { LoginService } from 'src/app/auth/Services/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  messages: string[] = []; // Array to store messages
  newMessage: string = '';

  constructor(
    private chatService: ChatService,
    private formBuilder: FormBuilder,
    public _route: Router,
    private ChatService: ChatService,
    private LoginServive: LoginService) {
    this.chatService.receiveMessage().subscribe(message => {
      this.messages.push(message); // Add received message to the array
    });
  }
  ChatForm = this.formBuilder.group({
    Msg: ['', []],
  });

  send() {
    const req = {
      clientMsg: this.ChatForm.get('Msg')?.value,
      clientId: this.LoginServive.getUserId(),
      deliveryId: 'fa5a73bb-ebe7-4072-9f99-8f854532dd27'
    }
    console.log(req)
    this.ChatService.callApi(req).subscribe((res) => {
      console.log(res)
    })


  }

}
