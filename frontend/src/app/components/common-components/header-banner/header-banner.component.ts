import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { HeaderBanner } from '../../../../interface/HeaderBanner';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.css'
})
export class HeaderBannerComponent {
  headerBanner: PortfolioShowcase | undefined | null;
  @Input() headerBannerComponent: HeaderBanner | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getBanner();
  }
  private getBanner(): void {
    if (this.headerBannerComponent?.portfolio) {
      this.headerBanner = {
        "id": 1,
        "title": "Our Portfolio",
        "altText": "Banner Image",
        "imageUrl": "images/portfolio-header-banner.webp"
      };
    } else if (this.headerBannerComponent?.services) {
      this.headerBanner = {
        "id": 1,
        "title": "Our Services",
        "altText": "Cyber Ninja banner",
        "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/services-header-banner.jpg"
      };
    } else if (this.headerBannerComponent?.gamingRoom) {
      this.headerBanner = {
        "id": 1,
        "title": "3D Scenes & Gaming Room",
        "altText": "Gaming Room Banner",
        "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/home-3d-scenes-gaming-room-banner.jpg"
      }
    } else if (this.headerBannerComponent?.graphicDesign) {
      this.headerBanner = {
        "id": 1,
        "title": "Streaming Graphics Design",
        "altText": "Streaming Graphics Design Banner",
        "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/home-streaming-graphics-design-banner.jpg"
      }
    }
  }
}

