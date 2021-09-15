import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/models/category.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class GoodsHttpService {

  constructor(private httpClient: HttpClient) {}

  returnEmptyResult(): [] {
    return [];
  }

  getGoods(request: string) {
    return this.httpClient.get(`http://localhost:3004/goods/search?text=${request}`)
  }

  getGoodsForSubcategory(categoryId: string, subCategoryId: string, startPosition: number = 0, countOfItemsPerPage: number = 10) {
    return this.httpClient.get<Product[]>
      (`http://localhost:3004/goods/category/${categoryId}/${subCategoryId}?start=${startPosition}&count=${countOfItemsPerPage}`)
  }
}
