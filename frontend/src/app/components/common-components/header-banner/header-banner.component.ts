import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { DynamicSelection } from '../../../../interface/DynamicSelection';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.css'
})
export class HeaderBannerComponent {
  headerBanner: PortfolioShowcase | undefined | null;
  @Input() headerBannerComponent: DynamicSelection | undefined | null;
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
    } else if (this.headerBannerComponent?.vtuberModel) {
      this.headerBanner = {
        "id": 1,
        "title": "VTuber Model",
        "altText": "VTuber Model Banner",
        "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/home-vtuber-banner.jpg"
      }
    } else if (this.headerBannerComponent?.shop) {
      this.headerBanner = {
        "id": 1,
        "title": "Shop",
        "altText": "Shop Banner",
        "imageUrl": "images/White-and-Light-Blue.png"
      }
    } else if (this.headerBannerComponent?.myAccount) {
      this.headerBanner = {
        "id": 1,
        "title": "My Account",
        "altText": "Account Banner",
        "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/my-account-header-banner.jpg"
      }
    } else if (this.headerBannerComponent?.cart) {
      this.headerBanner = {
        id: 1,
        title: "Cart",
        altText: "Cart Banner",
        imageUrl: "https://streamerstation.com/wp-content/uploads/2024/02/Cart-Header-Banner.jpeg"
      }
    } else if (this.headerBannerComponent?.checkout) {
      this.headerBanner = {
        id: 1,
        title: "Checkout",
        altText: "Checkout Banner",
        imageUrl: "https://streamerstation.com/wp-content/uploads/2024/02/Checkout-Header-Banner-scaled.jpg"
      }
    } else if (this.headerBannerComponent?.about) {
      this.headerBanner = {
        id: 1,
        title: "About",
        altText: "About Banner",
        imageUrl: "images/Order-889-2-animated-poster-design.jpg"
      }
    } else if (this.headerBannerComponent?.customers) {
      this.headerBanner = {
        id: 1,
        title: "Customers",
        altText: "Customers Banner",
        imageUrl: "https://streamerstation.com/wp-content/uploads/2024/02/customers-header-banner.jpg"
      }
    }
  }
}

