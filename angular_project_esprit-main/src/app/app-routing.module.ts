import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ListSuggestionComponent } from './suggestion/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthUserComponent } from './auth-user/auth-user.component'; // ← Ajoutez cet import

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'suggestion', component: ListSuggestionComponent },
  { path: 'auth', component: AuthUserComponent }, // ← Ajoutez cette ligne pour le formulaire
  { path: 'login', component: AuthUserComponent }, // ← Optionnel: alias pour login
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }