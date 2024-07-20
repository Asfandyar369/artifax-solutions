export interface SocialSection {
  id: number | undefined | null;
  title: string | undefined | null;
  subTitle: string | undefined | null;
  description: string | undefined | null;
  profileImageUrl: string | undefined | null;
  profileImageAltText: string | undefined | null;
  postList: SocialPost[] | undefined | null;
  buttonIconSvg: string | undefined | null;
  buttonText: string | undefined | null;
  socialMediaLinks: SocialMediaLink[] | undefined | null;
}

export interface SocialPost {
  id: number | undefined | null;
  imageUrl: string | undefined | null;
  altText: string | undefined | null;
}

export interface SocialMediaLink {
  id: number | undefined | null;
  url: string | undefined | null;
  icon: string | undefined | null;
  platform: string | undefined | null;
}
