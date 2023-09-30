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
  
  }
  ChatForm = this.formBuilder.group({
    Msg: [''],
  });

 

}
