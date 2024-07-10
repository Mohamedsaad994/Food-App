import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from '../../Services/auth-services.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent {

  constructor(private _AuthServicesService:AuthServicesService, private _ToastrService:ToastrService,
    private _Router:Router
  ){}

  forgotPassForm:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email])
  })

  sendForgotForm():void{
    let data = this.forgotPassForm.value
    if(this.forgotPassForm.valid){
      this._AuthServicesService.forgotPass(data).subscribe({
        next:(res)=>{
          console.log(res);
          this._ToastrService.success(res.message)
        },
        error:(err)=>{
          console.log(err);
          this._ToastrService.error(err.error.message)
        },
        complete:()=>{
          this._Router.navigate(['auth/resetPass'])
        }
      })
    }

  }

}
