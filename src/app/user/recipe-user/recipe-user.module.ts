import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeUserRoutingModule } from './recipe-user-routing.module';
import { RecipeUserComponent } from './recipe-user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RecipeUserComponent
  ],
  imports: [
    CommonModule,
    RecipeUserRoutingModule,
    SharedModule
  ]
})
export class RecipeUserModule { }
