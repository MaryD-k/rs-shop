import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@core/models/category.model';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';
import { GoodsHttpService } from 'src/app/services/goods-http.service';

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

  goods: Product[];

  page: number;

  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, 
    private categoriesHttpService: CategoriesHttpService,
    private router: Router,
    private goodsHttpService: GoodsHttpService) {
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
          this.goodsHttpService.getGoodsForSubcategory(this.category.id, this.categoryName).subscribe( goods => 
            {
              this.goods = goods;
              console.log(goods[0])
            })
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
    this.goodsHttpService.getGoodsForSubcategory(this.category.id, this.categoryName, this.page * 10)
      .subscribe( goods => this.goods = goods);
    this.page += 1;
  }

  prevPage() {
    if(this.page > 0) {
      this.page -= 1;
    }
  }

}
