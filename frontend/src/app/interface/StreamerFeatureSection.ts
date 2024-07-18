export interface StreamerFeatureSection {
  id: number | undefined | null;
  sectionSubtitle: string | undefined | null;
  sectionTitle: string | undefined | null;
  sectionDescription: string | undefined | null;
  cards: Card[] | undefined | null;
}

export interface Card {
  icon: string | undefined | null;
  title: string | undefined | null;
  description: string | undefined | null;
}
