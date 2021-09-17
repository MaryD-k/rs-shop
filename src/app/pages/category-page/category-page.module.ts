import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageRoutingModule } from './category-page-routing.model';
import { CategoryPageComponent } from './category-page.component';
import { ProductAvailabilityDirective } from './product-availability.directive';
import { ProductRatingDirective } from './product-rating.directive';
import { SortingBlockComponent } from './sorting-block/sorting-block.component';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './goods.pipe';

@NgModule({
  declarations: [CategoryPageComponent, ProductAvailabilityDirective, ProductRatingDirective, SortingBlockComponent, ProductComponent, SortPipe],
  imports: [
    CommonModule,
    CategoryPageRoutingModule
  ]
})
export class CategoryPageModule { }
