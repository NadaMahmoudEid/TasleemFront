import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { ProfileComponent } from './profile/profile.component';
import { PorposalComponent } from './porposal/porposal.component';
import { NotifyComponent } from './notify/notify.component';
import { JobPorposalsComponent } from '../client/job-porposals/job-porposals.component';
import { FilterComponent } from './filter/filter.component';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
{path:'savedjobs',component:SavedJobComponent},
{path:'profile',component:ProfileComponent},
{path:'porposal',component:PorposalComponent},
{path:'notify',component:NotifyComponent},
{path:'jobDetails/:id',component:JobDetailsComponent},
{path:'ProfileData',component:DataProfileComponent},
{path:'filter',component:FilterComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
