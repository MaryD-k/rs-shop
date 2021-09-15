import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page.component';

const appRoutes: Routes = [
  { path: '', component: CategoryPageComponent },
  // { path: ':categoryName', component: CategoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}