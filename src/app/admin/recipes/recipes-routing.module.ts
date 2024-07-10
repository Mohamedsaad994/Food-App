import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AddeditrecipeComponent } from './components/addeditrecipe/addeditrecipe.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'add', component:AddeditrecipeComponent },
  { path: 'edit/:id', component: AddeditrecipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
