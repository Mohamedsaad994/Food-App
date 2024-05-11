import { UsersService } from './../../admin/users/services/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VieweditcurrentuserComponent } from 'src/app/admin/users/components/vieweditcurrentuser/vieweditcurrentuser.component';
import { CurrentUser } from 'src/app/admin/users/interfaces/user';
import { AuthServicesService } from 'src/app/auth/Services/auth-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor( public dialog: MatDialog, private _UsersService:UsersService){
    // if(localStorage.getItem('userToken') !== null){
    //   this._AuthServicesService.getProfile()
    // }
  }

  // userName: string | any
  // currentUser:any = {}
  currentUser!:CurrentUser

  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../assets/Images/18b9ffb2a8a791d50213a9d595c4dd52.jpg'


  ngOnInit(): void {
    this.getCurrentUser()
    // this.userName = localStorage.getItem('userName');
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(VieweditcurrentuserComponent, {
      data: this.currentUser,
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result',result);
      this.getCurrentUser()
    });
  }

  getCurrentUser():void{
    this._UsersService.getCurrentUser().subscribe({
      next:(res)=>{
        this.currentUser = res;
        console.log('currentUser',this.currentUser);

      }
    })
  }



}
