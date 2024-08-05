export interface ShopNowSection {
  id: number | null | undefined;
  subtitle: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  buttonText: string | null | undefined;
  buttonUrl: string | null | undefined;
  cardList: ShopNowCardSection[] | undefined | null;
}
export interface ShopNowCardSection {
  id: number | null | undefined;
  imageUrl: string | null | undefined;
  altText: string | null | undefined;
  link: string | null | undefined;
  title: string | null | undefined;
  priceRange: string | null | undefined;
  placeholder?: string | null | undefined;
}
