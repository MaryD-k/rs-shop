import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from '@core/models/category.model';
import { Sorting } from 'src/app/models/goods-sorting.model';
import { Product } from 'src/app/models/product.model';
import { GoodsHttpService } from 'src/app/services/goods-http.service';
import { GoodsSettingsService } from 'src/app/services/goods-sorting.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() category: Category;

  @Input() subcategory: {
    id: string,
    name: string
  };

  goods: Product[] = [];
  
  @Input() page: number;

  sorting: Sorting;

  constructor(
    private goodsSettingsService: GoodsSettingsService,
    private goodsHttpService: GoodsHttpService) { 
    this.goodsSettingsService.currentSort$.subscribe((sorting) => {
        this.sorting = sorting;
      });
  }
  ngOnChanges(): void {
    this.getGoods();
  }

  ngOnInit(): void {
    this.getGoods();
  }

  getGoods() {
    if(this.page !== 1 ) {
      this.goodsHttpService.getGoodsForSubcategory(this.category.id, this.subcategory.id, (this.page - 1) * 10)
      .subscribe( goods => this.goods = goods);
    } else {
      this.goodsHttpService.getGoodsForSubcategory(this.category.id, this.subcategory.id)
      .subscribe( goods => this.goods = goods);
    }
  }
}
