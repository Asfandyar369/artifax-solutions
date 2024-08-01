import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';
import { PortfolioImageLoaderComponent } from "../../common-components/portfolio-image-loader/portfolio-image-loader.component";


@Component({
  selector: 'app-portfolio-banner',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgOptimizedImage, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-banner.component.html',
  styleUrl: './portfolio-banner.component.css',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class PortfolioBannerComponent implements OnInit {
  portfolioBanner: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Banners';

  constructor() { }

  ngOnInit(): void {
    this.getPortfolioBanner();
  }

  private getPortfolioBanner(): void {
    this.portfolioBanner = {
      "id": 1,
      "subTitle": "Banner",
      "title": "Upgrade your stream with our eye-catching banners.",
      "description": "Discover unique and stylish banner frames tailored to your taste.",
      "filterOptions": [
        "All Banners",
        "Static",
        "Animated"
      ],
      "showCaseCardList": [
        {
          "id": 13,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-banner-portfolio-3.jpg",
          "altText": "Static banner",
          "title": "Banner",
          "description": "Static"
        },
        {
          "id": 14,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-banner-portfolio-6.jpg",
          "altText": "Static banner",
          "title": "Banner",
          "description": "Static"
        },
        {
          "id": 15,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-banner-portfolio-4.jpg",
          "altText": "Static banner",
          "title": "Banner",
          "description": "Static"
        },
        {
          "id": 16,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-banner-portfolio-5.jpg",
          "altText": "Static banner",
          "title": "Banner",
          "description": "Static"
        },
        {
          "id": 17,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-banner-portfolio-1.jpg",
          "altText": "Static banner",
          "title": "Banner",
          "description": "Static"
        },
        {
          "id": 18,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-banner-portfolio-2.jpg",
          "altText": "Static banner",
          "title": "Banner",
          "description": "Static"
        },
        {
          "id": 19,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-banner-portfolio-1.gif",
          "altText": "Animated Character With Car Background Banner",
          "title": "Banner",
          "description": "Animated"
        },
        {
          "id": 20,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-banner-portfolio-2.gif",
          "altText": "Animated screen",
          "title": "Banner",
          "description": "Animated"
        },
        {
          "id": 21,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-banner-portfolio-4.gif",
          "altText": "animated screens",
          "title": "Banner",
          "description": "Animated"
        },
        {
          "id": 22,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-banner-portfolio-3.gif",
          "altText": "Ghost Animated Banners",
          "title": "Banner",
          "description": "Animated"
        },
        {
          "id": 23,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-banner-portfolio-5.gif",
          "altText": "Fire Animated banners",
          "title": "Banner",
          "description": "Animated"
        },
        {
          "id": 24,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-banner-portfolio-6.gif",
          "altText": "Rainy Animated Banner",
          "title": "Banner",
          "description": "Animated"
        }
      ]
    };
    this.filteredCardList = this.portfolioBanner.showCaseCardList;
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Banners') {
      debugger
      this.filteredCardList = this.portfolioBanner?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioBanner?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.description === option
        );
    }
  }

  trackByOption(index: number, option: string): string {
    return option;
  }

  trackByCard(index: number, card: any): string {
    return card.id;  // Assuming each card has a unique `id`
  }
}
