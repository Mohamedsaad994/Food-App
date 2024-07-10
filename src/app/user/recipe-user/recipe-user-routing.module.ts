import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeUserComponent } from './recipe-user.component';

const routes: Routes = [{ path: '', component: RecipeUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeUserRoutingModule { }
