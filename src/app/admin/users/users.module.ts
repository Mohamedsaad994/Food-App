import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { VieweditcurrentuserComponent } from './components/vieweditcurrentuser/vieweditcurrentuser.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUsersComponent,
    VieweditcurrentuserComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
