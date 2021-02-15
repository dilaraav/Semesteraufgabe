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
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FaqComponent } from './faq/faq.component';
import { ErnaehrungsplanComponent } from './ernaehrungsplan/ernaehrungsplan.component';
import { CreateComponent } from './erfolge/create/create.component';
import { ReadComponent } from './erfolge/read/read.component';
import { UpdateComponent } from './erfolge/update/update.component';
import { DeleteComponent } from './erfolge/delete/delete.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { pencilSquare } from 'ngx-bootstrap-icons';
import { trash } from 'ngx-bootstrap-icons';
import { FormComponent } from './erfolge/read/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const icons = {
  pencilSquare,
  trash
};

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
    DatenschutzComponent,
    KontaktComponent,
    FaqComponent,
    ErnaehrungsplanComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.forRoot(icons),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
