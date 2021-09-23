import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@core/models/category.model';
import { Store } from '@ngrx/store';
import { Sorting } from 'src/app/models/goods-sorting.model';
import { Product } from 'src/app/models/product.model';
import { getUser } from 'src/app/redux/user/user.actions';
import { CartHttpService } from 'src/app/services/cart-http.service';
import { GoodsHttpService } from 'src/app/services/goods-http.service';
import { GoodsSettingsService } from 'src/app/services/goods-sorting.service';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() category: Category;

  @Input() subcategory: {
    id: string,
    name: string
  };

  goods: Product[] = [];
  
  @Input() page: number;

  @Input() isAddGoods: boolean;

  sorting: Sorting;

  constructor(
    private router: Router,
    private goodsSettingsService: GoodsSettingsService,
    private goodsHttpService: GoodsHttpService,
    private cartHttpService: CartHttpService,
    private store: Store) { 
    this.goodsSettingsService.currentSort$.subscribe((sorting) => {
        this.sorting = sorting;
      });
  }
  ngOnChanges(): void {
    this.getGoods();
  }

  ngOnInit(): void {
    this.getGoods();
  }

  getGoods() {
    if(this.subcategory) {
      if(this.isAddGoods) {
        this.goodsHttpService.getGoodsForSubcategory(this.category.id, this.subcategory.id, 0, this.page * 10)
        .subscribe( goods => {
          this.goods = goods;
          this.goods.forEach(product => this.checkProduct(product));
        });
      } else if(this.page !== 1 ) {
        this.goodsHttpService.getGoodsForSubcategory(this.category.id, this.subcategory.id, (this.page - 1) * 10)
        .subscribe( goods => {
          this.goods = goods;
          this.goods.forEach(product => this.checkProduct(product));
        });
      } else {
        this.goodsHttpService.getGoodsForSubcategory(this.category.id, this.subcategory.id)
        .subscribe( goods => {
          this.goods = goods;
          this.goods.forEach(product => this.checkProduct(product));
        });
      }
    } else if(this.isAddGoods) {
      this.goodsHttpService.getGoodsForCategory(this.category.id, 0, this.page * 10)
        .subscribe( goods => {
          this.goods = goods;
          this.goods.forEach(product => this.checkProduct(product));
        });
      } else if(this.page !== 1 ) {
        this.goodsHttpService.getGoodsForCategory(this.category.id, (this.page - 1) * 10)
          .subscribe( goods => {
            this.goods = goods;
            this.goods.forEach(product => this.checkProduct(product));
          });
      } else {
        this.goodsHttpService.getGoodsForCategory(this.category.id)
        .subscribe( goods => {
          this.goods = goods;
          this.goods.forEach(product => this.checkProduct(product));
        });
      }
  }

  addToBasket(item: Product) {
    let currentUserToken = localStorage.getItem('token');
    this.cartHttpService.addItemToCart(item.id, currentUserToken!).subscribe(() => {},
      error => {
        this.cartHttpService.addItemToLocalStorage(item.id);
        this.getGoods();
      }
    );
    if(currentUserToken) {
      this.store.dispatch(getUser({ token: currentUserToken }));
    }
  }

  openProduct(id: string) {
    if(!this.subcategory) {
      this.goodsHttpService.getProductById(id).subscribe(product => {
        this.router.navigate([`/${product.subCategory}/${product.id}`])
      })
    } else {
      this.router.navigate([`/${this.subcategory.id}/${id}`])
    }
  }

  checkProduct(product: Product) {
    this.store.subscribe((state: any) => {
      if(state.userState.user) {
        if(state.userState.user.cart.find((productInCart: string) => productInCart === product.id)) {
          product.isInCart = true;
        }
      } else if(localStorage.getItem('cart')) {
        let cartLS = JSON.parse(localStorage.getItem('cart')!);
        if(cartLS.find((productId: string) => productId === product.id)) {
          product.isInCart = true;
        }
      }
    })
  }
}
