import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { VerifyComponent } from './Components/verify/verify.component';
import { ForgotpassComponent } from './Components/forgotpass/forgotpass.component';
import { ResetpassComponent } from './Components/resetpass/resetpass.component';




@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    VerifyComponent,
    ForgotpassComponent,
    ResetpassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AuthModule { }
