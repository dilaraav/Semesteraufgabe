import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgbComponent } from './agb/agb.component';
import { ImpressumComponent } from './impressum/impressum.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MeineerfolgeComponent } from './meineerfolge/meineerfolge.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AgbComponent,
    ImpressumComponent,
    MeineerfolgeComponent,
    DatenschutzComponent,
    KontaktComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
