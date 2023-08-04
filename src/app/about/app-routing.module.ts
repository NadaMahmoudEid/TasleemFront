import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { OurPriceComponent } from './our-price/our-price.component';
import { OurservComponent } from './ourserv/ourserv.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
 
  { path: 'contact',component:ContactusComponent},
  { path: 'ourprice',component:OurPriceComponent },
  { path: 'ourserv',component:OurservComponent},
  { path: 'aboutus',component:AboutusComponent},
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
