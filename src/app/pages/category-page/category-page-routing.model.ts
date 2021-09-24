import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page.component';

const appRoutes: Routes = [
  { path: '', component: CategoryPageComponent },
  {
    path: ':productId',
    loadChildren: () => import('../product-page/product-page.module').then((m) => m.ProductPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
