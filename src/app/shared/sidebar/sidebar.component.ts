import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangepasswordComponent } from 'src/app/admin/users/components/changepassword/changepassword.component';
import { AuthServicesService } from 'src/app/auth/Services/auth-services.service';

interface IMenu{
  text: string;
  icon: string;
  link: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {



  custom:boolean = true

  constructor(private _AuthServicesService:AuthServicesService, private _Router:Router,  public dialog: MatDialog){}

  isAdmin():boolean{
    return this._AuthServicesService.role == 'SuperAdmin' ? true : false
  }
  isUser():boolean{
    return this._AuthServicesService.role == 'SystemUser' ? true : false
  }

  menu: IMenu[] = [
    {
      text: 'Home',
      icon: 'fa-solid fa-home',
      link: '/dashboard/home',
      isActive: this.isAdmin() || this.isUser()
    },
    {
      text: 'Users',
      icon: 'fa-solid fa-user-group',
      link: '/dashboard/admin/users',
      isActive: this.isAdmin()
    },
    {
      text: 'Recipes',
      icon: 'fa-solid fa-list-check',
      link: '/dashboard/admin/recipes',
      isActive: this.isAdmin()
    },
    {
      text: 'Categories',
      icon: 'fa-solid fa-table-list',
      link: '/dashboard/admin/categories',
      isActive: this.isAdmin()
    },
    {
      text: 'Recipes',
      icon: 'fa-solid fa-list-check',
      link: '/dashboard/user/recipe-user',
      isActive: this.isUser()
    },
    {
      text: 'Favorites',
      icon: 'fa-regular fa-heart',
      link: '/dashboard/user/fav',
      isActive: this.isUser()
    },
  ]

  signOut():void{
    localStorage.removeItem('userToken');
    this._Router.navigate(['auth'])
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ChangepasswordComponent, {
    data: {},
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result',result);
      // this.getCurrentUser()
    });
  }

}
