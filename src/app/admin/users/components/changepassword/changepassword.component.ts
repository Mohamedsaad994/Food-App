import { Component, Inject } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private _UsersService:UsersService,
    private _ToastrService:ToastrService
  ) {}





  onNoClick(): void {
    this.dialogRef.close();
  }

  hide1:boolean = true;
  hide2:boolean = true;
  hide3:boolean = true;

  changePassForm:FormGroup = new FormGroup({
    oldPassword : new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]),
    newPassword : new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]),
    confirmNewPassword : new FormControl(''),
  }, {validators: [this.confirmPass]} as FormControlOptions)


  confirmPass(group:FormGroup):void{
    const newPassword = group.get('newPassword')
    const confirmNewPassword = group.get('confirmNewPassword')

    if(confirmNewPassword?.value == ''){
      confirmNewPassword.setErrors({required:true})
    }else if(newPassword?.value !== confirmNewPassword?.value){
      confirmNewPassword?.setErrors({mismatch:true})
  }
  }

  sendNewPass():void{
    let data = this.changePassForm.value
    this._UsersService.changePassword(data).subscribe({
      next:(res)=>{
        console.log('changePass',res);
        this.onNoClick()
        this._ToastrService.success(res.message)
      },
      error:(err)=>{
        console.log(err);
        this._ToastrService.error(err.error.message)
        this.onNoClick()
      }
    })
  }
}
