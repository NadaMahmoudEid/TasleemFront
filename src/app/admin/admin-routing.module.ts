import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [

  { path: 'main', component: MainComponent,
  children:[
    { path: 'dash', component: DashboardComponent},
    { path: 'wellcome', component: WelcomeComponent},


  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
