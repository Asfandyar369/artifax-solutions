export interface Carousel {
  id: number
  name: string;
  items: CarouselItem[];
}

export interface CarouselItem {
  id: number
  imageUrl: string;
  placeholderUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
