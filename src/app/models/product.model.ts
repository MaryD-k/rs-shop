export interface Product {
  id: string;
  name: string;
  imageUrls: string[];
  rating: number;
  availableAmount: number;
  price: number;
  description: string;
  isInCart: true;
  isFavorite: true;
  category: string,
  subCategory: string
}