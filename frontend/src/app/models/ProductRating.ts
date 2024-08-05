export interface ProductRating {
  name: string | undefined | null;
  image: string | undefined | null;
  rating: number | undefined | null;
  priceFrom?: number | undefined | null;
  priceTo?: number | undefined | null;
}
