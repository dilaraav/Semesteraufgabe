import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DashboardComponent} from './dashboard/dashboard.component'
import {AgbComponent} from './agb/agb.component';
import {ImpressumComponent} from "./impressum/impressum.component";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'agb', component: AgbComponent},
  {path: 'impressum', component:ImpressumComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
