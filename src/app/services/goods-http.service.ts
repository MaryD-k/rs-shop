import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class GoodsHttpService {

  constructor(private httpClient: HttpClient) {}

  returnEmptyResult(): [] {
    return [];
  }

  getGoods(request: string) {
    return this.httpClient.get(`/goods/search?text=${request}`)
  }

  getGoodsForSubcategory(categoryId: string, subCategoryId: string, startPosition: number = 0, countOfItemsPerPage: number = 10) {
    return this.httpClient.get<Product[]>
      (`/goods/category/${categoryId}/${subCategoryId}?start=${startPosition}&count=${countOfItemsPerPage}`)
  }

  getGoodsForCategory(categoryId: string, 
    startPosition: number = 0, 
    countOfItemsPerPage: number = 10, 
    sort: string = 'itemField', 
    reverse: boolean = false) {
    return this.httpClient.get<Product[]>
      (`/goods/category/${categoryId}?start=${startPosition}&count=${countOfItemsPerPage}&sortBy=${sort}&reverse=${reverse}`)
  }

  getProductById(id: string) {
    return this.httpClient.get<Product>(`/goods/item/${id}`);
  }
}
