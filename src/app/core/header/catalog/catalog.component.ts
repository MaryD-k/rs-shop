import { Component, OnInit } from '@angular/core';
import { Category } from '@core/models/category.model';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  categories: Category[];

  selectedCategory: Category;

  constructor(public categoriesHttpService: CategoriesHttpService) { }

  ngOnInit(): void {
    this.categoriesHttpService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      this.selectedCategory = categories[0];
    });
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory = category;
  }

}
