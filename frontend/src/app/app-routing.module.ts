import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  DashboardComponent
} from './index';

const routes: Routes = [
  {path: '', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
