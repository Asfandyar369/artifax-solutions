import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-portfolio-showcase',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './portfolio-showcase.component.html',
  styleUrl: './portfolio-showcase.component.css'
})
export class PortfolioShowcaseComponent implements OnInit {
  portfolioShowcase: PortfolioShowcase | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getPortfolioShowcase();
  }
  private getPortfolioShowcase(): void {
    this.portfolioShowcase = {
      "id": 1,
      "subTitle": "Showcase Your Style",
      "title": "Explore Our Creative Showcase",
      "description": "Discover our stream design collection.",
      "showCaseCardList": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-1.jpg",
          "altText": "Static pfp",
          "title": "PFPs",
          "description": "Stand out with eye-catching profile picture frames that reflect your personality and brand."
        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-1.jpg",
          "altText": "static 2d half body model",
          "title": "Models",
          "description": "Personalize your stream with custom VTuber models that engage your audience."
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-3.jpg",
          "altText": "5 Static emotes",
          "title": "Emotes",
          "description": "Enhance your stream's look with unique banner emotes that bring character and charm."
        },
        {
          "id": 4,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-portfolio-5.jpg",
          "altText": "STATIC STREAM PACK",
          "title": "Stream Pack",
          "description": "Get everything you need for a professional stream, including overlays, alerts, and screens."
        },
        {
          "id": 5,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-banner-portfolio-2.jpg",
          "altText": "Static banner",
          "title": "Banner",
          "description": "Upgrade your stream with our eye-catching banners."
        },
        {
          "id": 6,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-scenes-portfolio-1.gif",
          "altText": "3D ANIMATED SCENES",
          "title": "3D Scenes",
          "description": "Transport your viewers to immersive virtual worlds with lifelike 3D scenes."
        }
      ]
    };
  }
}
