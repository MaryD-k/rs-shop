import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageRoutingModule } from './category-page-routing.model';
import { CategoryPageComponent } from './category-page.component';
import { ProductAvailabilityDirective } from './product-availability.directive';

@NgModule({
  declarations: [CategoryPageComponent, ProductAvailabilityDirective],
  imports: [
    CommonModule,
    CategoryPageRoutingModule
  ]
})
export class CategoryPageModule { }
