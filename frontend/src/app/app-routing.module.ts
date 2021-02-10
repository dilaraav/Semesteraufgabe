import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DashboardComponent} from './dashboard/dashboard.component'
import {AgbComponent} from './agb/agb.component';
import {ImpressumComponent} from "./impressum/impressum.component";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {MeineerfolgeComponent} from "./meineerfolge/meineerfolge.component";
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {FaqComponent} from './faq/faq.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'agb', component: AgbComponent},
  {path: 'impressum', component:ImpressumComponent},
  {path: 'meineerfolge', component:MeineerfolgeComponent},
  {path: 'datenschutz', component:DatenschutzComponent},
  {path: 'kontakt', component:KontaktComponent},
  {path: 'faq', component:FaqComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
