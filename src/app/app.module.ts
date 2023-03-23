import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ReflexologieComponent } from './reflexologie/reflexologie.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { SeancesComponent } from './seances/seances.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { CguComponent } from './cgu/cgu.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ReflexologieComponent,
    AProposComponent,
    SeancesComponent,
    ContactComponent,
    Page404Component,
    CguComponent,
    PolitiqueConfidentialiteComponent,
    MentionsLegalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
