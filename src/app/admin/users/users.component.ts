import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { CategoryService } from '../categories/services/category.service';
import { RecipeService } from '../recipes/services/recipe.service';
import { UsersService } from './services/users.service';
import { ViewUsersComponent } from './components/view-users/view-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private _RecipeService:RecipeService,private _UsersService:UsersService,
    public dialog: MatDialog) {}

  showCart:boolean = true;
  showTable:boolean = false;

  searchValue:string =''
  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../assets/Images/18b9ffb2a8a791d50213a9d595c4dd52.jpg'
  // pageSize: number = 10
  pageNumber: number = 1
  usersList: any = {};
  listTags:any[] = [];
  listCategories:any[] = []
  categoryItem:string = '';
  itemData: any = {}


  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25, 100];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  roleIds: number[] = []

  searchParam: string = ''

  // pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    console.log(e);

    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getAllUsers()
  }

  Cart():void{


    this.showCart = true
    this.showTable = false
  }
  Table():void{

    this.showCart = false
    this.showTable = true
  }


  ngOnInit(): void {
    this.getAllUsers()
    // this.getAllTags()
    // this.getAllCategories()
  }

  getAllUsers():void{

    let params= {
      // name:this.searchValue,
      // tagId: this.tageId,
      // categoryId: this.cateId,
      [this.searchParam] : this.searchValue,
      groups: this.roleIds,
      pageSize:this.pageSize,
      pageNumber:this.pageNumber
    }
    this._UsersService.getAllUsers(params).subscribe({
      next:(response) =>{
        console.log('usersData',response);
        this.usersList = response
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  // getAllTags():void{
  //   this._RecipeService.getAllTags().subscribe({
  //     next:(response) =>{
  //       // console.log('listData',response);
  //       this.listTags = response
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }
  // getAllCategories():void{
  //   this._CategoryService.getAllCategories(1000, 1).subscribe({
  //     next:(response) =>{
  //       // console.log('listData',response);
  //       this.listCategories = response.data
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }


  openViewDialog(item:any): void {
    // this.itemData = item
    const dialogRef = this.dialog.open(ViewUsersComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.deleteCategory(result)
    });
  }


  openDialogDelete(id:number): void {
    // this.itemData = item
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {itemId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.deleteCategory(result)
    });
  }


  deleteCategory(id:number){
    this._UsersService.DeleteUsers(id).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this.getAllUsers()
      }
    })
  }
}
