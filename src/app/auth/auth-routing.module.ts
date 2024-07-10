import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpassComponent } from './Components/forgotpass/forgotpass.component';
import { ResetpassComponent } from './Components/resetpass/resetpass.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'forgotPass', component: ForgotpassComponent},
  {path: 'resetPass', component: ResetpassComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
