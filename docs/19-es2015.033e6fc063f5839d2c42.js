(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{cRhG:function(e,t,n){"use strict";n.r(t),n.d(t,"ProfilePageModule",(function(){return g}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),c=n("0+S0"),s=n("fXoL"),b=n("tyNb");let a=(()=>{class e{constructor(e,t,n){this.router=e,this.route=t,this.authService=n}ngOnInit(){this.route.data.subscribe(e=>{this.user=e.data})}signOut(){this.authService.signOut().subscribe(()=>{this.router.navigate(["sign-in"])},e=>{console.log("signout error",e)})}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(b.g),s.Mb(b.a),s.Mb(c.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-profile"]],decls:32,vars:6,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","sign-in"],[1,"profile-content"],[1,"user-details-wrapper"],["size","6",1,"user-image-wrapper"],[1,"user-image",3,"src"],["size","12",1,"user-info-wrapper"],["size","12"],["expand","block","fill","outline","color","primary",3,"click"]],template:function(e,t){1&e&&(s.Rb(0,"ion-header",0),s.Rb(1,"ion-toolbar"),s.Rb(2,"ion-buttons",1),s.Nb(3,"ion-back-button",2),s.Qb(),s.Qb(),s.Qb(),s.Rb(4,"ion-content",3),s.Rb(5,"ion-row",4),s.Rb(6,"ion-col",5),s.Nb(7,"img",6),s.Qb(),s.Rb(8,"ion-col",7),s.Rb(9,"h3"),s.qc(10),s.Qb(),s.Rb(11,"p"),s.qc(12),s.Qb(),s.Qb(),s.Qb(),s.Rb(13,"ion-row"),s.Rb(14,"ion-col",8),s.Rb(15,"h4"),s.qc(16,"Mobile"),s.Qb(),s.Rb(17,"p"),s.qc(18),s.Qb(),s.Qb(),s.Rb(19,"ion-col",8),s.Rb(20,"h4"),s.qc(21,"Email"),s.Qb(),s.Rb(22,"p"),s.qc(23),s.Qb(),s.Qb(),s.Rb(24,"ion-col",8),s.Rb(25,"h4"),s.qc(26,"Auth Provider"),s.Qb(),s.Rb(27,"p"),s.qc(28),s.Qb(),s.Qb(),s.Rb(29,"ion-col",8),s.Rb(30,"ion-button",9),s.Zb("click",(function(){return t.signOut()})),s.qc(31,"Sign out"),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.Ab(7),s.hc("src",t.user.image,s.mc),s.Ab(3),s.rc(t.user.name),s.Ab(2),s.rc(t.user.description),s.Ab(6),s.sc(" ",t.user.phoneNumber," "),s.Ab(5),s.sc(" ",t.user.email," "),s.Ab(5),s.sc(" ",t.user.provider," "))},directives:[i.o,i.y,i.g,i.c,i.d,i.m,i.u,i.l,i.f],styles:[".profile-content[_ngcontent-%COMP%]{--padding-bottom:16px;--padding-end:16px;--padding-start:16px;--padding-top:16px}.profile-content[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:4%}.profile-content[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%]{justify-content:center}.profile-content[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .profile-content[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]{text-align:center}"]}),e})(),u=(()=>{class e{constructor(e){this.firebaseAuthService=e}resolve(){return this.firebaseAuthService.getProfileData()}}return e.\u0275fac=function(t){return new(t||e)(s.Vb(c.a))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac}),e})(),p=(()=>{class e{constructor(e,t){this.firebaseAuthService=e,this.router=t}canActivate(){return null!=this.firebaseAuthService.getLoggedInUser()||(this.router.navigate(["sign-in"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(s.Vb(c.a),s.Vb(b.g))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac}),e})();const l=[{path:"",component:a,resolve:{data:u},canActivate:[p]}];let g=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},providers:[u,p],imports:[[r.b,o.e,i.z,b.i.forChild(l)]]}),e})()}}]);