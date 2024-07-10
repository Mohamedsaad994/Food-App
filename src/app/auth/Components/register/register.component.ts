import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlOptions } from '@angular/forms';
import { AuthServicesService } from '../../Services/auth-services.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VerifyComponent } from '../verify/verify.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthServicesService:AuthServicesService, private _ToastrService:ToastrService,
    private _Router:Router, public dialog: MatDialog
  ){}

  hide1:boolean = true;
  hide2:boolean = true;

  mail:string = ''
  code:string = ''

  // emailAdd:any;

  imgSrc:any;



  registerForm:FormGroup = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]{4,7}[0-9]{1})$/gm)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/)]),
    country : new FormControl('', [Validators.required]),
    phoneNumber : new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    profileImage: new FormControl(''),
    password : new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]),
    confirmPassword : new FormControl(''),
  }, {validators: [this.confirmPass]} as FormControlOptions)



  confirmPass(group:FormGroup):void{
    const password = group.get('password')
    const confirmPassword = group.get('confirmPassword')

    if(confirmPassword?.value == ''){
      confirmPassword.setErrors({required:true})
    }else if(password?.value !== confirmPassword?.value){
      confirmPassword?.setErrors({mismatch:true})
  }
}



  sendRegisterForm(data: FormGroup):void{

    let myData = new FormData()

    myData.append('userName', data.value.userName)
    myData.append('email', data.value.email)
    myData.append('country', data.value.country)
    myData.append('phoneNumber', data.value.phoneNumber)
    myData.append('profileImage', this.imgSrc)
    myData.append('password', data.value.password)
    myData.append('confirmPassword', data.value.confirmPassword)


    if(this.registerForm.valid){
      this._AuthServicesService.register(myData).subscribe({
        next:(response)=>{
          console.log(response);
          this._ToastrService.success(response.message)
          localStorage.setItem('email', this.registerForm.get('email')?.value)
          // this.emailAdd = localStorage.getItem('email');
        },
        error: (err) =>{
          console.log(err);
          this._ToastrService.error(err.error.message)
          localStorage.setItem('email', this.registerForm.get('email')?.value)
        },
        complete:()=>{
          this.openDialog()
        }
      })
    }
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

openDialog(): void {
  const dialogRef = this.dialog.open(VerifyComponent, {
    data: {mail: this.mail, code: this.code},

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    if(result){
      this.code = result.code;
      this.mail = result.mail;
      this.onActivate()
    }
  });
}

onActivate():void{

  this._AuthServicesService.verify(this.mail, this.code).subscribe({
    next: (response) =>{
      console.log(response);
      this._ToastrService.success(response.message)
    },
    error:(err) => {
      this._ToastrService.error(err.error.message)
    },
    complete:() =>{
      this._Router.navigate(['']);

    }
  })

}
}
