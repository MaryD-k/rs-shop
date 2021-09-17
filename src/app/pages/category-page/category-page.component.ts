import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@core/models/category.model';
import { Subscription } from 'rxjs';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  categoryName: string;

  category: Category;

  subcategory: {
    id: string,
    name: string
  };

  page: number;

  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, 
    private categoriesHttpService: CategoriesHttpService,
    private router: Router) {
      this.subscription = activateRoute.params.subscribe(params => this.categoryName = params['categoryName']);
  }

  ngOnInit(): void {
    this.categoriesHttpService.getCategories().subscribe(categories => {
      let categoryCheck;
      for(let i = 0; i < categories.length; i++) {
        categoryCheck = categories[i].subCategories.find(subcategory => subcategory.id == this.categoryName);
        if(categoryCheck) {
          this.category = categories[i];
          this.subcategory = categoryCheck;
          
          break;
        }
      }
      if(!categoryCheck) {
        this.router.navigate(['errorpage']);
      }
    });
    this.page = 1;
  }

  nextPage() {
    this.page += 1;
  }
  
  prevPage() {
    if(this.page > 0) {
      this.page -= 1;
    }
  }

}
