(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{FuQ6:function(n,i,e){"use strict";e.r(i),e.d(i,"SignInPageModule",(function(){return P}));var t=e("ofXK"),o=e("TEn/"),r=e("3Pt+"),s=e("mrSG"),a=e("0+S0"),c=e("fXoL"),g=e("UbJi"),d=e("tyNb");function l(n,i){if(1&n&&(c.Rb(0,"div",15),c.Nb(1,"ion-icon",16),c.Rb(2,"span"),c.qc(3),c.Qb(),c.Qb()),2&n){const n=c.cc().$implicit;c.Ab(3),c.rc(n.message)}}function p(n,i){if(1&n&&(c.Pb(0),c.pc(1,l,4,1,"div",14),c.Ob()),2&n){const n=i.$implicit,e=c.cc();c.Ab(1),c.hc("ngIf",e.signInForm.get("email").hasError(n.type)&&(e.signInForm.get("email").dirty||e.signInForm.get("email").touched))}}function b(n,i){if(1&n&&(c.Rb(0,"div",15),c.Nb(1,"ion-icon",16),c.Rb(2,"span"),c.qc(3),c.Qb(),c.Qb()),2&n){const n=c.cc().$implicit;c.Ab(3),c.rc(n.message)}}function u(n,i){if(1&n&&(c.Pb(0),c.pc(1,b,4,1,"div",14),c.Ob()),2&n){const n=i.$implicit,e=c.cc();c.Ab(1),c.hc("ngIf",e.signInForm.get("password").hasError(n.type)&&(e.signInForm.get("password").dirty||e.signInForm.get("password").touched))}}function m(n,i){if(1&n&&(c.Rb(0,"div",7),c.Rb(1,"div",15),c.Nb(2,"ion-icon",16),c.Rb(3,"span"),c.qc(4),c.Qb(),c.Qb(),c.Qb()),2&n){const n=c.cc();c.Ab(4),c.rc(n.submitError)}}const h=function(){return["/sign-up"]},f=[{path:"",component:(()=>{class n{constructor(n,i,e,t,o){this.angularFire=n,this.router=i,this.ngZone=e,this.loadingController=t,this.authService=o,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 6 characters long."}]},this.signInForm=new r.c({email:new r.a("",r.j.compose([r.j.required,r.j.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new r.a("",r.j.compose([r.j.minLength(6),r.j.required]))}),this.authRedirectResult=this.authService.getRedirectResult().subscribe(n=>{n.user?this.redirectLoggedUserToProfilePage():n.error&&(this.submitError=n.error)})}redirectLoggedUserToProfilePage(){this.ngZone.run(()=>{this.router.navigate(["dashboard"])})}signInWithEmail(){return Object(s.a)(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({cssClass:"my-custom-class",message:"Please wait..."});n.present(),this.authService.signInWithEmail(this.signInForm.value.email,this.signInForm.value.password).then(i=>{n.dismiss(),this.redirectLoggedUserToProfilePage()}).catch(i=>{n.dismiss(),this.submitError=i.message})}))}facebookSignIn(){this.authService.signInWithFacebook().then(n=>{n.additionalUserInfo&&this.authService.setProviderAdditionalInfo(n.additionalUserInfo.profile),this.redirectLoggedUserToProfilePage()}).catch(n=>{console.log(n)})}googleSignIn(){this.authService.signInWithGoogle().then(n=>{n.additionalUserInfo&&this.authService.setProviderAdditionalInfo(n.additionalUserInfo.profile),this.redirectLoggedUserToProfilePage()}).catch(n=>{console.log(n)})}twitterSignIn(){this.authService.signInWithTwitter().then(n=>{n.additionalUserInfo&&this.authService.setProviderAdditionalInfo(n.additionalUserInfo.profile),this.redirectLoggedUserToProfilePage()}).catch(n=>{console.log(n)})}}return n.\u0275fac=function(i){return new(i||n)(c.Mb(g.a),c.Mb(d.g),c.Mb(c.z),c.Mb(o.B),c.Mb(a.a))},n.\u0275cmp=c.Gb({type:n,selectors:[["app-sign-in"]],decls:20,vars:7,consts:[[1,"sign-in-content"],["src","assets/icons/icon-152x152.png","width","50%"],[1,"auth-title"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],[1,"error-container"],[4,"ngFor","ngForOf"],["type","password","placeholder","Password","formControlName","password"],["type","submit","expand","block",1,"sign-in-btn",3,"disabled"],["class","error-container",4,"ngIf"],[1,"sign-up-btn-wrapper"],["fill","clear",1,"sign-up-btn",3,"routerLink"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,i){1&n&&(c.Rb(0,"ion-content",0),c.Nb(1,"img",1),c.Rb(2,"h2",2),c.qc(3," Sign In "),c.Qb(),c.Rb(4,"form",3),c.Zb("ngSubmit",(function(){return i.signInWithEmail()})),c.Rb(5,"ion-list",4),c.Rb(6,"ion-item",5),c.Nb(7,"ion-input",6),c.Qb(),c.Rb(8,"div",7),c.pc(9,p,2,1,"ng-container",8),c.Qb(),c.Rb(10,"ion-item",5),c.Nb(11,"ion-input",9),c.Qb(),c.Rb(12,"div",7),c.pc(13,u,2,1,"ng-container",8),c.Qb(),c.Qb(),c.Rb(14,"ion-button",10),c.qc(15,"Sign In"),c.Qb(),c.pc(16,m,5,1,"div",11),c.Rb(17,"ion-row",12),c.Rb(18,"ion-button",13),c.qc(19," Don't have an account? "),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&n&&(c.Ab(4),c.hc("formGroup",i.signInForm),c.Ab(5),c.hc("ngForOf",i.validation_messages.email),c.Ab(4),c.hc("ngForOf",i.validation_messages.password),c.Ab(1),c.hc("disabled",!i.signInForm.valid),c.Ab(2),c.hc("ngIf",i.submitError),c.Ab(2),c.hc("routerLink",c.ic(6,h)))},directives:[o.m,r.k,r.h,r.d,o.s,o.r,o.q,o.E,r.g,r.b,t.i,o.f,t.j,o.u,o.D,d.h,o.p],styles:[".sign-in-content[_ngcontent-%COMP%]{text-align:center;--padding-bottom:16px;--padding-end:16px;--padding-start:16px;--padding-top:16px}.sign-in-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:64px;letter-spacing:.6px}.sign-in-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{text-align:center}.sign-in-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:16px 0;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;-webkit-padding-end:8px;padding-inline-end:8px}.sign-in-content[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]{margin:16px 0}.sign-in-content[_ngcontent-%COMP%]   .sign-up-btn-wrapper[_ngcontent-%COMP%]{justify-content:flex-end;align-items:center}.sign-in-content[_ngcontent-%COMP%]   .sign-up-btn-wrapper[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]{--padding-end:0px}"]}),n})()}];let P=(()=>{class n{}return n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({factory:function(i){return new(i||n)},imports:[[t.b,r.e,r.i,o.z,d.i.forChild(f)]]}),n})()}}]);