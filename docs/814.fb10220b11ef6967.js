"use strict";(self.webpackChunkapplaudo_week_9=self.webpackChunkapplaudo_week_9||[]).push([[814],{7814:(M,u,r)=>{r.r(u),r.d(u,{AuthModule:()=>b});var c=r(6895),i=r(4006),t=r(4650),p=r(7341),f=r(8348),s=r(8252),m=r(9549),d=r(4144),g=r(4859),h=r(7392);function y(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," This field is required. "),t.qZA())}function C(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," This field is required. "),t.qZA())}const v=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:3,vars:0,consts:[[1,"container"],[1,"form-container"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[s.lC],styles:["@keyframes fadeInUp{0%{opacity:0;transform:translateY(100px)}to{opacity:100%}}@keyframes fadeInLeft{0%{opacity:0;transform:translate(-100px)}to{opacity:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:100%}}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center}.container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{margin-block:auto;width:30%;animation-name:fadeInUp;animation-duration:.5s}@media (max-width: 1300px){.container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{width:50%}}@media (max-width: 992px){.container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{width:70%}}@media (max-width: 592px){.container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{width:80%}}"]}),n})(),children:[{path:"login",component:(()=>{class n{constructor(e,o,l,T){this.fb=e,this.authService=o,this.alertService=l,this.route=T,this.hide=!0,this.form=this.fb.group({email:["",[i.kI.required,i.kI.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)]],password:["",i.kI.required]})}submit(){this.authService.login({data:this.form.value}).subscribe({next:()=>{this.alertService.notify("success","Logged in successfully!").subscribe(()=>{this.route.navigateByUrl("/products/home")})},error:o=>{o.expected?this.alertService.notify("warning",o.message).subscribe():this.alertService.notify("error",o.message).subscribe()}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.QS),t.Y36(p.e),t.Y36(f.c),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:21,vars:6,consts:[["action","/off","autocomplete","off",3,"formGroup","ngSubmit"],[1,"controls-container"],["appearance","outline",1,"example-full-width"],["formControlName","email","matInput","","type","email","maxlength","50"],[4,"ngIf"],["formControlName","password","matInput","","maxlength","16",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["mat-flat-button","","color","primary",3,"disabled"],["routerLink","/products/home"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1)(2,"h1"),t._uU(3,"Welcome back!"),t.qZA(),t.TgZ(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,y,2,0,"mat-error",4),t.qZA(),t.TgZ(9,"mat-form-field",2)(10,"mat-label"),t._uU(11,"Password"),t.qZA(),t._UZ(12,"input",5),t.TgZ(13,"button",6),t.NdJ("click",function(){return o.hide=!o.hide}),t.TgZ(14,"mat-icon"),t._uU(15),t.qZA()(),t.YNc(16,C,2,0,"mat-error",4),t.qZA(),t.TgZ(17,"button",7),t._uU(18,"Continue"),t.qZA(),t.TgZ(19,"a",8),t._uU(20,"Go to home page"),t.qZA()()()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(8),t.Q6J("ngIf",null==o.form.get("email").errors?null:o.form.get("email").errors.required),t.xp6(4),t.Q6J("type",o.hide?"password":"text"),t.xp6(3),t.Oqu(o.hide?"visibility":"visibility_off"),t.xp6(1),t.Q6J("ngIf",null==o.form.get("password").errors?null:o.form.get("password").errors.required),t.xp6(1),t.Q6J("disabled",o.form.invalid))},dependencies:[c.O5,s.yS,m.TO,m.KE,m.hX,m.R9,d.Nt,g.lW,h.Hw,i._Y,i.Fj,i.JJ,i.JL,i.nD,i.sg,i.u],styles:[".controls-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}h1[_ngcontent-%COMP%]{margin-bottom:10px}a[_ngcontent-%COMP%]{margin-top:10px;text-decoration:none;color:#000;transition:all .2s ease-in-out}a[_ngcontent-%COMP%]:hover{color:#3f51b5}"]}),n})()},{path:"**",redirectTo:"login"}]}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(v),s.Bz]}),n})();var Z=r(4466);let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,A,Z.m,i.UX]}),n})()}}]);