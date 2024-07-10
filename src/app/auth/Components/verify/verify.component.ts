import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit{

  emailAdd:any = localStorage.getItem('email')

  constructor(
    public dialogRef: MatDialogRef<VerifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {

    this.data.mail = this.emailAdd
    // this.printEmail()
  }

  printEmail():void{
    console.log(this.emailAdd);
  }







  onNoClick(): void {
    this.dialogRef.close();
  }
}
