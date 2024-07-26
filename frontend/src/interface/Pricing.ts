export interface Pricing {
  id: number | undefined | null;
  subTitle: string | undefined | null;
  title: string | undefined | null;
  description: string | undefined | null;
  cardList: PricingCard[] | undefined | null;
}

export interface PricingCard {
  id: number | undefined | null;
  title: string | undefined | null;
  price: string | undefined | null;
  description: string | undefined | null;
  pricingServiceList: PricingService[] | undefined | null;
  buttonText: string | undefined | null;
  buttonLink: string | undefined | null;
}

export interface PricingService {
  id: number | undefined | null;
  icon: string | undefined | null;
  benefit: string | undefined | null;
}
