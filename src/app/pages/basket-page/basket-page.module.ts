import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageComponent } from './basket-page.component';
import { BasketPageRoutingModule } from './basket-page-routing.module';

@NgModule({
  declarations: [BasketPageComponent],
  imports: [CommonModule, BasketPageRoutingModule],
})
export class BasketPageModule {}
