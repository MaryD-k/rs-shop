interface CarouselImage {
  link: string;
  src: string;
}

export interface PromoCarouselOptions {
  slides: CarouselImage[];
  active: number;
  hide: number | null;
  interval: number;
}

const PROMO_GOODS: CarouselImage[] = [
  {
    link: "/mobile",
    src: "../../../../assets/apple.jpg"
  },
  {
    link: "/headphones",
    src: "../../../../assets/garniture.jpg"
  },
  {
    link: "/tvs",
    src: "../../../../assets/tv.jpg"
  },
  {
    link: "/vacuum",
    src: "../../../../assets/karcher.jpg"
  }
];

export const OPTIONS_DEFAULT: PromoCarouselOptions = {
  slides: PROMO_GOODS,
  active: 0,
  hide: null,
  interval: 4500
};