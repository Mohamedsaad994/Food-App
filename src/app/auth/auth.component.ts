import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from './Services/auth-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{

  constructor(private _AuthServicesService:AuthServicesService,
    private _Router:Router, private _ToastrService:ToastrService
  ){}

  hide:boolean = true;

  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)])
  })

  sendLoginForm(data: FormGroup):void{

    if(this.loginForm.valid){
      this._AuthServicesService.login(data.value).subscribe({
        next:(response)=>{
          console.log(response);
          localStorage.setItem('userToken', response.token);
          this._AuthServicesService.getProfile();
          this._ToastrService.success('Successfully Login')
        },
        error: (err) =>{
          console.log(err);
          this._ToastrService.error(err.error.message)

        },
        complete: () =>{
          this._Router.navigate(['dashboard/home'])
        }
      })
    }
  }
}

