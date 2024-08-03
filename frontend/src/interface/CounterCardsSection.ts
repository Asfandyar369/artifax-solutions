export interface BackgroundImage {
  id: number | undefined | null;
  altText: string | undefined | null;
  imageUrl: string | undefined | null;
  counterCards: CounterCardsSection[] | undefined | null;
}
export interface CounterCardsSection {
  id: number | undefined | null
  currentValue: number | undefined | null
  countValue: number | undefined | null;
  icon: string | undefined | null;
  label: string | undefined | null;
}
