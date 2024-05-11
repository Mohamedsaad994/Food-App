import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../Core/Interceptors/Gards/admin.guard';
import { userGuard } from '../Core/Interceptors/Gards/user.guard';
import { HomeComponent } from '../shared/home/home.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'admin',canActivate: [adminGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
    { path: 'user', canActivate: [userGuard], loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
    { path: 'home', component: HomeComponent}
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
