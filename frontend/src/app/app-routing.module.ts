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
import { ErnaehrungsplanComponent } from './ernaehrungsplan/ernaehrungsplan.component';
import { CreateComponent } from './erfolge/create/create.component';
import { UpdateComponent } from './erfolge/update/update.component';
import { ReadComponent } from './erfolge/read/read.component';
import { DeleteComponent } from './erfolge/delete/delete.component';


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
  {path: 'ernaehrungsplan', component:ErnaehrungsplanComponent},
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'delete/:id', component: DeleteComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
