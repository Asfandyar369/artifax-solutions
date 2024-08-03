import { AcquireSectionSlide } from "./AcquireSection";

export interface ExpertSection {
  id: number | undefined | null;
  carouselImages: AcquireSectionSlide[] | undefined | null;
  subtitle: string | undefined | null;
  title: string | undefined | null;
  description: string | undefined | null;
  progressData: ProgressData[] | undefined | null;
}
export interface ProgressData {
  id: number | undefined | null;
  label: string | undefined | null;
  percent: number | undefined | null;
}
