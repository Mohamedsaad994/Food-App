import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from '../../Services/auth-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent {

  constructor(private _AuthServicesService:AuthServicesService, private _ToastrService:ToastrService,
    private _Router:Router){}

  hide1:boolean = true
  hide2:boolean = true

  resetForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    seed: new FormControl('',[Validators.required]),
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

  sendResetForm():void{

    let data = this.resetForm.value
    if(this.resetForm.valid){
      this._AuthServicesService.resetPass(data).subscribe({
        next: (res)=>{
          console.log(res);
          this._ToastrService.success(res.message)
        },
        error:(err)=>{
          console.log(err);
          this._ToastrService.error(err.error.message)
        },
        complete:()=>{
          this._Router.navigate(['auth'])
        }
      })
    }

  }
}
