import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ShopNowSection } from '../../../../interface/ShopNowSection';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-shop-now-section',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, LazyLoadImageModule],
  templateUrl: './shop-now-section.component.html',
  styleUrl: './shop-now-section.component.css'
})
export class ShopNowSectionComponent implements OnInit {
  shopNowSection: ShopNowSection | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getShopNowSection();
  }
  private getShopNowSection(): void {
    this.shopNowSection = {
      "id": 1,
      "subtitle": "Shop Now",
      "title": "Explore Our Collection",
      "description": "Ready to explore? Click 'Shop Now' and find your new favorites!",
      "buttonText": "Shop Now",
      "buttonUrl": "/shop",
      "cardList": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/gaming-room-shop-thumb.gif",
          "altText": "Gaming Room",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "Twitch Banner",
          "priceRange": "$70.00 - $1,200.00",

        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/re\n\nv-421e137/streamerstation.com/wp-content/uploads/2023/11/emotes-shop-thumb.gif",
          "altText": "Emotes Main Thumb",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "Emotes",
          "priceRange": "$60.00 - $300.00",
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/pfp-shop-thumb.gif",
          "altText": "Multiple animated PFPs",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "PFP",
          "priceRange": "$70.00 - $100.00",
        },
        {
          "id": 4,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/screen-shop-thumb.gif",
          "altText": "Multiple animated screens",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "Screen",
          "priceRange": "$70.00 - $100.00",

        },
        {
          "id": 5,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYErem\n\nhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/twitch-banner-shop-thumb.gif",
          "altText": "Twitch Banner Main Thumb",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "Twitch Banner",
          "priceRange": "$70.00 - $100.00",

        },
        {
          "id": 6,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/vtuber-design-2d-shop-thumb.gif",
          "altText": "2D MODEL",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "Vtuber Design 2D",
          "priceRange": "$250.00 - $700.00",
        },
        {
          "id": 7,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/vtuber-design-3d-shop-thumb.gif",
          "altText": "Vtuber 3D Models Main Thumb",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "Vtuber Design 3D",
          "priceRange": "$450.00 - $1,000.00",
        },
        {
          "id": 8,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/12/3d-scene-shop-thumb.gif",
          "altText": "Multiple 3D animated scenes",
          "link": "https://streamerstation.com/product/twitch-banner/",
          "title": "3D Scene",
          "priceRange": "$70.00 - $100.00",

        }
      ]
    };
  }
}
