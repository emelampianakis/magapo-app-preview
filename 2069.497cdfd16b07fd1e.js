"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2069],{2069:(E,g,s)=>{s.r(g),s.d(g,{HomePageModule:()=>M});var a=s(4488),d=s(177),_=s(4341),B=s(8986),c=s(467),l=s(8254),h=s(7392),e=s(4438),p=s(5114),v=s(8490),C=s(2542);function y(n,u){if(1&n){const i=e.RV6();e.j41(0,"div",15)(1,"h1"),e.EFF(2,"\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2"),e.k0s(),e.j41(3,"ion-list",16)(4,"ion-item",17),e.bIt("click",function(){e.eBV(i);const o=e.XpG();return e.sdS(9).dismiss(),e.Njj(o.startTour())}),e.nrm(5,"ion-icon",18),e.j41(6,"ion-label"),e.EFF(7,"Tutorial"),e.k0s()(),e.j41(8,"ion-item",17),e.bIt("click",function(){e.eBV(i);const o=e.XpG();return e.sdS(9).dismiss(),e.Njj(o.openPrivacyPolicy())}),e.nrm(9,"ion-icon",19),e.j41(10,"ion-label"),e.EFF(11,"Privacy Policy"),e.k0s()(),e.j41(12,"ion-item"),e.nrm(13,"ion-icon",20),e.j41(14,"ion-segment",21),e.bIt("ionChange",function(o){e.eBV(i);const r=e.XpG();return e.Njj(r.segmentChanged(o))}),e.j41(15,"ion-segment-button",22)(16,"ion-label"),e.EFF(17,"Light"),e.k0s()(),e.j41(18,"ion-segment-button",23)(19,"ion-label"),e.EFF(20,"Dark"),e.k0s()(),e.j41(21,"ion-segment-button",24)(22,"ion-label"),e.EFF(23,"System"),e.k0s()()()()()()}if(2&n){const i=e.XpG();e.R7$(14),e.Y8G("value",i.selectedTheme)}}function P(n,u){if(1&n){const i=e.RV6();e.j41(0,"div",29)(1,"pinch-zoom",30)(2,"img",31),e.bIt("click",function(){e.eBV(i);const o=e.XpG().$implicit,r=e.XpG(2);return e.Njj(r.seeMore(o.url))}),e.k0s()()()}if(2&n){const i=e.XpG().$implicit;e.R7$(),e.Y8G("double-tap",!1)("disableZoomControl","disable"),e.R7$(),e.Y8G("src",i.image,e.B4B)}}function F(n,u){if(1&n&&(e.j41(0,"swiper-slide")(1,"ion-card"),e.DNE(2,P,3,3,"div",28),e.k0s()()),2&n){const i=u.$implicit;e.R7$(2),e.Y8G("ngIf",i.image)}}function b(n,u){if(1&n&&(e.j41(0,"div",25)(1,"swiper-container",26),e.DNE(2,F,3,1,"swiper-slide",27),e.k0s()()),2&n){const i=e.XpG();e.R7$(2),e.Y8G("ngForOf",i.swiperData)}}function k(n,u){1&n&&(e.j41(0,"ion-button",32),e.nrm(1,"ion-icon",33),e.k0s())}function j(n,u){1&n&&(e.j41(0,"ion-button",32),e.nrm(1,"ion-icon",34),e.k0s())}function w(n,u){1&n&&(e.j41(0,"ion-button",32),e.EFF(1,"\u03a4\u03ad\u03bb\u03bf\u03c2"),e.k0s())}const f="app-tour-seen",m="app-theme",x=[{path:"",component:(()=>{var n;class u{constructor(t,o){this.joyrideService=t,this.dataService=o,this.swiperData=[]}ngOnInit(){var t=this;return(0,c.A)(function*(){(yield l.p.get({key:f})).value||setTimeout(()=>{t.startTour()},1e3);const r=yield l.p.get({key:m});t.selectedTheme=r.value?r.value:"system"})()}ionViewDidEnter(){this.fetchHomeBanners()}getLogoPath(){return"light"===this.selectedTheme||"system"===this.selectedTheme&&!1===window.matchMedia("(prefers-color-scheme: dark)").matches?"assets/logo_dark.png":"dark"===this.selectedTheme||"system"===this.selectedTheme&&!0===window.matchMedia("(prefers-color-scheme: dark)").matches?"assets/logo_light.png":"assets/logo_dark.png"}startTour(){this.joyrideService.startTour({steps:["step1","step2@tabs","step3@tabs","step4@tabs","step5@tabs","step6@tabs/home"],themeColor:"#e997c5"}),this.tourSeen()}tourSeen(){return(0,c.A)(function*(){yield l.p.set({key:f,value:"true"})})()}seeMore(t){return(0,c.A)(function*(){yield h.P.open({url:t})})()}initializeSwiperContainer(){setTimeout(()=>{const t=document.querySelector("swiper-container");t&&(Object.assign(t,{slidesPerView:1,autoplay:!0,effect:"slide",pagination:!0,loop:!0,on:{init(){console.log("swiper initialized")}}}),null==t||t.initialize())},0)}segmentChanged(t){var o=this;return(0,c.A)(function*(){if("dark"===t.detail.value)yield l.p.set({key:m,value:"dark"}),o.selectedTheme=t.detail.value,document.body.classList.toggle("dark",!0);else if("light"===t.detail.value)yield l.p.set({key:m,value:"light"}),o.selectedTheme=t.detail.value,document.body.classList.toggle("dark",!1);else if("system"===t.detail.value){yield l.p.set({key:m,value:"system"}),o.selectedTheme=t.detail.value;const r=window.matchMedia("(prefers-color-scheme: dark)");document.body.classList.toggle("dark",r.matches)}})()}fetchHomeBanners(){this.swiperData=[];try{this.dataService.getHomeBanners().subscribe(t=>{Object.values(t).forEach(o=>{this.swiperData.push(...o)}),this.swiperData&&this.swiperData.length&&(this.initializeSwiperContainer(),console.log("SWIPERDATA",this.swiperData.length))})}catch(t){console.error("Error fetching home banners:",t)}}openPrivacyPolicy(){return(0,c.A)(function*(){yield h.P.open({url:"https://mobile-app-magapo.gr/privacy-policy"})})()}}return(n=u).\u0275fac=function(t){return new(t||n)(e.rXU(p.E),e.rXU(v.u))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-home"]],decls:25,vars:7,consts:[["modal",""],["prevButton",""],["nextButton",""],["doneButton",""],[3,"translucent"],["slot","primary"],["id","open-info-dialog","color","primary","joyrideStep","step6","stepPosition","bottom","title","\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2","text","\u0395\u03b4\u03ce \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c2 \u03bd\u03b1 \u03b4\u03b5\u03af\u03c2 \u03be\u03b1\u03bd\u03ac \u03c4\u03b7\u03bd \u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03b2\u03c1\u03b5\u03af\u03c2 \u03b5\u03c0\u03b9\u03c0\u03bb\u03ad\u03bf\u03bd \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2."],["slot","icon-only","name","information-circle-outline"],[3,"fullscreen"],["id","info-modal","trigger","open-info-dialog"],[1,"home-container"],[1,"logo-container"],["alt","App logo","joyrideStep","step1","stepPosition","bottom","title","\u039a\u03b1\u03bb\u03bf\u03c3\u03cc\u03c1\u03b9\u03c3\u03b5\u03c2!","text","\u0394\u03ad\u03c2 \u03c3\u03b5 \u03bc\u03b9\u03b1 \u03c3\u03cd\u03bd\u03c4\u03bf\u03bc\u03b7 \u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03c4\u03af \u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03b9 \u03b7 \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03bc\u03b1\u03c2!",3,"src","prevTemplate","nextTemplate","doneTemplate"],["href","https://www.facebook.com/groups/ilioupolitisses/","target","_blank"],["class","slides-container",4,"ngIf"],[1,"wrapper"],["lines","none",1,"ion-padding-vertical"],["button","true","detail","false",3,"click"],["aria-hidden","true","name","film-outline","slot","start"],["aria-hidden","true","name","shield-checkmark-outline","slot","start"],["aria-hidden","true","name","color-palette-outline","slot","start"],["color","tertiary","mode","ios",3,"ionChange","value"],["value","light"],["value","dark"],["value","system"],[1,"slides-container"],["init","false"],[4,"ngFor","ngForOf"],["style","display: flex",4,"ngIf"],[2,"display","flex"],[3,"double-tap","disableZoomControl"],["alt","Store banner",3,"click","src"],["size","small","fill","clear"],["name","arrow-back-outline","slot","icon-only"],["name","arrow-forward-outline","slot","icon-only"]],template:function(t,o){if(1&t&&(e.j41(0,"ion-header",4)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," \u0391\u03c1\u03c7\u03b9\u03ba\u03ae "),e.k0s(),e.j41(4,"ion-buttons",5)(5,"ion-button",6),e.nrm(6,"ion-icon",7),e.k0s()()()(),e.j41(7,"ion-content",8)(8,"ion-modal",9,0),e.DNE(10,y,24,1,"ng-template"),e.k0s(),e.j41(11,"div",10)(12,"div",11),e.nrm(13,"img",12),e.j41(14,"p"),e.EFF(15," \u039c\u03c0\u03b5\u03c2 \u03c3\u03c4\u03b7\u03bd \u03bf\u03bc\u03ac\u03b4\u03b1 \u03bc\u03b1\u03c2 \u03c3\u03c4\u03bf "),e.j41(16,"a",13),e.EFF(17," Facebook "),e.k0s()()(),e.DNE(18,b,3,1,"div",14),e.k0s()(),e.DNE(19,k,2,0,"ng-template",null,1,e.C5r)(21,j,2,0,"ng-template",null,2,e.C5r)(23,w,2,0,"ng-template",null,3,e.C5r)),2&t){const r=e.sdS(20),A=e.sdS(22),D=e.sdS(24);e.Y8G("translucent",!0),e.R7$(7),e.Y8G("fullscreen",!0),e.R7$(6),e.Y8G("src",o.getLogoPath(),e.B4B)("prevTemplate",r)("nextTemplate",A)("doneTemplate",D),e.R7$(5),e.Y8G("ngIf",o.swiperData&&o.swiperData.length)}},dependencies:[a.Jm,a.QW,a.b_,a.W9,a.eU,a.iq,a.uz,a.he,a.nf,a.Gp,a.eP,a.BC,a.ai,a.Sb,a.Je,d.Sq,d.bT,p.qQ,C.Hg],styles:[".home-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;height:100%;overflow:auto}.logo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:24px;text-align:center;max-height:50%}.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}ion-modal#info-modal[_ngcontent-%COMP%]{--width: fit-content;--min-width: 250px;--height: fit-content;--border-radius: 6px;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4)}ion-modal#info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:20px 20px 10px}ion-modal#info-modal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:16px;width:24px;height:24px;color:var(--ion-color-primary)}ion-modal#info-modal[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:Mynerve-Regular}.slides-container[_ngcontent-%COMP%]{width:100%}swiper-container[_ngcontent-%COMP%]{width:100%;height:100%;--swiper-pagination-bullet-inactive-color: var(--ion-color-primary);--swiper-pagination-color: var(--ion-color-primary)}swiper-slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}ion-card[_ngcontent-%COMP%]{font-size:0;margin:2rem 16px}ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:20px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{font-size:18px}"]}),u})()}];let T=(()=>{var n;class u{}return(n=u).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[B.iI.forChild(x),B.iI]}),u})(),M=(()=>{var n;class u{}return(n=u).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[a.bv,d.MD,_.YN,T,p.p$.forChild(),C.Ud]}),u})()}}]);