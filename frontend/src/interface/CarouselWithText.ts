import { AcquireSectionUsefulLink, CustomizeDesignServiceBenefit } from "./AcquireSection";
import { ProgressData } from "./ExpertSection";

export interface CarouselWithText {
  carouselImages?: string[] | undefined | null;
  videoUrl?: string | undefined | null;
  title: string | undefined | null;
  subTitle: string | undefined | null;
  description: string | undefined | null;
  headings?: string[] | undefined | null;
  texts?: string[] | undefined | null;
  usefulLinks?: AcquireSectionUsefulLink[] | undefined | null;
  benefitList?: CustomizeDesignServiceBenefit[] | undefined | null;
  buttonText?: string | undefined | null;
  buttonLink?: string | undefined | null;
  progressData?: ProgressData[] | undefined | null;
}
