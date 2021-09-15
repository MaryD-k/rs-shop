import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { PromoCarouselComponent } from './promo-carousel/promo-carousel.component';

@NgModule({
  declarations: [MainPageComponent, PromoCarouselComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
