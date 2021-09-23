import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageRoutingModule } from './category-page-routing.model';
import { CategoryPageComponent } from './category-page.component';
import { ProductAvailabilityDirective } from './product/product-availability.directive';
import { SortingBlockComponent } from './sorting-block/sorting-block.component';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './product/goods.pipe';
import { ProductRatingDirective } from './product/product-rating.directive';

@NgModule({
  declarations: [
    CategoryPageComponent,
    ProductAvailabilityDirective,
    ProductRatingDirective,
    SortingBlockComponent,
    ProductComponent,
    SortPipe,
  ],
  imports: [CommonModule, CategoryPageRoutingModule],
})
export class CategoryPageModule {}
