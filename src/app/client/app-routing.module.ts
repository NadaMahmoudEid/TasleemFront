import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { JobPorposalsComponent } from './job-porposals/job-porposals.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { PorposalDetailsComponent } from './porposal-details/porposal-details.component';

const routes: Routes = [
{path:'addjob',component:AddjobComponent},
{path:'jobPorposal',component:JobPorposalsComponent},
{path:'Projcts',component:MyProjectComponent},
{path:'porpDetails',component:PorposalDetailsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
