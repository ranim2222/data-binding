import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ← Les deux doivent être importés

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionModule } from './suggestion/suggestion.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AuthUserComponent } from './auth-user/auth-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    NotFoundComponent,
    FormulaireComponent,
    AuthUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ← FormsModule pour ngModel
    ReactiveFormsModule, // ← ReactiveFormsModule pour formGroup
    SuggestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }