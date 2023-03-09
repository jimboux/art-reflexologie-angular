import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { CguComponent } from './cgu/cgu.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { Page404Component } from './page404/page404.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { ReflexologieComponent } from './reflexologie/reflexologie.component';
import { SeancesComponent } from './seances/seances.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'reflexologie', component: ReflexologieComponent },
  { path: 'apropos', component: AProposComponent},
  { path: 'seances', component: SeancesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cgu', component: CguComponent},
  { path: 'politique-de-confidentialite', component: PolitiqueConfidentialiteComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
