import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { UsersService } from '../../services/users.service';
import { AuthServicesService } from 'src/app/auth/Services/auth-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vieweditcurrentuser',
  templateUrl: './vieweditcurrentuser.component.html',
  styleUrls: ['./vieweditcurrentuser.component.scss']
})
export class VieweditcurrentuserComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _UsersService:UsersService, private _AuthServicesService:AuthServicesService,
    private _ToastrService:ToastrService
  ) {}

  imgSrc:any;
  hide1:boolean = true;

  imgUrl:string= 'https://upskilling-egypt.com:3006/'
  emptyImge:string= '../../../assets/Images/18b9ffb2a8a791d50213a9d595c4dd52.jpg'

  updateForm:FormGroup = new FormGroup({
    userName : new FormControl('', [Validators.required,Validators.maxLength(8) ,
      Validators.pattern(/^([a-zA-Z]{4,7}[0-9]{1})$/gm)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country : new FormControl('', [Validators.required]),
    phoneNumber : new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    confirmPassword : new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]),

    profileImage: new FormControl(''),
  })


  updateUserDetails(data:FormGroup):void{

    let myData = new FormData;

    myData.append('userName', data.value.userName)
    myData.append('email', data.value.email)
    myData.append('country', data.value.country)
    myData.append('phoneNumber', data.value.phoneNumber)
    myData.append('confirmPassword', data.value.confirmPassword)
    myData.append('profileImage', this.imgSrc)

    if(this.updateForm.valid){
      this._UsersService.updateCurrentUser(myData).subscribe({
        next:(res)=>{
          console.log('updateuser',res)
          localStorage.setItem('userName', res.userName)
          this.onNoClick()
          this._ToastrService.success('Your Details Updated Successfully')
        },
        error:(err)=>{
          console.log(err);
          this._ToastrService.error(err.error.message)
        }
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0]
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
