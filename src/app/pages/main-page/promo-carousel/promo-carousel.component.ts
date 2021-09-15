import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-promo-carousel',
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.scss'],
  providers: []
})
export class PromoCarouselComponent {

  promoGoods = [
    {
      goodLink: "/",
      imageSrc: "../../../../assets/apple.jpg"
    },
    {
      goodLink: "/",
      imageSrc: "../../../../assets/garniture.jpg"
    },
    {
      goodLink: "/",
      imageSrc: "../../../../assets/tv.jpg"
    },
    {
      goodLink: "/",
      imageSrc: "../../../../assets/karcher.jpg"
    }
  ]  

}
