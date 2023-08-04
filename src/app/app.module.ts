import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { AboutModule } from './about/about.module';
import { ChatModule } from './chat/chat.module';
import { HomeModule } from './home/home.module';
import { Router } from '@angular/router';
import { DeliveryModule } from './delivery/delivery.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DeliveryModule,
    ClientModule,
    AuthModule,
    AboutModule,
    ChatModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
