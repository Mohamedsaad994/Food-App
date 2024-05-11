import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ViewuserrecipeComponent } from './components/viewuserrecipe/viewuserrecipe.component';


@NgModule({
  declarations: [
    UserComponent,
    ViewuserrecipeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
