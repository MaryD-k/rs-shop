(self.webpackChunkrs_shop=self.webpackChunkrs_shop||[]).push([[26],{8026:(t,e,o)=>{"use strict";o.r(e),o.d(e,{CategoryPageModule:()=>I});var i=o(8583),n=o(6951),s=o(3018),r=o(41),a=o(6215);let c=(()=>{class t{constructor(){this.currentSortSubject=new a.X({sortType:"",isReverse:!1}),this.currentSort$=this.currentSortSubject.asObservable()}setSort(t){this.currentSortSubject.next(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const g=function(t){return{sorting__item_selected:t}};let p=(()=>{class t{constructor(t){this.goodsSettingsService=t}ngOnInit(){this.isReverseSort=!1}toogleSort(t){this.sortType===t&&(this.isReverseSort=!this.isReverseSort),this.sortType=t,this.goodsSettingsService.setSort({sortType:this.sortType,isReverse:this.isReverseSort})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(c))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-sorting-block"]],decls:9,vars:6,consts:[[1,"sorting-block"],[1,"sorting-list"],[1,"sorting__item_title"],[1,"sorting__item",3,"ngClass","click"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"ul",1),s.TgZ(2,"li",2),s.TgZ(3,"b"),s._uU(4,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"),s.qZA(),s.qZA(),s.TgZ(5,"li",3),s.NdJ("click",function(){return e.toogleSort("rating")}),s._uU(6,"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"),s.qZA(),s.TgZ(7,"li",3),s.NdJ("click",function(){return e.toogleSort("price")}),s._uU(8,"\u0446\u0435\u043d\u0435"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(5),s.Q6J("ngClass",s.VKq(2,g,"popularity"===e.sortType)),s.xp6(2),s.Q6J("ngClass",s.VKq(4,g,"price"===e.sortType)))},directives:[i.mk],styles:[".sorting-block[_ngcontent-%COMP%]{padding-top:18px;line-height:28px}.sorting-list[_ngcontent-%COMP%]{list-style:none}.sorting__item[_ngcontent-%COMP%]{display:block;padding:0 15px;color:#0072bc;border-bottom:1px dotted #0072bc80;cursor:pointer}.sorting__item[_ngcontent-%COMP%], .sorting__item_title[_ngcontent-%COMP%]{float:left;height:28px;margin-right:-1px}.sorting__item_title[_ngcontent-%COMP%]{padding:0}.sorting__item_selected[_ngcontent-%COMP%]{color:#4d4d4d;border:none}"]}),t})();var d=o(4652),l=o(345),u=o(498),h=o(9541);let f=(()=>{class t{constructor(t){this.el=t}ngOnInit(){this.el.nativeElement.style.width=20*this.rating+"%"}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq))},t.\u0275dir=s.lG2({type:t,selectors:[["","appProductRating",""]],inputs:{rating:"rating"}}),t})(),_=(()=>{class t{constructor(t){this.el=t}ngOnInit(){let t;t=this.amount>=20?"green":this.amount>5&&this.amount<=19?"#ffd700":"red",this.el.nativeElement.style.color=t,this.el.nativeElement.style.fill=t}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq))},t.\u0275dir=s.lG2({type:t,selectors:[["","appProductAvailability",""]],inputs:{amount:"amount"}}),t})();function b(t,e){if(1&t&&s._UZ(0,"img",19),2&t){const t=s.oxw().$implicit;s.Q6J("src",t.imageUrls[0],s.LSH)}}function y(t,e){1&t&&s._UZ(0,"img",20)}function x(t,e){if(1&t&&(s.TgZ(0,"div",21),s.O4$(),s.TgZ(1,"svg",22),s._UZ(2,"path",23),s.qZA(),s.kcU(),s.TgZ(3,"span",24),s._uU(4,"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"),s.qZA(),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(2),s.Q6J("amount",t.availableAmount),s.xp6(1),s.Q6J("amount",t.availableAmount)}}function m(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",25),s.NdJ("click",function(){s.CHM(t);const e=s.oxw().$implicit;return s.oxw(2).addToBasket(e)}),s._uU(1,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),s.qZA()}}function v(t,e){1&t&&(s.TgZ(0,"div",26),s._uU(1,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043de"),s.qZA())}function Z(t,e){1&t&&(s.TgZ(0,"p",27),s._uU(1,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),s.qZA())}function C(t,e){1&t&&(s.TgZ(0,"p",28),s._uU(1,"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c"),s.qZA())}function k(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",3),s.TgZ(1,"a",4),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw(2).openProduct(e.id)}),s.TgZ(2,"div",5),s.YNc(3,b,1,1,"img",6),s.YNc(4,y,1,0,"img",7),s.qZA(),s.TgZ(5,"p",8),s._uU(6),s.qZA(),s.qZA(),s.YNc(7,x,5,2,"div",9),s.TgZ(8,"div",10),s.TgZ(9,"p",11),s._uU(10),s.TgZ(11,"span"),s._uU(12,"p."),s.qZA(),s.qZA(),s.TgZ(13,"div",12),s.TgZ(14,"span",13),s._UZ(15,"span",14),s.qZA(),s.qZA(),s.YNc(16,m,2,0,"div",15),s.YNc(17,v,2,0,"div",16),s.YNc(18,Z,2,0,"p",17),s.YNc(19,C,2,0,"p",18),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit;s.xp6(3),s.Q6J("ngIf",t.imageUrls[0]),s.xp6(1),s.Q6J("ngIf",!t.imageUrls[0]),s.xp6(2),s.Oqu(t.name),s.xp6(1),s.Q6J("ngIf",t.availableAmount),s.xp6(3),s.Oqu(t.price),s.xp6(5),s.Q6J("rating",t.rating),s.xp6(1),s.Q6J("ngIf",!t.isInCart),s.xp6(1),s.Q6J("ngIf",t.isInCart),s.xp6(1),s.Q6J("ngIf",!t.isFavorite),s.xp6(1),s.Q6J("ngIf",t.isFavorite)}}function T(t,e){if(1&t&&(s.TgZ(0,"div",1),s.YNc(1,k,20,10,"div",2),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngForOf",t.goods)}}let A=(()=>{class t{constructor(t,e,o,i,n){this.router=t,this.goodsSettingsService=e,this.goodsHttpService=o,this.cartHttpService=i,this.store=n,this.goods=[],this.sorting={sortType:"",isReverse:!1}}ngOnChanges(){this.getGoods()}ngOnInit(){this.goodsSettingsService.currentSort$.subscribe(t=>{this.sorting=t,this.getGoods()})}getGoods(){this.subcategory?this.isAddGoods?this.goodsHttpService.getGoodsForSubcategory(this.category.id,this.subcategory.id,0,10*this.page,this.sorting.sortType,this.sorting.isReverse).subscribe(t=>{this.goods=t,this.goods.forEach(t=>this.checkProduct(t))}):1!==this.page?this.goodsHttpService.getGoodsForSubcategory(this.category.id,this.subcategory.id,10*(this.page-1),10,this.sorting.sortType,this.sorting.isReverse).subscribe(t=>{this.goods=t,this.goods.forEach(t=>this.checkProduct(t))}):this.goodsHttpService.getGoodsForSubcategory(this.category.id,this.subcategory.id,0,10,this.sorting.sortType,this.sorting.isReverse).subscribe(t=>{this.goods=t,this.goods.forEach(t=>this.checkProduct(t))}):this.isAddGoods?this.goodsHttpService.getGoodsForCategory(this.category.id,0,10*this.page,this.sorting.sortType,this.sorting.isReverse).subscribe(t=>{this.goods=t,this.goods.forEach(t=>this.checkProduct(t))}):1!==this.page?this.goodsHttpService.getGoodsForCategory(this.category.id,10*(this.page-1),10,this.sorting.sortType,this.sorting.isReverse).subscribe(t=>{this.goods=t,this.goods.forEach(t=>this.checkProduct(t))}):this.goodsHttpService.getGoodsForCategory(this.category.id,0,10,this.sorting.sortType,this.sorting.isReverse).subscribe(t=>{this.goods=t,this.goods.forEach(t=>this.checkProduct(t))})}addToBasket(t){const e=localStorage.getItem("token");this.cartHttpService.addItemToCart(t.id,e).subscribe(()=>{},()=>{this.cartHttpService.addItemToLocalStorage(t.id),this.getGoods()}),e&&this.store.dispatch((0,d.PR)({token:e}))}openProduct(t){this.subcategory?this.router.navigate([`/${this.subcategory.id}/${t}`]):this.goodsHttpService.getProductById(t).subscribe(t=>{this.router.navigate([`/${t.subCategory}/${t.id}`])})}checkProduct(t){this.store.subscribe(e=>{e.userState.user?e.userState.user.cart.find(e=>e===t.id)&&(t.isInCart=!0):localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")).find(e=>e===t.id)&&(t.isInCart=!0)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.F0),s.Y36(c),s.Y36(l.O),s.Y36(u.R),s.Y36(h.yh))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-product"]],inputs:{category:"category",subcategory:"subcategory",page:"page",isAddGoods:"isAddGoods"},features:[s.TTD],decls:1,vars:1,consts:[["class","goods__page",4,"ngIf"],[1,"goods__page"],["class","product-container",4,"ngFor","ngForOf"],[1,"product-container"],[1,"product-link",3,"click"],[1,"img-container"],["class","product-img",3,"src",4,"ngIf"],["class","product-img","src","../../../../assets//default_preview.jpeg",4,"ngIf"],[1,"product-name"],["class","availability",4,"ngIf"],[1,"control-block"],[1,"product-price"],[1,"rating-block"],[1,"rating_default"],["appProductRating","",1,"product-rating",3,"rating"],["class","to-basket-btn",3,"click",4,"ngIf"],["class","to-basket-btn_true",4,"ngIf"],["class","to-favorites-btn",4,"ngIf"],["class","to-favorites-btn to-favorites-btn_true",4,"ngIf"],[1,"product-img",3,"src"],["src","../../../../assets//default_preview.jpeg",1,"product-img"],[1,"availability"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["appProductAvailability","","fill-rule","evenodd","clip-rule","evenodd","d","M13 9C13 11.7614 10.7614 14 8 14C5.23858 14 3 11.7614 3 9C3 6.23858 5.23858 4 8 4C10.7614 \n        4 13 6.23858 13 9ZM14 9C14 12.3137 11.3137 15 8 15C4.68629 15 2 12.3137 2 9C2 5.68629 \n        4.68629 3 8 3C11.3137 3 14 5.68629 14 9ZM5.92426 8.07574L7.5 9.65147L10.5757 6.57574L11.4243 \n        7.42426L7.92426 10.9243C7.81174 11.0368 7.65913 11.1 7.5 11.1C7.34087 11.1 7.18826 11.0368\n         7.07574 10.9243L5.07574 8.92426L5.92426 8.07574Z","fill","#999999",3,"amount"],["appProductAvailability","",3,"amount"],[1,"to-basket-btn",3,"click"],[1,"to-basket-btn_true"],[1,"to-favorites-btn"],[1,"to-favorites-btn","to-favorites-btn_true"]],template:function(t,e){1&t&&s.YNc(0,T,2,1,"div",0),2&t&&s.Q6J("ngIf",e.goods.length>0)},directives:[i.O5,i.sg,f,_],styles:[".product-container[_ngcontent-%COMP%]{width:23%;margin-top:18px;border-top:1px solid #e4e4e4;padding:30px 5px 0}.product-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;font-size:16px;line-height:1;color:#0072bc;outline:none;cursor:pointer}.product-link[_ngcontent-%COMP%]:hover{color:#ea1653}.img-container[_ngcontent-%COMP%]{height:150px;width:100%;min-height:60px;margin-bottom:18px;display:flex;align-items:center}.product-img[_ngcontent-%COMP%]{max-width:150px;max-height:150px;margin:0 auto;display:block}.product-name[_ngcontent-%COMP%]{text-align:center;margin:0 10px}.availability[_ngcontent-%COMP%]{padding-top:8px;display:flex;align-items:center;justify-content:center;margin-bottom:14px}.availability[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;color:#999;height:18px;font-size:12px;line-height:18px;padding-left:4px;font-weight:600;padding-top:3px}.control-block[_ngcontent-%COMP%]{width:152px;margin:0 auto}.product-price[_ngcontent-%COMP%]{font-size:20px;font-weight:400;line-height:20px;padding-bottom:12px;text-align:center}.product-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;line-height:20px;margin-left:.3em}.rating-block[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:0}.rating_default[_ngcontent-%COMP%]{text-align:left;margin:0 0 12px;background:url(rate-empty.5aff00ebd82f26bc51b5.svg) repeat-x;width:75px;height:15px;display:block}.product-rating[_ngcontent-%COMP%]{max-width:100%;display:inline-block;height:15px;text-align:left;background:url(rate-filled.16f62c0b51601f659dda.svg) repeat-x}.to-basket-btn[_ngcontent-%COMP%]{margin:0 auto 12px;width:100%;display:block;height:31px;background:#ea1653;line-height:29px;font-size:12px;font-family:Tahoma,Geneva,sans-serif;color:#fff;text-align:center;text-decoration:none;cursor:pointer;outline:none;border:0}.to-favorites-btn[_ngcontent-%COMP%]{color:#0072bc;cursor:pointer;pointer-events:auto;font-size:11px;display:flex;justify-content:center}.goods__page[_ngcontent-%COMP%]{padding:0;position:relative;outline:none;border-spacing:0;display:flex;flex-wrap:wrap;width:100%;margin:0 0 25px}.to-basket-btn_true[_ngcontent-%COMP%]{margin:0 auto 8px;width:100%;display:block;height:31px;line-height:29px;font-size:12px;font-family:Tahoma,Geneva,sans-serif;text-align:center;text-decoration:none;cursor:pointer;outline:none;background:#fff;color:#ea1653;border:2px solid #ea1653}.to-favorites-btn_true[_ngcontent-%COMP%]{color:#ea1653}"]}),t})();function P(t,e){if(1&t&&(s.ynx(0),s.TgZ(1,"div",11),s.TgZ(2,"ul",12),s.TgZ(3,"li",13),s.TgZ(4,"a",14),s._uU(5,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),s.qZA(),s.qZA(),s.TgZ(6,"li",15),s.TgZ(7,"a",16),s._uU(8),s.qZA(),s.qZA(),s.TgZ(9,"li",15),s.TgZ(10,"a",16),s._uU(11),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(12,"h1",17),s._uU(13),s.qZA(),s.BQk()),2&t){const t=s.oxw(2);s.xp6(7),s.s9C("href","/"+t.category.id,s.LSH),s.xp6(1),s.Oqu(t.category.name),s.xp6(2),s.s9C("href","/"+t.subcategory.id,s.LSH),s.xp6(1),s.Oqu(t.subcategory.name),s.xp6(2),s.Oqu(t.subcategory.name)}}function O(t,e){if(1&t&&(s.ynx(0),s.TgZ(1,"div",11),s.TgZ(2,"ul",12),s.TgZ(3,"li",13),s.TgZ(4,"a",14),s._uU(5,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),s.qZA(),s.qZA(),s.TgZ(6,"li",15),s.TgZ(7,"a",16),s._uU(8),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"h1",17),s._uU(10),s.qZA(),s.BQk()),2&t){const t=s.oxw(2);s.xp6(7),s.s9C("href","/"+t.category.id,s.LSH),s.xp6(1),s.Oqu(t.category.name),s.xp6(2),s.Oqu(t.category.name)}}function q(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"a",8),s.NdJ("click",function(){return s.CHM(t),s.oxw(2).prevPage()}),s._uU(1,"<"),s.qZA()}}function S(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",1),s.TgZ(1,"div",2),s.YNc(2,P,14,5,"ng-container",3),s.YNc(3,O,11,3,"ng-container",3),s.TgZ(4,"div",4),s._UZ(5,"app-sorting-block"),s.TgZ(6,"div",5),s.TgZ(7,"span",6),s.YNc(8,q,2,0,"a",7),s._uU(9),s.TgZ(10,"a",8),s.NdJ("click",function(){return s.CHM(t),s.oxw().nextPage()}),s._uU(11,">"),s.qZA(),s.qZA(),s.qZA(),s._UZ(12,"app-product",9),s.TgZ(13,"button",10),s.NdJ("click",function(){return s.CHM(t),s.oxw().addPage()}),s._uU(14,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0451"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.xp6(2),s.Q6J("ngIf",t.subcategory),s.xp6(1),s.Q6J("ngIf",t.category&&!t.subcategory),s.xp6(5),s.Q6J("ngIf",t.page>1),s.xp6(1),s.hij(" \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",t.page," "),s.xp6(3),s.Q6J("page",t.page)("category",t.category)("subcategory",t.subcategory)("isAddGoods",t.isAddGoods)}}const w=[{path:"",component:(()=>{class t{constructor(t,e,o){this.activateRoute=t,this.categoriesHttpService=e,this.router=o,this.subscription=t.params.subscribe(t=>{this.categoryName=t.categoryName})}ngOnInit(){this.categoriesHttpService.getCategories().subscribe(t=>{let e;if(t.find(t=>t.id===this.categoryName))this.category=t.find(t=>t.id===this.categoryName);else for(let o=0;o<t.length;o+1)if(e=t[o].subCategories.find(t=>t.id===this.categoryName),e){this.category=t[o],this.subcategory=e;break}}),this.page=1,this.isAddGoods=!1}nextPage(){this.isAddGoods=!1,this.page+=1}prevPage(){this.isAddGoods=!1,this.page>0&&(this.page-=1)}addPage(){this.page+=1,this.isAddGoods=!0}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.gz),s.Y36(r.V),s.Y36(n.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-category-page"]],decls:1,vars:1,consts:[["class","category-page",4,"ngIf"],[1,"category-page"],[1,"wrapper","category-page__wrapper"],[4,"ngIf"],[1,"goods-wrap"],[1,"top-paging"],[1,"paging-nav"],["rel","next","name","2","class","paging__link",3,"click",4,"ngIf"],["rel","next","name","2",1,"paging__link",3,"click"],[3,"page","category","subcategory","isAddGoods"],[1,"load-goods__btn",3,"click"],[1,"category-path"],[1,"category-path__list"],[1,"category-path__item","item__first"],["href","/","title","\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",1,"category-path__link"],[1,"category-path__item"],[1,"category-path__link",3,"href"],[1,"category-page__title"]],template:function(t,e){1&t&&s.YNc(0,S,15,8,"div",0),2&t&&s.Q6J("ngIf",e.category)},directives:[i.O5,p,A],styles:[".category-path[_ngcontent-%COMP%]{list-style:none}.category-path__list[_ngcontent-%COMP%]{list-style:none;display:flex}.category-path__item[_ngcontent-%COMP%]{display:inline-block;padding:0 .5em 0 .75em;background:url(separator.d44ff134e1025ab87eb3.gif) no-repeat 0 100%;line-height:1}.item__first[_ngcontent-%COMP%]{padding-left:0;background:none}.category-path__link[_ngcontent-%COMP%]{font-size:11px;color:#717171}.category-path__link[_ngcontent-%COMP%]:hover{color:#d62761;cursor:pointer}.category-page__title[_ngcontent-%COMP%]{clear:both;padding:18px 0 4px;font-size:30px;font-family:Futura,Trebuchet MS,Arial,sans-serif;margin:0}.top-paging[_ngcontent-%COMP%]{line-height:36px;text-align:center;width:100%;z-index:1;margin-bottom:-15px;padding-top:15px}.paging-nav[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #fff;color:#aa90a5;position:absolute;top:47px;display:inline-block;width:132px;font-size:12px;text-align:center;z-index:10;left:0;right:0;margin:auto}.paging__link[_ngcontent-%COMP%]{text-decoration:none;font-weight:900;cursor:pointer}.goods-wrap[_ngcontent-%COMP%]{position:relative}.category-page[_ngcontent-%COMP%]{margin-top:32px}.category-page__wrapper[_ngcontent-%COMP%]{display:block}.load-goods__btn[_ngcontent-%COMP%]{display:block;padding:10px 24px;border:0;border-radius:4px;font-family:inherit;font-weight:700;font-size:inherit;line-height:inherit;background:#07c;color:#fff;cursor:pointer;transition:.2s ease;margin:0 auto 32px}"]}),t})()},{path:":productId",loadChildren:()=>o.e(306).then(o.bind(o,1306)).then(t=>t.ProductPageModule)}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.Bz.forChild(w)],n.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,M]]}),t})()}}]);