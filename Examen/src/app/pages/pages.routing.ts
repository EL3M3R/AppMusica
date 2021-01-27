import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
 import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {path: 'dashboard' , component: PagesComponent ,
     children: [
      { path: 'page', component: PagesComponent},
    ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
  export class PagesRouterModule {}
  