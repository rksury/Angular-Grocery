import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';



const routes: Routes = [

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule ) },
  {path: '', redirectTo: '/', pathMatch: 'full'},

];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
