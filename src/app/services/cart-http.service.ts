import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
  goodsInCartLS$: Observable<string[]>;

  private goodsInCartSubject = new BehaviorSubject<string[]>([]);

  constructor(private httpClient: HttpClient) {
    this.goodsInCartLS$ = this.goodsInCartSubject.asObservable();
  }

  addItemToLocalStorage(itemId: string) {
    let currentGoods: string[];
    if (localStorage.getItem('cart')) {
      currentGoods = JSON.parse(localStorage.getItem('cart')!);
      localStorage.setItem('cart', JSON.stringify([...currentGoods, itemId]));
    } else {
      localStorage.setItem('cart', JSON.stringify([itemId]));
    }
  }

  getItemsFromLS() {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')!);
    }
    return [];
  }

  addItemToCart(id: string, currentUserToken: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${currentUserToken}`);
    return this.httpClient.post('/users/cart', { id }, { headers });
  }

  deleteProduct(id: string, currentUserToken: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${currentUserToken}`);
    return this.httpClient.delete(`/users/cart?id=${id}`, { headers });
  }
}
