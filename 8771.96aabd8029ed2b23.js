"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8771],{8771:(q,_,c)=>{c.r(_),c.d(_,{MallPageModule:()=>H});var s=c(4488),r=c(177),m=c(4341),g=c(8986),u=c(467),h=c(7392),f=c(5083),C=c(8254),t=c(4438),B=c(8490),d=c(2542);const b=e=>({"opacity-one":e}),p=e=>({selected:e}),M=()=>[1,2,3];function P(e,l){1&e&&(t.j41(0,"ion-buttons",9)(1,"ion-button",10),t.nrm(2,"ion-icon",11),t.k0s()())}function v(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-chip",14),t.bIt("click",function(){const o=t.eBV(i).$implicit,a=t.XpG(2);return t.Njj(a.selectCategory(o))}),t.EFF(1),t.k0s()}if(2&e){const i=l.$implicit,n=t.XpG(2);t.Y8G("ngClass",t.eq3(2,p,(null==i?null:i.id)===n.selectedCategoryId)),t.R7$(),t.JRh(null==i?null:i.name)}}function x(e,l){if(1&e&&(t.j41(0,"div",12),t.DNE(1,v,2,4,"ion-chip",13),t.k0s()),2&e){const i=t.XpG();t.R7$(),t.Y8G("ngForOf",i.categories)}}function y(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-chip",14),t.bIt("click",function(){const o=t.eBV(i).$implicit,a=t.XpG(2);return t.Njj(a.selectSubcategory(o))}),t.EFF(1),t.k0s()}if(2&e){const i=l.$implicit,n=t.XpG(2);t.Y8G("ngClass",t.eq3(2,p,i.id===n.selectedSubcategoryId)),t.R7$(),t.JRh(i.name)}}function I(e,l){if(1&e&&(t.j41(0,"div",15),t.DNE(1,y,2,4,"ion-chip",13),t.k0s()),2&e){const i=t.XpG();t.R7$(),t.Y8G("ngForOf",i.subcategories)}}function R(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-item")(1,"ion-label",27),t.bIt("click",function(){const o=t.eBV(i).$implicit;t.XpG(3);const a=t.sdS(2);return t.XpG().onClickSearchResult(o),t.Njj(a.dismiss())}),t.EFF(2),t.k0s()()}if(2&e){const i=l.$implicit;t.R7$(2),t.JRh(i.name)}}function G(e,l){if(1&e&&(t.j41(0,"ion-list",26),t.DNE(1,R,3,1,"ion-item",18),t.k0s()),2&e){const i=t.XpG(3);t.R7$(),t.Y8G("ngForOf",i.searchResults)}}function j(e,l){1&e&&(t.j41(0,"div",28)(1,"span",29),t.EFF(2,"\u0394\u03ad\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1"),t.k0s(),t.j41(3,"span"),t.EFF(4,"\u0394\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03c4\u03b5 \u03b5\u03bd\u03b1\u03bd \u03ac\u03bb\u03bb\u03bf \u03cc\u03c1\u03bf \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7\u03c2"),t.k0s()())}function D(e,l){if(1&e){const i=t.RV6();t.j41(0,"div",22)(1,"ion-searchbar",23),t.bIt("ionInput",function(o){t.eBV(i);const a=t.XpG(2);return t.Njj(a.handleSearchInput(o))}),t.k0s(),t.DNE(2,G,2,1,"ion-list",24)(3,j,5,0,"div",25),t.k0s()}if(2&e){const i=t.XpG(2);t.R7$(),t.Y8G("debounce",300),t.R7$(),t.Y8G("ngIf",i.searchResults&&i.searchResults.length),t.R7$(),t.Y8G("ngIf",i.searchResults&&!i.searchResults.length)}}function k(e,l){if(1&e){const i=t.RV6();t.j41(0,"div",34)(1,"pinch-zoom",35)(2,"img",36),t.bIt("click",function(){t.eBV(i);const o=t.XpG().$implicit,a=t.XpG(2);return t.Njj(a.seeMore(o.url))}),t.k0s()()()}if(2&e){const i=t.XpG().$implicit,n=t.XpG(2);t.R7$(),t.Y8G("double-tap",!1)("disableZoomControl","disable")("disabled",n.pinchZoomDisabled),t.R7$(),t.Y8G("src",i.image,t.B4B)}}function F(e,l){if(1&e&&(t.j41(0,"ion-note"),t.EFF(1),t.k0s()),2&e){const i=l.$implicit;t.R7$(),t.JRh(i.name)}}function T(e,l){if(1&e&&(t.j41(0,"div",37),t.DNE(1,F,2,1,"ion-note",18),t.k0s()),2&e){const i=t.XpG().$implicit;t.R7$(),t.Y8G("ngForOf",i.tags)}}function $(e,l){if(1&e&&(t.j41(0,"ion-card-header")(1,"ion-card-title"),t.EFF(2),t.k0s()()),2&e){const i=t.XpG().$implicit;t.R7$(2),t.JRh(i.title)}}function O(e,l){if(1&e&&(t.j41(0,"ion-card-content"),t.EFF(1),t.k0s()),2&e){const i=t.XpG().$implicit;t.R7$(),t.SpI(" ",i.description," ")}}function S(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-button",38),t.bIt("click",function(){t.eBV(i);const o=t.XpG().$implicit,a=t.XpG(2);return t.Njj(a.seeMore(o.url))}),t.EFF(1,"\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1"),t.k0s()}}function E(e,l){if(1&e&&(t.j41(0,"ion-card"),t.DNE(1,k,3,4,"div",30)(2,T,2,1,"div",31)(3,$,3,1,"ion-card-header",32)(4,O,2,1,"ion-card-content",32)(5,S,2,0,"ion-button",33),t.k0s()),2&e){const i=l.$implicit;t.R7$(),t.Y8G("ngIf",i.image&&!i.image.includes("default")),t.R7$(),t.Y8G("ngIf",!i.image),t.R7$(),t.Y8G("ngIf",i.title),t.R7$(),t.Y8G("ngIf",i.description),t.R7$(),t.Y8G("ngIf",i.url&&(i.title||i.description))}}function Y(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-fab",39)(1,"ion-fab-button",40),t.bIt("click",function(){t.eBV(i);const o=t.XpG(2);return t.Njj(o.scrollToTop())}),t.nrm(2,"ion-icon",41),t.k0s()()}}function X(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-content",16),t.bIt("ionScroll",function(o){t.eBV(i);const a=t.XpG();return t.Njj(a.onScroll(o))}),t.j41(1,"ion-modal",17,0),t.bIt("willPresent",function(){t.eBV(i);const o=t.XpG();return t.Njj(o.onWillPresent())})("willDismiss",function(o){t.eBV(i);const a=t.XpG();return t.Njj(a.onWillDismiss(o))}),t.DNE(3,D,4,3,"ng-template"),t.k0s(),t.DNE(4,E,6,5,"ion-card",18)(5,Y,3,0,"ion-fab",19),t.j41(6,"ion-infinite-scroll",20),t.bIt("ionInfinite",function(o){t.eBV(i);const a=t.XpG();return t.Njj(a.loadData(o))}),t.nrm(7,"ion-infinite-scroll-content",21),t.k0s()()}if(2&e){const i=t.XpG();t.Y8G("fullscreen",!0)("scrollEvents",!0),t.R7$(4),t.Y8G("ngForOf",i.mallData),t.R7$(),t.Y8G("ngIf",i.showScrollButton)}}function N(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-item")(1,"ion-label",27),t.bIt("click",function(){const o=t.eBV(i).$implicit;t.XpG(3);const a=t.sdS(2);return t.XpG().onClickSearchResult(o),t.Njj(a.dismiss())}),t.EFF(2),t.k0s()()}if(2&e){const i=l.$implicit;t.R7$(2),t.JRh(i.name)}}function w(e,l){if(1&e&&(t.j41(0,"ion-list",26),t.DNE(1,N,3,1,"ion-item",18),t.k0s()),2&e){const i=t.XpG(3);t.R7$(),t.Y8G("ngForOf",i.searchResults)}}function A(e,l){1&e&&(t.j41(0,"div",28)(1,"span",29),t.EFF(2,"\u0394\u03ad\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1"),t.k0s(),t.j41(3,"span"),t.EFF(4,"\u0394\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03c4\u03b5 \u03b5\u03bd\u03b1\u03bd \u03ac\u03bb\u03bb\u03bf \u03cc\u03c1\u03bf \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7\u03c2"),t.k0s()())}function V(e,l){if(1&e){const i=t.RV6();t.j41(0,"div",22)(1,"ion-searchbar",23),t.bIt("ionInput",function(o){t.eBV(i);const a=t.XpG(2);return t.Njj(a.handleSearchInput(o))}),t.k0s(),t.DNE(2,w,2,1,"ion-list",24)(3,A,5,0,"div",25),t.k0s()}if(2&e){const i=t.XpG(2);t.R7$(),t.Y8G("debounce",300),t.R7$(),t.Y8G("ngIf",i.searchResults&&i.searchResults.length),t.R7$(),t.Y8G("ngIf",i.searchResults&&!i.searchResults.length)}}function z(e,l){1&e&&(t.j41(0,"div",44)(1,"div",45)(2,"div",46),t.nrm(3,"img",47),t.k0s(),t.j41(4,"span",48),t.EFF(5,"\u0394\u03ad\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1"),t.k0s(),t.j41(6,"span"),t.EFF(7,"\u0395\u03b4\u03ce \u03b8\u03b1 \u03b2\u03c1\u03b5\u03af\u03c4\u03b5 \u03c4\u03b1 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b1 \u03ba\u03b1\u03c4\u03b1\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1"),t.k0s()()())}function W(e,l){1&e&&(t.j41(0,"ion-card",50),t.nrm(1,"ion-skeleton-text",51),t.k0s()),2&e&&(t.R7$(),t.Y8G("animated",!0))}function J(e,l){1&e&&(t.j41(0,"div"),t.DNE(1,W,2,1,"ion-card",49),t.k0s()),2&e&&(t.R7$(),t.Y8G("ngForOf",t.lJ4(1,M)))}function L(e,l){if(1&e){const i=t.RV6();t.j41(0,"ion-content",42)(1,"ion-modal",17,0),t.bIt("willPresent",function(){t.eBV(i);const o=t.XpG();return t.Njj(o.onWillPresent())})("willDismiss",function(o){t.eBV(i);const a=t.XpG();return t.Njj(a.onWillDismiss(o))}),t.DNE(3,V,4,3,"ng-template"),t.k0s(),t.DNE(4,z,8,0,"div",43)(5,J,2,2,"div",32),t.k0s()}if(2&e){const i=t.XpG();t.Y8G("fullscreen",!0),t.R7$(4),t.Y8G("ngIf",!i.loading),t.R7$(),t.Y8G("ngIf",i.loading)}}const U=[{path:"",component:(()=>{var e;class l{constructor(n){this.dataService=n,this.categories=[],this.subcategories=[],this.showScrollButton=!1,this.loading=!0,this.page=1,this.searchObject=[],this.searchResults=[],this.pinchZoomDisabled=!f.Ii.isNativePlatform(),this.cssClass=""}ngOnInit(){var n=this;return(0,u.A)(function*(){n.mallData=[],n.page=1,n.selectedCategoryId=null,n.selectedSubcategoryId=null,n.cssClass=yield n.getClassByTheme()})()}ionViewDidEnter(){var n=this;return(0,u.A)(function*(){n.cssClass=yield n.getClassByTheme(),n.loading=!0,n.showScrollButton=!1,n.mallData=[],n.searchObject=[],n.searchResults=[],n.page=1,n.selectedCategoryId=null,n.selectedSubcategoryId=null,n.subcategories=[],n.fetchCategories(),n.fetchMallData()})()}loadData(n){this.lastPage&&this.page<this.lastPage&&(this.page+=1,this.dataService.getStores(this.page,this.selectedCategoryId,this.selectedSubcategoryId).subscribe(o=>{this.mallData.push(...o.data)})),setTimeout(()=>{n.target.complete()},500)}fetchMallData(){try{this.dataService.getStores(this.page,this.selectedCategoryId,this.selectedSubcategoryId).subscribe(n=>{this.mallData=n.data,this.loading=!1,this.lastPage=n.meta.last_page})}catch(n){console.error("An error occurred while fetching data:",n),this.loading=!1}}fetchCategories(){this.dataService.getCategories().subscribe(n=>{this.categories=n,n.forEach(o=>{this.searchObject.push({category:o,name:o.name,type:"category"})}),n.forEach(o=>{o.tags.forEach(a=>{a.category_id=o.id,this.searchObject.push({tag:a,name:a.name,type:"tag"})})}),this.searchResults=this.searchObject})}selectCategory(n){this.page=1,this.scrollToTop(),this.selectedSubcategoryId=null,this.selectedCategoryId===n.id?(this.selectedCategoryId=null,this.subcategories=[],this.fetchMallData()):(this.selectedCategoryId=n.id,this.subcategories=n.tags,this.fetchMallData())}selectSubcategory(n){if(this.page=1,this.scrollToTop(),this.selectedCategoryId=n.category_id,this.selectedSubcategoryId===n.id)this.selectedSubcategoryId=null,this.fetchMallData();else{this.selectedSubcategoryId=n.id,this.fetchMallData();const o=this.categories.find(a=>a.id===this.selectedCategoryId);this.subcategories=o?o.tags:[]}}scrollToTop(){this.content.scrollToPoint(0,0,400)}seeMore(n){return(0,u.A)(function*(){n&&(n.startsWith("tel:")||n.startsWith("mailto:")?window.open(n,"_blank"):yield h.P.open({url:n}))})()}onScroll(n){this.showScrollButton=n.detail.scrollTop>20}handleSearchInput(n){const o=this.removePunctuatedLetters(n.target.value.toLowerCase());this.searchResults=this.searchObject.filter(a=>this.removePunctuatedLetters(a.name.toLowerCase()).indexOf(o)>-1)}onWillPresent(){this.searchResults=this.searchObject}onWillDismiss(n){this.searchResults=this.searchObject}removePunctuatedLetters(n){const o={\u03ac:"\u03b1",\u03ad:"\u03b5",\u03af:"\u03b9",\u03cc:"\u03bf",\u03cd:"\u03c5",\u03ae:"\u03b7",\u03ce:"\u03c9",\u0386:"\u0391",\u0388:"\u0395",\u038a:"\u0399",\u038c:"\u039f",\u038e:"\u03a5",\u0389:"\u0397",\u038f:"\u03a9"};return n.replace(/[\u03ac\u03ad\u03af\u03cc\u03cd\u03ae\u03ce]/gi,a=>o[a])}onClickSearchResult(n){this.searchResults=this.searchObject,"category"===n.type?(this.selectedCategoryId=null,this.selectCategory(n.category)):"tag"===n.type&&(this.selectedSubcategoryId=null,this.selectSubcategory(n.tag))}getClassByTheme(){return(0,u.A)(function*(){const n=yield C.p.get({key:"app-theme"}),o=n.value?n.value:"system";return"light"===o||"system"===o&&!1===window.matchMedia("(prefers-color-scheme: dark)").matches?"light":("dark"===o||"system"===o&&window.matchMedia("(prefers-color-scheme: dark)"),"dark")})()}}return(e=l).\u0275fac=function(n){return new(n||e)(t.rXU(B.u))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-mall"]],viewQuery:function(n,o){if(1&n&&t.GBs(s.W9,5),2&n){let a;t.mGM(a=t.lsd())&&(o.content=a.first)}},decls:10,vars:10,consts:[["modal",""],[3,"translucent"],[3,"ngClass"],["slot","primary",4,"ngIf"],[1,"selection-div",3,"ngClass"],["class","scrollable-x categories",4,"ngIf"],["class","scrollable-x subcategories",4,"ngIf"],[3,"fullscreen","scrollEvents","ionScroll",4,"ngIf"],[3,"fullscreen",4,"ngIf"],["slot","primary"],["id","open-search-dialog","color","primary"],["slot","icon-only","name","search-outline"],[1,"scrollable-x","categories"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"click","ngClass"],[1,"scrollable-x","subcategories"],[3,"ionScroll","fullscreen","scrollEvents"],["id","search-modal","trigger","open-search-dialog",3,"willPresent","willDismiss"],[4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","start",4,"ngIf"],[3,"ionInfinite"],["loadingSpinner","lines-sharp"],[1,"wrapper"],["animated","true","placeholder","\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b5 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b5\u03c2",3,"ionInput","debounce"],["style","max-height: 50vh; overflow: auto",4,"ngIf"],["style","\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            padding: 16px;\n          ",4,"ngIf"],[2,"max-height","50vh","overflow","auto"],[3,"click"],[2,"display","flex","flex-direction","column","align-items","center","padding","16px"],[2,"font-size","16px","font-weight","700","padding-bottom","16px"],["style","display: flex",4,"ngIf"],["class","tag-container",4,"ngIf"],[4,"ngIf"],["style","float: inline-end; margin: 0 16px 16px 0","fill","solid","size","small","mode","md",3,"click",4,"ngIf"],[2,"display","flex"],[3,"double-tap","disableZoomControl","disabled"],["alt","Store banner",3,"click","src"],[1,"tag-container"],["fill","solid","size","small","mode","md",2,"float","inline-end","margin","0 16px 16px 0",3,"click"],["slot","fixed","vertical","bottom","horizontal","start"],["size","small","color","tertiary",3,"click"],["name","chevron-up-outline"],[3,"fullscreen"],["style","position: relative","class","empty-page-placeholder",4,"ngIf"],[1,"empty-page-placeholder",2,"position","relative"],[1,"empty-page-info-container",2,"display","flex","flex-direction","column"],[1,"image-container"],["src","assets/noResults.svg","alt","Your SVG Image"],[2,"font-size","20px","font-weight","700","padding-bottom","16px"],["style","height: 200px",4,"ngFor","ngForOf"],[2,"height","200px"],[2,"width","100%","height","100%",3,"animated"]],template:function(n,o){1&n&&(t.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title",2),t.EFF(3," \u0391\u03b3\u03bf\u03c1\u03ac "),t.k0s(),t.DNE(4,P,3,0,"ion-buttons",3),t.k0s()(),t.j41(5,"div",4),t.DNE(6,x,2,1,"div",5)(7,I,2,1,"div",6),t.k0s(),t.DNE(8,X,8,4,"ion-content",7)(9,L,6,3,"ion-content",8)),2&n&&(t.Y8G("translucent",!1),t.R7$(2),t.Y8G("ngClass",t.eq3(8,b,!o.mallData.length)),t.R7$(2),t.Y8G("ngIf",o.categories&&o.categories.length),t.R7$(),t.Y8G("ngClass",o.cssClass),t.R7$(),t.Y8G("ngIf",o.categories&&o.categories.length),t.R7$(),t.Y8G("ngIf",o.subcategories&&o.subcategories.length>=2),t.R7$(),t.Y8G("ngIf",o.mallData&&o.mallData.length),t.R7$(),t.Y8G("ngIf",o.mallData&&!o.mallData.length))},dependencies:[s.Jm,s.QW,s.b_,s.I9,s.ME,s.tN,s.ZB,s.W9,s.Q8,s.YW,s.eU,s.iq,s.Ax,s.Hp,s.uz,s.he,s.nf,s.JI,s.S1,s.ds,s.BC,s.ai,s.Sb,s.Gw,r.YU,r.Sq,r.bT,d.Hg],styles:["ion-card[_ngcontent-%COMP%]{font-size:0;margin:16px}ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:20px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{font-size:18px}.scrollable-x[_ngcontent-%COMP%]{overflow-x:auto;white-space:nowrap}.categories[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:4px;padding-left:16px}.subcategories[_ngcontent-%COMP%]{padding-bottom:4px;padding-left:8px}ion-chip[_ngcontent-%COMP%]{background-color:#e68bbe99}.selected[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.tag-container[_ngcontent-%COMP%]{position:relative;top:8px;left:8px}.tag-container[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin:8px;color:var(--ion-color-primary)}.selection-div[_ngcontent-%COMP%]{position:sticky;top:0;z-index:99}.empty-page-placeholder[_ngcontent-%COMP%]{padding:0}.empty-page-selection[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;text-align:start}.empty-page-info-container[_ngcontent-%COMP%]{padding:24px}ion-modal#search-modal[_ngcontent-%COMP%]{--width: fit-content;--min-width: 80%;--height: fit-content;--border-radius: 6px;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4)}ion-modal#search-modal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:16px;width:24px;height:24px;color:var(--ion-color-primary)}ion-modal#search-modal[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:Mynerve-Regular}.dark[_ngcontent-%COMP%]{background:#000}.light[_ngcontent-%COMP%]{background:#fff}"]}),l})()}];let Z=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[g.iI.forChild(U),g.iI]}),l})();var Q=c(5114);let H=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[s.bv,r.MD,m.YN,Z,Q.p$.forRoot(),d.Ud]}),l})()}}]);