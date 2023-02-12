import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { ReflexologieComponent } from './reflexologie/reflexologie.component';
import { SeancesComponent } from './seances/seances.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'reflexologie', component: ReflexologieComponent },
  { path: 'apropos', component: AProposComponent},
  { path: 'seances', component: SeancesComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
