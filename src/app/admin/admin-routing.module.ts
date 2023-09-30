import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddSubAdminComponent } from './add-sub-admin/add-sub-admin.component';
import { SubadminFormComponent } from './subadmin-form/subadmin-form.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [

  { path: 'main', component: MainComponent,
  children:[
    { path: 'dash', component: DashboardComponent},
    { path: 'wellcome', component: WelcomeComponent},
    { path: 'subadmin', component: AddSubAdminComponent},
    { path: 'AddSub', component: SubadminFormComponent},
    { path: 'report', component: ReportComponent},


  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
