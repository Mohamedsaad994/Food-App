import { Component, OnInit } from '@angular/core';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{



    // pageSize: number = 10
    pageNumber: number = 1
    listData: any = {};
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

    // pageEvent: PageEvent;

    handlePageEvent(e: PageEvent) {
      // this.pageEvent = e;
      console.log(e);

      this.length = e.length;
      this.pageSize = e.pageSize;
      this.pageNumber = e.pageIndex;

      this.getAllCategories()
    }

    constructor(private _CategoryService:CategoryService, public dialog: MatDialog) {}


    ngOnInit(): void {
      this.getAllCategories()
    }

    getAllCategories():void{
      this._CategoryService.getAllCategories(this.pageSize, this.pageNumber).subscribe({
        next:(response) =>{
          console.log('listData',response);
          this.listData = response
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(AddEditCategoryComponent, {
        data: {name: this.categoryItem},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if(result){
          this.addCategory(result)
        }
      });
    }


    addCategory(categoryName:string){
      this._CategoryService.onAddCategory(categoryName).subscribe({
        next: (res) =>{
          console.log(res);
        },
        error: (err) =>{
          console.log(err);
        },
        complete: () => {
          this.getAllCategories()
        }
      })
    }

    openDialogEdit(item:any): void {
      this.itemData = item
      const dialogRef = this.dialog.open(AddEditCategoryComponent, {
        data: {name: this.itemData.name},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if(result){
          this.editCategory(result)
        }
      });
    }

    editCategory(result:string){
      this._CategoryService.onEditCategory(this.itemData.id, result).subscribe({
        next:(res)=>{
          console.log(res)
        },
        error: (err)=>{
          console.log(err)
        },
        complete:()=>{
          this.getAllCategories()
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
        this.deleteCategory(result)
      });
    }


    deleteCategory(id:number){
      this._CategoryService.onDeleteCategory(id).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
          this.getAllCategories()
        }
      })
    }

}
