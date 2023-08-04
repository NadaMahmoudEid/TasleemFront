import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
  ,
  exports:[
    ChatComponent
  ]
})
export class ChatModule { }
