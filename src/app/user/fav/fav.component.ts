import { Component, OnInit } from '@angular/core';
import { UserfavService } from '../services/userfav.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit{

  favList:any[] = []
  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../../../assets/Images/recipeReview.jpg'

  constructor(private _UserfavService:UserfavService,public dialog: MatDialog, private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this.getAllFav()
  }

  getAllFav():void{

    this._UserfavService.getAllFavList(1000, 1).subscribe({
      next: (res)=>{
        console.log(res);
        this.favList = res.data
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
        this._ToastrService.success('Recipe Deleted From Fav Successfully')
      },
      error:(err)=>{
        this._ToastrService.error(err.error.message)
      },
      complete:()=>{
        this.getAllFav()
      }
    })
  }
}
