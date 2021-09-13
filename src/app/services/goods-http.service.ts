import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/models/category.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoodsHttpService {

  // goods$: Observable<any>;

  // private goodsSubject = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) {
    // this.goods$ = this.goodsSubject.asObservable();
  }

  returnEmptyResult(): [] {
    return [];
  }

  getGoods(request: string) {
    return this.httpClient.get(`http://localhost:3004/goods/search?text=${request}`)
    //   .subscribe((goods) => {
    //     console.log(goods)
    //     this.goodsSubject.next(goods);
    //   }
    // );
  }
}
