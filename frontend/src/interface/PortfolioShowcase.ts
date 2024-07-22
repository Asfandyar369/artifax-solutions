export interface PortfolioShowcase {
  id: number | null | undefined;
  subTitle: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  imageUrl?: string | undefined | null;
  filterOptions?: string[] | undefined | null;
  showCaseCardList: PortfolioShowcaseCard[] | undefined | null;
}
export interface PortfolioShowcaseCard {
  id: number | null | undefined;
  imageUrl: string | null | undefined;
  altText: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
}
