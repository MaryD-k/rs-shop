import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

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
    if(localStorage.getItem('cart')) {
      currentGoods = JSON.parse(localStorage.getItem('cart')!);
      localStorage.setItem('cart', JSON.stringify([...currentGoods, itemId]))
    } else {
      localStorage.setItem('cart', JSON.stringify([itemId]))
    }
  }

  getItemsFromLS() {
    if(localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')!);
    } else return [];
  }

  addItemToCart(id: string, currentUserToken: string) {
    console.log(id)
    let headers = new HttpHeaders().set('Authorization', `Bearer ${currentUserToken}`);
    return this.httpClient.post("http://localhost:3004/users/cart",  {id}, { headers: headers });
  }

  deleteProduct(id: string, currentUserToken: string) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${currentUserToken}`);
    return this.httpClient.delete(`http://localhost:3004/users/cart?id=${id}`, { headers: headers })
  }
}