import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { CradsComponent } from './crads/crads.component';

const routes: Routes = [
  { path: '', component: CardComponent,canActivate:[AuthGaurdService] },
  { path: 'cards', component: CradsComponent,canActivate:[AuthGaurdService] },
  { path: 'addemployee', component: AddCardComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
