import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../../../interface/BannerSection';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink, NgIf, NgOptimizedImage],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent implements OnInit {
  carousel: Carousel | undefined | null;

  ngOnInit(): void {
    this.getCarousels();
  }

  private getCarousels(): void {
    this.carousel = {
      "id": 1,
      "name": "Main Carousel",
      "items": [
        {
          "id": 1,
          "imageUrl": "images/home-3d-scenes-gaming-room-banner.jpg",
          "title": "High-quality Streamer 3D Models",
          "description": "Explore exciting 3D scenes and have fun playing in your own 3D gaming room designed for your awesome streaming experience.",
          "buttonText": "View More",
          "buttonLink": "/3d-scenes",
        },
        {
          "id": 2,
          "imageUrl": "images/home-streaming-graphics-design-banner.jpg",
          "title": "Streamer Graphics Solutions",
          "description": "We understand the unique needs of your streams and offer professional graphic design services to help you stand out in a crowded market.",
          "buttonText": "View More",
          "buttonLink": "/graphics-solutions",
        },
        {
          "id": 3,
          "imageUrl": "images/home-vtuber-banner.jpg",
          "title": "VTuber Model Creation Services",
          "description": "Bring your digital persona to life with your own captivating custom VTuber model that enhances your streaming journey more.",
          "buttonText": "View More",
          "buttonLink": "/vtuber-models",
        }
      ]
    };
  }
}
