import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit{

  emailAdd:any = localStorage.getItem('email')


  ngOnInit(): void {

    this.printEmail()
  }

  printEmail():void{
    console.log(this.emailAdd);
  }

  constructor(
    public dialogRef: MatDialogRef<VerifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}





  onNoClick(): void {
    this.dialogRef.close();
  }
}
