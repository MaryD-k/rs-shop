import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '@core/models/category.model';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';
import { CheckAuthService } from 'src/app/services/check-auth.service';
import { GoodsHttpService } from 'src/app/services/goods-http.service';

const MIN_REQUEST_LENGTH = 2;

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent implements OnInit, OnDestroy {
  private isCatalogOpen$ = false;

  goods: any = [];

  categories: Category[] = [];

  subcategories: { name: string; id: string }[] = [];

  searchRequest = new FormControl('');

  isAccountBlockOpen: boolean;

  @Output() isCatalogOpen = new EventEmitter<boolean>(false);

  private subscriptions: Subscription = new Subscription();

  constructor(
    private goodsHttpService: GoodsHttpService,
    private categoryHttpService: CategoriesHttpService,
    private checkAuthService: CheckAuthService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.searchRequest.valueChanges.pipe(debounceTime(1000)).subscribe((value: string) => {
        if (value.length > MIN_REQUEST_LENGTH) {
          this.categoryHttpService.getCategories().subscribe((categories) => {
            this.categories = categories.filter((category) => category.name.toLowerCase().includes(value.toLowerCase()));
            let allSubcategories: { name: string; id: string }[] = [];
            categories.forEach((category) => {
              allSubcategories = allSubcategories.concat(category.subCategories);
            });
            this.subcategories = allSubcategories.filter((subcategory) => subcategory.name.toLowerCase().includes(value.toLowerCase()));
          });
          this.goodsHttpService.getGoods(value).subscribe((goods) => {
            this.goods = goods;
          });
        } else {
          this.categories = this.categoryHttpService.returnEmptyResult();
          this.goods = this.goodsHttpService.returnEmptyResult();
        }
      })
    );
    this.isAccountBlockOpen = false;
    this.checkAuthService.checkAuthUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toogleCatalog() {
    if (!this.isCatalogOpen$) {
      this.isCatalogOpen$ = true;
      this.isCatalogOpen.emit(this.isCatalogOpen$);
    } else {
      this.isCatalogOpen$ = false;
      this.isCatalogOpen.emit(this.isCatalogOpen$);
    }
  }

  clearSearchRequest() {
    this.searchRequest.setValue('');
    this.goods = [];
    this.categories = [];
  }

  openAccountBlock() {
    if (this.isAccountBlockOpen) {
      this.isAccountBlockOpen = false;
    } else {
      this.isAccountBlockOpen = true;
    }
  }

  closeAccountBlock() {
    this.isAccountBlockOpen = false;
  }
}
