import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddSubAdminComponent } from './add-sub-admin/add-sub-admin.component';
import { SubadminFormComponent } from './subadmin-form/subadmin-form.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    WelcomeComponent,
    AddSubAdminComponent,
    SubadminFormComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
   AdminRoutingModule
   
  ]
})
export class AdminModule { }
