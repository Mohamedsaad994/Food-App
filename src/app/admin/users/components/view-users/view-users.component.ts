import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../assets/Images/18b9ffb2a8a791d50213a9d595c4dd52.jpg'


  onNoClick(): void {
    this.dialogRef.close();
  }
}
