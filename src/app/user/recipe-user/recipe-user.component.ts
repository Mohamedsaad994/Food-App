import { Component, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { RecipeService } from 'src/app/admin/recipes/services/recipe.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { Iuser } from '../interfaces/iuser';
import { ViewuserrecipeComponent } from '../components/viewuserrecipe/viewuserrecipe.component';
import { UserfavService } from '../services/userfav.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-user',
  templateUrl: './recipe-user.component.html',
  styleUrls: ['./recipe-user.component.scss']
})
export class RecipeUserComponent {

  constructor(private _RecipeService:RecipeService,
    private _CategoryService:CategoryService,
    public dialog: MatDialog,private _UserfavService:UserfavService, private _ToastrService:ToastrService,
  ) {}

  showCart:boolean = true;
  showTable:boolean = false;
  searchValue:string =''
  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../../../assets/Images/recipeReview.jpg'
  // pageSize: number = 10
  pageNumber: number = 1
  listData!: Iuser;
  listTags:any[] = [];
  listCategories:any[] = []
  categoryItem:string = '';
  itemData: any = {}
  favList:any[]=[]

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

  Cart():void{


    this.showCart = true
    this.showTable = false
  }
  Table():void{

    this.showCart = false
    this.showTable = true
  }
  // pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    console.log(e);

    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getAllRecipes()
  }


  ngOnInit(): void {
    this.getAllRecipes()
    this.getAllTags()
    this.getAllCategories()
    this.getAllFav()
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

  getAllFav():void{
    this._UserfavService.getAllFavList(1000,1).subscribe({
      next:(res)=>{
        console.log('allFav',res);
        this.favList = res.data
      }
    })
  }

  openDialogView(item:any): void {
    // this.itemData = item
    const dialogRef = this.dialog.open(ViewuserrecipeComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  addToFav(id:number){
    this._UserfavService.addToFavList(id).subscribe({
      next:(res)=>{
        // this.favList.push(res);
        // console.log(this.favList);
        this.getAllFav()

        this._ToastrService.success('Recipe Added To Fav List Successfully')
      },
      error:(err)=>{
        console.log(err);
        this._ToastrService.error(err.error.message)
      }
    })
  }



  openDialogDelete(id:number): void {
    // this.itemData = item
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {itemId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.deleteFromFav(result)
    });
  }

  deleteFromFav(id:number):void{
    this._UserfavService.deleteFromFav(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success(res.message)
      }
    })
  }
}
