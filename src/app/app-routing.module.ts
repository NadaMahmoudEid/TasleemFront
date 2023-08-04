import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'delivery', loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule)},
  { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  
  { path: '**', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
