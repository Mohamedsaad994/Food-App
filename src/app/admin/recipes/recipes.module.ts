import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddeditrecipeComponent } from './components/addeditrecipe/addeditrecipe.component';
import { ViewrecipeComponent } from './components/viewrecipe/viewrecipe.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddeditrecipeComponent,
    ViewrecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule { }
