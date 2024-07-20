import { PortfolioShowcaseCard } from "./PortfolioShowcase";

export interface PortfolioPFPs {
  id: number | null | undefined;
  subTitle: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  filterOptions: string[] | undefined | null;
  showCaseCardList: PortfolioShowcaseCard[] | undefined | null;
}

