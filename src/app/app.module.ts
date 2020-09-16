import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent as CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCardComponent as AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CradsComponent } from './crads/crads.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddCardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    CradsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
