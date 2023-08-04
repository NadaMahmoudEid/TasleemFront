import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservComponent } from './ourserv/ourserv.component';
import { OurPriceComponent } from './our-price/our-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    AboutusComponent,
    OurservComponent,
    OurPriceComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports:[
    AboutusComponent,
    OurservComponent,
    OurPriceComponent
  ]
})
export class AboutModule { }
