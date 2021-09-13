import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesHttpService {
  // categories: Category[];

  constructor(private httpClient: HttpClient) {
    // console.log('1')
    // this.httpClient.get('http://localhost:3004/categories')
    // // .subscribe(categories => {
    // //   this.categories = categories;
    // //   console.log(this.categories)
    // // });
  }

  returnEmptyResult(): [] {
    return [];
  }

  getCategories() {
    return this.httpClient.get<Category[]>('http://localhost:3004/categories');
  }
}
