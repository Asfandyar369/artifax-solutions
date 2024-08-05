import { AcquireSectionSlide } from "./AcquireSection";

export interface StreamerSection {
  id: number | undefined | null;
  carouselImages?: undefined | null | AcquireSectionSlide[];
  videoUrl?: string[] | undefined | null | string;
  title: string | undefined | null;
  subTitle: string | undefined | null;
  description: string | undefined | null;
  headings?: string[] | undefined | null;
  texts?: string[] | undefined | null;
  buttonText?: string | undefined | null;
  buttonLink?: string | undefined | null;
}
