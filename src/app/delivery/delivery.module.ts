import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { ProfileComponent } from './profile/profile.component';
import { NotifyComponent } from './notify/notify.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PorposalComponent } from './porposal/porposal.component';
import { AppRoutingModule } from './app-routing.module';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilterComponent,
    SavedJobComponent,
    ProfileComponent,
    NotifyComponent,
    JobDetailsComponent,
    PorposalComponent,
    DataProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports:[
    FilterComponent,
    SavedJobComponent,
    ProfileComponent,
    NotifyComponent,
    JobDetailsComponent,
    PorposalComponent
  ]
})
export class DeliveryModule { }
