import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {path: 'home' , component: PagesComponent ,
  children: [
   { path: 'page', component: PagesComponent},
 ]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
