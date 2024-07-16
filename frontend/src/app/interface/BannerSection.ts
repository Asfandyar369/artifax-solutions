export interface Carousel {
  name: string;
  items: CarouselItem[];
}

export interface CarouselItem {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
