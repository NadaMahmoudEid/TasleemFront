import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    LandingComponent
  ]
})
export class HomeModule { }
