import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesHttpService {

  constructor(private httpClient: HttpClient) {}

  returnEmptyResult(): [] {
    return [];
  }

  getCategories() {
    return this.httpClient.get<Category[]>('http://localhost:3004/categories');
  }
}
