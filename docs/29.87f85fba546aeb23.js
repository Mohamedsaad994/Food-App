"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[29],{7029:(ge,w,p)=>{p.r(w),p.d(w,{AuthModule:()=>ue});var u=p(6814),c=p(3403),i=p(6223),e=p(5879),g=p(3862),_=p(2425);function T(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email is Requierd"),e.qZA())}function b(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email Invalid Format"),e.qZA())}function x(r,s){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,T,2,0,"p",23),e.YNc(2,b,2,0,"p",23),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.loginForm.get("email"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.loginForm.get("email"))?null:t.getError("email"))}}function A(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Password is Requierd"),e.qZA())}function C(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Must be Contain Uppercase Letter, Lowercase Letter, Numeric Value, Special Symbol(!@#$%^&*_+=-) and the total length should be between 8 - 16"),e.qZA())}function q(r,s){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,A,2,0,"p",23),e.YNc(2,C,2,0,"p",23),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.loginForm.get("password"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.loginForm.get("password"))?null:t.getError("pattern"))}}let y=(()=>{class r{constructor(n,o,t){this._AuthServicesService=n,this._Router=o,this._ToastrService=t,this.hide=!0,this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)])})}sendLoginForm(n){this.loginForm.valid&&this._AuthServicesService.login(n.value).subscribe({next:o=>{console.log(o),localStorage.setItem("userToken",o.token),this._AuthServicesService.getProfile(),this._ToastrService.success("Successfully Login")},error:o=>{console.log(o),this._ToastrService.error(o.error.message)},complete:()=>{this._Router.navigate(["dashboard/home"])}})}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(g.C),e.Y36(c.F0),e.Y36(_._W))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-auth"]],decls:31,vars:7,consts:[[1,"auth"],[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-8"],[1,"auth-card"],[1,"text-center","mx-auto"],["src","./assets/Images/4 4.svg","alt",""],[3,"formGroup","ngSubmit"],[1,"input-group","form-control","p-0","mb-3","mt-4"],["id","basic-addon1",1,"input-group-text","span","py-3","me-2"],[1,"fa-solid","fa-at"],["type","text","formControlName","email","placeholder","Enter Your E-mail","aria-label","Username","aria-describedby","basic-addon1",1,"w-75","py-2"],["class","warning text-danger text-center fw-bold",4,"ngIf"],[1,"input-group","form-control","p-0","mb-3","align-items-center"],[1,"fa-solid","fa-lock"],["formControlName","password","placeholder","Password","aria-label","Username","aria-describedby","basic-addon1",1,"py-2","flex-grow-1",3,"type"],[3,"click"],[1,"fa-solid"],[1,"links"],["routerLink","register",1,"text-gray"],["routerLink","forgotPass",1,"text-main"],[1,"success","w-100","mt-4",3,"disabled"],[1,"warning","text-danger","text-center","fw-bold"],[4,"ngIf"]],template:function(o,t){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"h1"),e._uU(8,"Log In"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(11,"form",7),e.NdJ("ngSubmit",function(){return t.sendLoginForm(t.loginForm)}),e.TgZ(12,"div",8)(13,"span",9),e._UZ(14,"i",10),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.YNc(16,x,3,2,"div",12),e.TgZ(17,"div",13)(18,"span",9),e._UZ(19,"i",14),e.qZA(),e._UZ(20,"input",15),e.TgZ(21,"span",16),e.NdJ("click",function(){return t.hide=!t.hide}),e._UZ(22,"i",17),e.qZA()(),e.YNc(23,q,3,2,"div",12),e.TgZ(24,"div",18)(25,"a",19),e._uU(26,"Register Now?"),e.qZA(),e.TgZ(27,"a",20),e._uU(28,"Forgot Password?"),e.qZA()(),e.TgZ(29,"button",21),e._uU(30,"Login"),e.qZA()()()()()()()),2&o){let a,l;e.xp6(11),e.Q6J("formGroup",t.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(a=t.loginForm.get("email"))?null:a.errors)&&(null==(a=t.loginForm.get("email"))?null:a.touched)),e.xp6(4),e.Q6J("type",t.hide?"password":"text"),e.xp6(2),e.Tol(t.hide?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(l=t.loginForm.get("password"))?null:l.errors)&&(null==(l=t.loginForm.get("password"))?null:l.touched)),e.xp6(6),e.Q6J("disabled",t.loginForm.invalid)}},dependencies:[u.O5,c.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".auth[_ngcontent-%COMP%]{background-image:url(auth-bg.bd749d7a8b23d3dd.png);background-position:center center;background-repeat:no-repeat;background-size:cover;height:100vh}"]})}return r})();var f=p(7700);let F=(()=>{class r{constructor(n,o){this.dialogRef=n,this.data=o,this.emailAdd=localStorage.getItem("email")}ngOnInit(){this.data.mail=this.emailAdd}printEmail(){console.log(this.emailAdd)}onNoClick(){this.dialogRef.close()}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(f.so),e.Y36(f.WI))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-verify"]],decls:20,vars:3,consts:[[1,"text-center","d-flex","flex-column","justify-content-between","p-4"],[1,"text-danger","text-end","link1",3,"click"],[1,"fa-solid","fa-xmark-circle","fa-2x"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h5","m-0"],[1,"text-danger","link2",3,"click"],[1,"input-group","mb-3","form-control","p-0"],["id","basic-addon1",1,"input-group-text","me-2"],[1,"fa-solid","fa-at"],["type","email","placeholder","Enter Your E-mail",1,"m-input","py-2",3,"ngModel","ngModelChange"],[1,"fa-solid","fa-mobile-screen"],["type","text","placeholder","OTP Code",1,"m-input","py-2",3,"ngModel","ngModelChange"],[1,"text-end"],[1,"success","w-25",3,"mat-dialog-close"]],template:function(o,t){1&o&&(e.TgZ(0,"section",0)(1,"a",1),e.NdJ("click",function(){return t.onNoClick()}),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"div",3)(4,"h3",4),e._uU(5,"Check Your Mail and Enter OTP"),e.qZA(),e.TgZ(6,"a",5),e.NdJ("click",function(){return t.onNoClick()}),e._UZ(7,"i",2),e.qZA()(),e.TgZ(8,"div")(9,"div",6)(10,"span",7),e._UZ(11,"i",8),e.qZA(),e.TgZ(12,"input",9),e.NdJ("ngModelChange",function(l){return t.data.mail=l}),e.qZA()(),e.TgZ(13,"div",6)(14,"span",7),e._UZ(15,"i",10),e.qZA(),e.TgZ(16,"input",11),e.NdJ("ngModelChange",function(l){return t.data.code=l}),e.qZA()()(),e.TgZ(17,"div",12)(18,"button",13),e._uU(19,"Ok"),e.qZA()()()),2&o&&(e.xp6(12),e.Q6J("ngModel",t.data.mail),e.xp6(4),e.Q6J("ngModel",t.data.code),e.xp6(2),e.Q6J("mat-dialog-close",t.data))},dependencies:[i.Fj,i.JJ,f.ZT,i.On],styles:["section[_ngcontent-%COMP%]{width:400px;height:300px}@media (min-width: 576px){.link1[_ngcontent-%COMP%]{display:none}}@media (max-width: 575.98px){section[_ngcontent-%COMP%]{width:270px;height:350px}h3[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{font-size:16px}.input-group[_ngcontent-%COMP%]{width:90%!important}.input-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:5px!important;font-size:14px}.link2[_ngcontent-%COMP%]{display:none}}"]})}return r})();var Z=p(7680);function N(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"ngx-dropzone-image-preview",39),e.NdJ("removed",function(){const a=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.onRemove(a))}),e.qZA()}if(2&r){const n=s.$implicit;e.Q6J("removable",!0)("file",n)}}function U(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* userName is Requierd"),e.qZA())}function I(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* The userName must contain characters 4,8 and end with one numeric without spaces."),e.qZA())}function P(r,s){if(1&r&&(e.TgZ(0,"div",40),e.YNc(1,U,2,0,"p",41),e.YNc(2,I,2,0,"p",41),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("userName"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("userName"))?null:t.getError("pattern"))}}function J(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email is Requierd"),e.qZA())}function R(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email Invalid Format"),e.qZA())}function k(r,s){if(1&r&&(e.TgZ(0,"div",40),e.YNc(1,J,2,0,"p",41),e.YNc(2,R,2,0,"p",41),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("email"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("email"))?null:t.getError("pattern"))}}function Y(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Country is Requierd"),e.qZA())}function S(r,s){if(1&r&&(e.TgZ(0,"div",40),e.YNc(1,Y,2,0,"p",41),e.qZA()),2&r){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("country"))?null:o.getError("required"))}}function Q(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Phone is Requierd"),e.qZA())}function E(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Accept only Egyption Phone Numbers"),e.qZA())}function M(r,s){if(1&r&&(e.TgZ(0,"div",40),e.YNc(1,Q,2,0,"p",41),e.YNc(2,E,2,0,"p",41),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("phoneNumber"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("phoneNumber"))?null:t.getError("pattern"))}}function O(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Password is Requierd"),e.qZA())}function z(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Must be Contain Uppercase Letter, Lowercase Letter, Numeric Value, Special Symbol(!@#$%^&*_+=-) and the total length should be between 8 - 16"),e.qZA())}function L(r,s){if(1&r&&(e.TgZ(0,"div",40),e.YNc(1,O,2,0,"p",41),e.YNc(2,z,2,0,"p",41),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("password"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("password"))?null:t.getError("pattern"))}}function j(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Password is Requierd"),e.qZA())}function $(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Password confirmation Is incorrected"),e.qZA())}function G(r,s){if(1&r&&(e.TgZ(0,"div",40),e.YNc(1,j,2,0,"p",41),e.YNc(2,$,2,0,"p",41),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("confirmPassword"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("confirmPassword"))?null:t.getError("mismatch"))}}function W(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email is Requierd"),e.qZA())}function B(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email Invalid Format"),e.qZA())}function H(r,s){if(1&r&&(e.TgZ(0,"div",14),e.YNc(1,W,2,0,"p",15),e.YNc(2,B,2,0,"p",15),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.forgotPassForm.get("email"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.forgotPassForm.get("email"))?null:t.getError("email"))}}function D(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email is Requierd"),e.qZA())}function K(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Email Invalid Format"),e.qZA())}function ee(r,s){if(1&r&&(e.TgZ(0,"div",23),e.YNc(1,D,2,0,"p",24),e.YNc(2,K,2,0,"p",24),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.resetForm.get("email"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.resetForm.get("email"))?null:t.getError("email"))}}function te(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Password is Requierd"),e.qZA())}function re(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Must be Contain Uppercase Letter, Lowercase Letter, Numeric Value, Special Symbol(!@#$%^&*_+=-) and the total length should be between 8 - 16"),e.qZA())}function oe(r,s){if(1&r&&(e.TgZ(0,"div",23),e.YNc(1,te,2,0,"p",24),e.YNc(2,re,2,0,"p",24),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.resetForm.get("password"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.resetForm.get("password"))?null:t.getError("pattern"))}}function ne(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Confirm Password is Requierd"),e.qZA())}function ie(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* Password confirmation Is incorrected"),e.qZA())}function se(r,s){if(1&r&&(e.TgZ(0,"div",23),e.YNc(1,ne,2,0,"p",24),e.YNc(2,ie,2,0,"p",24),e.qZA()),2&r){const n=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=n.resetForm.get("confirmPassword"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=n.resetForm.get("confirmPassword"))?null:t.getError("mismatch"))}}function ae(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"* OTP Code is Requierd"),e.qZA())}function le(r,s){if(1&r&&(e.TgZ(0,"div",23),e.YNc(1,ae,2,0,"p",24),e.qZA()),2&r){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.resetForm.get("seed"))?null:o.getError("required"))}}const pe=[{path:"",component:y},{path:"register",component:(()=>{class r{constructor(n,o,t,a){this._AuthServicesService=n,this._ToastrService=o,this._Router=t,this.dialog=a,this.hide1=!0,this.hide2=!0,this.mail="",this.code="",this.registerForm=new i.cw({userName:new i.NI("",[i.kI.required,i.kI.pattern(/^([a-zA-Z]{4,7}[0-9]{1})$/gm)]),email:new i.NI("",[i.kI.required,i.kI.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/)]),country:new i.NI("",[i.kI.required]),phoneNumber:new i.NI("",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)]),profileImage:new i.NI(""),password:new i.NI("",[i.kI.required,i.kI.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]),confirmPassword:new i.NI("")},{validators:[this.confirmPass]}),this.files=[]}confirmPass(n){const o=n.get("password"),t=n.get("confirmPassword");""==t?.value?t.setErrors({required:!0}):o?.value!==t?.value&&t?.setErrors({mismatch:!0})}sendRegisterForm(n){let o=new FormData;o.append("userName",n.value.userName),o.append("email",n.value.email),o.append("country",n.value.country),o.append("phoneNumber",n.value.phoneNumber),o.append("profileImage",this.imgSrc),o.append("password",n.value.password),o.append("confirmPassword",n.value.confirmPassword),this.registerForm.valid&&this._AuthServicesService.register(o).subscribe({next:t=>{console.log(t),this._ToastrService.success(t.message),localStorage.setItem("email",this.registerForm.get("email")?.value)},error:t=>{console.log(t),this._ToastrService.error(t.error.message),localStorage.setItem("email",this.registerForm.get("email")?.value)},complete:()=>{this.openDialog()}})}onSelect(n){console.log(n),this.files.push(...n.addedFiles),this.imgSrc=this.files[0]}onRemove(n){console.log(n),this.files.splice(this.files.indexOf(n),1)}openDialog(){this.dialog.open(F,{data:{mail:this.mail,code:this.code}}).afterClosed().subscribe(o=>{console.log("The dialog was closed"),console.log(o),o&&(this.code=o.code,this.mail=o.mail,this.onActivate())})}onActivate(){this._AuthServicesService.verify(this.mail,this.code).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message)},error:n=>{this._ToastrService.error(n.error.message)},complete:()=>{this._Router.navigate([""])}})}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(g.C),e.Y36(_._W),e.Y36(c.F0),e.Y36(f.uw))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:70,vars:15,consts:[[1,"auth"],[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-10"],[1,"auth-card"],[1,"text-center","mx-auto","w-75"],["src","./assets/Images/4 4.svg","alt",""],[3,"formGroup","ngSubmit"],[1,"row","mt-4"],[1,"col-md-12","mb-4"],[1,"mx-auto","text-center"],[1,"drop-zone",3,"change"],[1,"fa-solid","fa-arrow-up-from-bracket"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"removable","file","removed",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"input-group","mb-3","form-control","p-0"],["id","basic-addon1",1,"input-group-text","span","py-3","me-2"],[1,"fa-solid","fa-user"],["type","text","formControlName","userName","placeholder","UserName","aria-label","Username","aria-describedby","basic-addon1",1,"py-2","w-75"],["class","warning text-danger text-center fw-bold",4,"ngIf"],[1,"fa-solid","fa-at"],["type","email","formControlName","email","placeholder","Enter Your E-mail","aria-label","Username","aria-describedby","basic-addon1",1,"py-2","w-75"],[1,"fa-solid","fa-globe"],["type","text","formControlName","country","placeholder","Country","aria-label","Username","aria-describedby","basic-addon1",1,"py-2","w-75"],[1,"fa-solid","fa-mobile-screen"],["type","tel","formControlName","phoneNumber","placeholder","PhoneNumber","aria-label","Username","aria-describedby","basic-addon1",1,"py-2","w-75"],[1,"input-group","mb-3","p-0","form-control","align-items-center"],[1,"fa-solid","fa-lock"],["formControlName","password","placeholder","Password","aria-label","Username","aria-describedby","basic-addon1",1,"flex-grow-1","py-2",3,"type"],[3,"click"],[1,"fa-solid"],[1,"input-group","mb-3","form-control","p-0","align-items-center"],["formControlName","confirmPassword","placeholder","Confirm Password","aria-label","Username","aria-describedby","basic-addon1",1,"flex-grow-1","py-2",3,"type"],[1,"links","text-center"],["routerLink","",1,"text-gray"],[1,"fw-bold"],[1,"text-main","link",3,"click"],[1,"text-center"],[1,"success","w-75","mt-4",3,"disabled"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"removable","file","removed"],[1,"warning","text-danger","text-center","fw-bold"],[4,"ngIf"]],template:function(o,t){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"h1"),e._uU(8,"Register Now"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(11,"form",7),e.NdJ("ngSubmit",function(){return t.sendRegisterForm(t.registerForm)}),e.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"ngx-dropzone",11),e.NdJ("change",function(l){return t.onSelect(l)}),e.TgZ(16,"ngx-dropzone-label"),e._UZ(17,"i",12),e._uU(18," Upload Your Image Here "),e.qZA(),e.YNc(19,N,1,2,"ngx-dropzone-image-preview",13),e.qZA()()(),e.TgZ(20,"div",14)(21,"div",15)(22,"span",16),e._UZ(23,"i",17),e.qZA(),e._UZ(24,"input",18),e.qZA(),e.YNc(25,P,3,2,"div",19),e.qZA(),e.TgZ(26,"div",14)(27,"div",15)(28,"span",16),e._UZ(29,"i",20),e.qZA(),e._UZ(30,"input",21),e.qZA(),e.YNc(31,k,3,2,"div",19),e.qZA(),e.TgZ(32,"div",14)(33,"div",15)(34,"span",16),e._UZ(35,"i",22),e.qZA(),e._UZ(36,"input",23),e.qZA(),e.YNc(37,S,2,1,"div",19),e.qZA(),e.TgZ(38,"div",14)(39,"div",15)(40,"span",16),e._UZ(41,"i",24),e.qZA(),e._UZ(42,"input",25),e.qZA(),e.YNc(43,M,3,2,"div",19),e.qZA(),e.TgZ(44,"div",14)(45,"div",26)(46,"span",16),e._UZ(47,"i",27),e.qZA(),e._UZ(48,"input",28),e.TgZ(49,"span",29),e.NdJ("click",function(){return t.hide1=!t.hide1}),e._UZ(50,"i",30),e.qZA()(),e.YNc(51,L,3,2,"div",19),e.qZA(),e.TgZ(52,"div",14)(53,"div",31)(54,"span",16),e._UZ(55,"i",27),e.qZA(),e._UZ(56,"input",32),e.TgZ(57,"span",29),e.NdJ("click",function(){return t.hide2=!t.hide2}),e._UZ(58,"i",30),e.qZA()(),e.YNc(59,G,3,2,"div",19),e.qZA()(),e.TgZ(60,"div",33)(61,"a",34),e._uU(62,"Already Have Account? "),e.TgZ(63,"span",35),e._uU(64," Login Now "),e.qZA()(),e.TgZ(65,"a",36),e.NdJ("click",function(){return t.openDialog()}),e._uU(66,"Have Code?"),e.qZA()(),e.TgZ(67,"div",37)(68,"button",38),e._uU(69,"Register"),e.qZA()()()()()()()()),2&o){let a,l,d,m,h,v;e.xp6(11),e.Q6J("formGroup",t.registerForm),e.xp6(8),e.Q6J("ngForOf",t.files),e.xp6(6),e.Q6J("ngIf",(null==(a=t.registerForm.get("userName"))?null:a.errors)&&(null==(a=t.registerForm.get("userName"))?null:a.touched)),e.xp6(6),e.Q6J("ngIf",(null==(l=t.registerForm.get("email"))?null:l.errors)&&(null==(l=t.registerForm.get("email"))?null:l.touched)),e.xp6(6),e.Q6J("ngIf",(null==(d=t.registerForm.get("country"))?null:d.errors)&&(null==(d=t.registerForm.get("country"))?null:d.touched)),e.xp6(6),e.Q6J("ngIf",(null==(m=t.registerForm.get("phoneNumber"))?null:m.errors)&&(null==(m=t.registerForm.get("phoneNumber"))?null:m.touched)),e.xp6(5),e.Q6J("type",t.hide1?"password":"text"),e.xp6(2),e.Tol(t.hide1?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(h=t.registerForm.get("password"))?null:h.errors)&&(null==(h=t.registerForm.get("password"))?null:h.touched)),e.xp6(5),e.Q6J("type",t.hide2?"password":"text"),e.xp6(2),e.Tol(t.hide2?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(v=t.registerForm.get("confirmPassword"))?null:v.errors)&&(null==(v=t.registerForm.get("confirmPassword"))?null:v.touched)),e.xp6(9),e.Q6J("disabled",t.registerForm.invalid)}},dependencies:[u.sg,u.O5,c.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,Z._f,Z.NP,Z.sv],styles:[".auth[_ngcontent-%COMP%]{background-image:url(Reg-bg.53923fb4462af141.png);background-position:center center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed;min-height:100vh}.link[_ngcontent-%COMP%]{cursor:pointer}.drop-zone[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:50%;margin:auto}@media (min-width: 768px) and (max-width: 1199.98px){.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:64%!important}}@media (max-width: 767.98px){.drop-zone[_ngcontent-%COMP%]{width:200px;height:120px;border-radius:0%}}@media (max-width: 575.98px){.auth-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120%}}"]})}return r})()},{path:"forgotPass",component:(()=>{class r{constructor(n,o,t){this._AuthServicesService=n,this._ToastrService=o,this._Router=t,this.forgotPassForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email])})}sendForgotForm(){this.forgotPassForm.valid&&this._AuthServicesService.forgotPass(this.forgotPassForm.value).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message)},error:o=>{console.log(o),this._ToastrService.error(o.error.message)},complete:()=>{this._Router.navigate(["auth/resetPass"])}})}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(g.C),e.Y36(_._W),e.Y36(c.F0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-forgotpass"]],decls:19,vars:3,consts:[[1,"auth"],[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-8"],[1,"auth-card"],[1,"text-center","mx-auto","mb-4"],["src","./assets/Images/4 4.svg","alt",""],[3,"formGroup","ngSubmit"],[1,"input-group","form-control","p-0","my-5"],["id","basic-addon1",1,"input-group-text","span","py-3","me-2"],[1,"fa-solid","fa-at"],["type","text","formControlName","email","placeholder","Enter Your E-mail","aria-label","Username","aria-describedby","basic-addon1",1,"py-2"],["class","warning text-danger text-center fw-bold",4,"ngIf"],[1,"success","w-100","mt-4",3,"disabled"],[1,"warning","text-danger","text-center","fw-bold"],[4,"ngIf"]],template:function(o,t){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"h1"),e._uU(8,"Forgot Your Password?"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"No worries! Please enter your email and we will send a password reset link "),e.qZA(),e.TgZ(11,"form",7),e.NdJ("ngSubmit",function(){return t.sendForgotForm()}),e.TgZ(12,"div",8)(13,"span",9),e._UZ(14,"i",10),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.YNc(16,H,3,2,"div",12),e.TgZ(17,"button",13),e._uU(18,"Submit"),e.qZA()()()()()()()),2&o){let a;e.xp6(11),e.Q6J("formGroup",t.forgotPassForm),e.xp6(5),e.Q6J("ngIf",(null==(a=t.forgotPassForm.get("email"))?null:a.errors)&&(null==(a=t.forgotPassForm.get("email"))?null:a.touched)),e.xp6(1),e.Q6J("disabled",t.forgotPassForm.invalid)}},dependencies:[u.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".auth[_ngcontent-%COMP%]{background-image:url(auth-bg.bd749d7a8b23d3dd.png);background-position:center center;background-repeat:no-repeat;background-size:cover;height:100vh}"]})}return r})()},{path:"resetPass",component:(()=>{class r{constructor(n,o,t){this._AuthServicesService=n,this._ToastrService=o,this._Router=t,this.hide1=!0,this.hide2=!0,this.resetForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),seed:new i.NI("",[i.kI.required]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]),confirmPassword:new i.NI("")},{validators:[this.confirmPass]})}confirmPass(n){const o=n.get("password"),t=n.get("confirmPassword");""==t?.value?t.setErrors({required:!0}):o?.value!==t?.value&&t?.setErrors({mismatch:!0})}sendResetForm(){this.resetForm.valid&&this._AuthServicesService.resetPass(this.resetForm.value).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message)},error:o=>{console.log(o),this._ToastrService.error(o.error.message)},complete:()=>{this._Router.navigate(["auth"])}})}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(g.C),e.Y36(_._W),e.Y36(c.F0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-resetpass"]],decls:38,vars:12,consts:[[1,"auth"],[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-8"],[1,"auth-card"],[1,"text-center","mx-auto","mb-4"],["src","./assets/Images/4 4.svg","alt",""],[3,"formGroup","ngSubmit"],[1,"input-group","form-control","p-0","mb-3"],["id","basic-addon1",1,"input-group-text","span","py-3","me-2"],[1,"fa-solid","fa-at"],["type","text","formControlName","email","placeholder","Enter Your E-mail","aria-label","Username","aria-describedby","basic-addon1",1,"py-2"],["class","warning text-danger text-center fw-bold",4,"ngIf"],[1,"input-group","form-control","p-0","mb-3","align-items-center"],[1,"fa-solid","fa-lock"],["formControlName","password","placeholder","New Password","aria-label","Username","aria-describedby","basic-addon1",1,"py-2","flex-grow-1",3,"type"],[3,"click"],[1,"fa-solid"],["id","basic-addon1",1,"input-group-text","py-3","span","me-2"],["formControlName","confirmPassword","placeholder","confirm New Password","aria-label","Username","aria-describedby","basic-addon1",1,"py-2","flex-grow-1",3,"type"],[1,"input-group","form-control","p-0"],["type","text","formControlName","seed","placeholder","Enter OTP Code","aria-label","Username","aria-describedby","basic-addon1",1,"py-2"],[1,"success","w-100","mt-4",3,"disabled"],[1,"warning","text-danger","text-center","fw-bold"],[4,"ngIf"]],template:function(o,t){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"h1"),e._uU(8," Reset Password"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Please Enter Your Otp or Check Your Inbox "),e.qZA(),e.TgZ(11,"form",7),e.NdJ("ngSubmit",function(){return t.sendResetForm()}),e.TgZ(12,"div",8)(13,"span",9),e._UZ(14,"i",10),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.YNc(16,ee,3,2,"div",12),e.TgZ(17,"div",13)(18,"span",9),e._UZ(19,"i",14),e.qZA(),e._UZ(20,"input",15),e.TgZ(21,"span",16),e.NdJ("click",function(){return t.hide1=!t.hide1}),e._UZ(22,"i",17),e.qZA()(),e.YNc(23,oe,3,2,"div",12),e.TgZ(24,"div",13)(25,"span",18),e._UZ(26,"i",14),e.qZA(),e._UZ(27,"input",19),e.TgZ(28,"span",16),e.NdJ("click",function(){return t.hide2=!t.hide2}),e._UZ(29,"i",17),e.qZA()(),e.YNc(30,se,3,2,"div",12),e.TgZ(31,"div",20)(32,"span",9),e._UZ(33,"i",10),e.qZA(),e._UZ(34,"input",21),e.qZA(),e.YNc(35,le,2,1,"div",12),e.TgZ(36,"button",22),e._uU(37,"Submit"),e.qZA()()()()()()()),2&o){let a,l,d,m;e.xp6(11),e.Q6J("formGroup",t.resetForm),e.xp6(5),e.Q6J("ngIf",(null==(a=t.resetForm.get("email"))?null:a.errors)&&(null==(a=t.resetForm.get("email"))?null:a.touched)),e.xp6(4),e.Q6J("type",t.hide1?"password":"text"),e.xp6(2),e.Tol(t.hide1?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(l=t.resetForm.get("password"))?null:l.errors)&&(null==(l=t.resetForm.get("password"))?null:l.touched)),e.xp6(4),e.Q6J("type",t.hide2?"password":"text"),e.xp6(2),e.Tol(t.hide2?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(d=t.resetForm.get("confirmPassword"))?null:d.errors)&&(null==(d=t.resetForm.get("confirmPassword"))?null:d.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.resetForm.get("seed"))?null:m.errors)&&(null==(m=t.resetForm.get("seed"))?null:m.touched)),e.xp6(1),e.Q6J("disabled",t.resetForm.invalid)}},dependencies:[u.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".auth[_ngcontent-%COMP%]{background-image:url(auth-bg.bd749d7a8b23d3dd.png);background-position:center center;background-repeat:no-repeat;background-size:cover;height:100vh}"]})}return r})()}];let de=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(pe),c.Bz]})}return r})();var me=p(9862),ce=p(6208);let ue=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[u.ez,de,i.UX,me.JF,ce.m]})}return r})()}}]);