export interface BlogHubSection {
  id: number | null | undefined;
  subTitle: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  buttonText: string | null | undefined;
  buttonUrl: string | null | undefined;
  showNavigationArrows: boolean;
  showNavigationIndicators: boolean;
  itemList: BlogHubItem[];
}

export interface BlogHubItem {
  id: number | undefined | null;
  imageUrl: string | undefined | null;
  altText: string | undefined | null;
  title: string | undefined | null;
  content: string | undefined | null;
  linkUrl: string | undefined | null;
}

