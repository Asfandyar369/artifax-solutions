export interface AcquireSection {
  id: number | undefined | null;
  title: string | undefined | null;
  subTitle: string | undefined | null;
  description: string | undefined | null;
  carouselSlides: AcquireSectionSlide[] | undefined | null;
  usefulLinks: AcquireSectionUsefulLink[] | undefined | null;
  callToActions: AcquireSectionButton[] | undefined | null;
}

export interface AcquireSectionSlide {
  id: number | undefined | null;
  imageUrl: string | undefined | null;
  altText: string | undefined | null;
}

export interface AcquireSectionUsefulLink {
  id: number | undefined | null;
  linkText: string | undefined | null;
  url: string | undefined | null;
}

export interface AcquireSectionButton {
  id: number | undefined | null;
  buttonText: string | undefined | null;
  buttonUrl: string | undefined | null;
}
