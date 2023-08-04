import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SavedJobComponent } from '../delivery/saved-job/saved-job.component';
import { HomeComponent } from '../home/home/home.component';
import { OurservComponent } from '../about/ourserv/ourserv.component';
import { AboutModule } from '../about/about.module';
import { AboutusComponent } from '../about/aboutus/aboutus.component';
import { ProfileComponent } from '../delivery/profile/profile.component';
import { FilterComponent } from '../delivery/filter/filter.component';
import { NotifyComponent } from '../delivery/notify/notify.component';
import { ChatComponent } from '../chat/chat/chat.component';
import { MyProjectComponent } from '../client/my-project/my-project.component';
import { RegistORComponent } from '../auth/regist-or/regist-or.component';
import { AddjobComponent } from '../client/addjob/addjob.component';
import { ContactusComponent } from '../about/contactus/contactus.component';
import { OurPriceComponent } from '../about/our-price/our-price.component';

const routes: Routes = [
  {path:'savedjobs',component:SavedJobComponent},
{path:'home',component:HomeComponent},
{path:'service',component:OurservComponent},
{path:'about',component:AboutusComponent},
{path:'profile',component:ProfileComponent},
{path:'jobs',component:FilterComponent},
{path:'notify',component:NotifyComponent},
{path:'chat',component:ChatComponent},
{path:'addjob',component:AddjobComponent},
{path:'myProjects',component:MyProjectComponent},
{path:'choose',component:RegistORComponent},
{path:'Contact',component:ContactusComponent},
{path:'Price',component:OurPriceComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
  ,  exports: [RouterModule]
})
export class SharedRoutingModule { }
