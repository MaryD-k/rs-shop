import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { getUser } from 'src/app/redux/user/user.actions';
import { CartHttpService } from 'src/app/services/cart-http.service';
import { GoodsHttpService } from 'src/app/services/goods-http.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
})
export class BasketPageComponent implements OnInit, OnDestroy {
  goodsId: string[] = [];

  goodsToBuy: Product[] = [];

  private subscriptions = new Subscription();

  constructor(private store: Store, private goodsHttpService: GoodsHttpService, private cartHttpService: CartHttpService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store.subscribe((request: any) => {
        this.goodsId = [];
        this.goodsToBuy = [];
        if (request.userState.user) {
          const goodsFromLS: string[] = this.cartHttpService.getItemsFromLS();
          if (goodsFromLS.length) {
            const currentUserToken = localStorage.getItem('token');
            goodsFromLS.forEach((product) => this.cartHttpService.addItemToCart(product, currentUserToken!).subscribe(() => {}));
            localStorage.removeItem('cart');
            this.store.dispatch(getUser({ token: currentUserToken! }));
          } else {
            this.goodsId = request.userState.user.cart;
            this.goodsId.forEach((productId: string) => {
              this.goodsHttpService.getProductById(productId).subscribe((product) => {
                this.goodsToBuy.push(product);
              });
            });
          }
        } else {
          const goodsFromLS = this.cartHttpService.getItemsFromLS();
          this.goodsId = goodsFromLS;
          this.goodsId.forEach((productId: string) => {
            this.goodsHttpService.getProductById(productId).subscribe((product) => {
              this.goodsToBuy.push(product);
            });
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.goodsToBuy = [];
  }

  deleteProduct(id: string) {
    const currentUserToken = localStorage.getItem('token');
    if (currentUserToken) {
      this.cartHttpService.deleteProduct(id, currentUserToken).subscribe(() => {});
      this.store.dispatch(getUser({ token: currentUserToken }));
    } else {
      const currentCartInLS: string[] = this.cartHttpService.getItemsFromLS();
      const itemIndexForDel = currentCartInLS.indexOf(id);
      if (itemIndexForDel > -1) {
        currentCartInLS.splice(itemIndexForDel, 1);
        localStorage.setItem('cart', JSON.stringify(currentCartInLS));
        this.goodsId = currentCartInLS;
        this.goodsToBuy = [];
        this.goodsId.forEach((productId: string) => {
          this.goodsHttpService.getProductById(productId).subscribe((product) => {
            this.goodsToBuy.push(product);
          });
        });
      }
    }
  }
}
