import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RegistORComponent } from './regist-or/regist-or.component';
import { RegisterComponent } from './registerClient/register.component';
import { RegisterDeliveryComponent } from './register-delivery/register-delivery.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegistORComponent,
    RegisterComponent,
    RegisterDeliveryComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule
  ]
})
export class AuthModule { }
