import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { UserfavService } from '../../services/userfav.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewuserrecipe',
  templateUrl: './viewuserrecipe.component.html',
  styleUrls: ['./viewuserrecipe.component.scss']
})
export class ViewuserrecipeComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private _UserfavService:UserfavService,
    private _ToastrService:ToastrService
  ) {}

  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../../../assets/Images/recipeReview.jpg'


  addToFav(id:number){
    this._UserfavService.addToFavList(id).subscribe({
      next:(res)=>{
        console.log('favlist',res);
        this._ToastrService.success('Recipe Added To Fav List Successfully')
        this.onNoClick()
      },
      error:(err)=>{
        console.log(err);
        this._ToastrService.error(err.error.message)
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
