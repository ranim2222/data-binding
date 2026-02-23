import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { FormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';


@NgModule({
  declarations: [
    ListSuggestionComponent
  ],
  imports: [
    CommonModule,
    SuggestionRoutingModule,
    FormsModule
  ]
})
export class SuggestionModule { }
