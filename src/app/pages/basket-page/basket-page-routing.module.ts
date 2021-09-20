import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageComponent } from './basket-page.component';

const appRoutes: Routes = [
  { path: '', component: BasketPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class BasketPageRoutingModule {}