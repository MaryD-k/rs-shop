import { Component, OnInit } from '@angular/core';
import { Category } from '@core/models/category.model';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss'],
})
export class CategoryNavComponent implements OnInit {
  categories: Category[];

  constructor(private categoriesHttpService: CategoriesHttpService) {}

  ngOnInit(): void {
    this.categoriesHttpService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
