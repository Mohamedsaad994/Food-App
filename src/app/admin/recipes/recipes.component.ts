import { CategoryService } from './../categories/services/category.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { AddEditCategoryComponent } from '../categories/components/add-edit-category/add-edit-category.component';
import { RecipeService } from './services/recipe.service';
import { ViewrecipeComponent } from './components/viewrecipe/viewrecipe.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{


  searchValue:string =''
  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../assets/Images/18b9ffb2a8a791d50213a9d595c4dd52.jpg'
  // pageSize: number = 10
  pageNumber: number = 1
  listData: any = {};
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

  tageId: number = 0

  cateId: number = 0

  // pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    console.log(e);

    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getAllRecipes()
  }

  constructor(private _RecipeService:RecipeService,
    private _CategoryService:CategoryService,
    public dialog: MatDialog) {}


  ngOnInit(): void {
    this.getAllRecipes()
    this.getAllTags()
    this.getAllCategories()
  }

  getAllRecipes():void{

    let params= {
      name:this.searchValue,
      tagId: this.tageId,
      categoryId: this.cateId,
      pageSize:this.pageSize,
      pageNumber:this.pageNumber
    }
    this._RecipeService.getAllRecipes(params).subscribe({
      next:(response) =>{
        console.log('listData',response);
        this.listData = response
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  getAllTags():void{
    this._RecipeService.getAllTags().subscribe({
      next:(response) =>{
        // console.log('listData',response);
        this.listTags = response
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  getAllCategories():void{
    this._CategoryService.getAllCategories(1000, 1).subscribe({
      next:(response) =>{
        // console.log('listData',response);
        this.listCategories = response.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }






  openDialogView(item:any): void {
    // this.itemData = item
    const dialogRef = this.dialog.open(ViewrecipeComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  // editCategory(result:string){
  //   this._RecipeService.onEditRecipe(this.itemData.id, result).subscribe({
  //     next:(res)=>{
  //       console.log(res)
  //     },
  //     error: (err)=>{
  //       console.log(err)
  //     },
  //     complete:()=>{
  //       this.getAllRecipes()
  //     }
  //   })
  // }

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
    this._RecipeService.onDeleteRecipe(id).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this.getAllRecipes()
      }
    })
  }
}
