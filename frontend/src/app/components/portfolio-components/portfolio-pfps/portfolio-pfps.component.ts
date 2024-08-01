import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';
import { LoaderComponent } from '../../common-components/loader/loader.component';
import { PortfolioImageLoaderComponent } from "../../common-components/portfolio-image-loader/portfolio-image-loader.component";


@Component({
  selector: 'app-portfolio-pfps',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgOptimizedImage, LoaderComponent, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-pfps.component.html',
  styleUrls: ['./portfolio-pfps.component.css'],
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
export class PortfolioPFPsComponent implements OnInit {
  PortfolioPFPs: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All PFPs';

  constructor() { }

  ngOnInit(): void {
    this.getPortfolioShowcase();
  }

  private getPortfolioShowcase(): void {
    this.PortfolioPFPs = {
      "id": 1,
      "subTitle": "PFPs",
      "title": "Stand out with eye-catching profile picture frames that reflect your personality and brand.",
      "description": "Discover unique and stylish profile picture frames tailored to your taste.",
      "filterOptions": [
        "All PFPs",
        "Static",
        "Animated"
      ],
      "showCaseCardList": [
        {
          "id": 1,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-4.jpg",
          "altText": "Static pfp",
          "title": "PFP",
          "description": "Static"
        },
        {
          "id": 2,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-1.jpg",
          "altText": "Static pfp",
          "title": "PFP",
          "description": "Static"
        },
        {
          "id": 3,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-3.jpg",
          "altText": "Static pfp",
          "title": "PFP",
          "description": "Static"
        },
        {
          "id": 4,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-portfolio-2.jpg",
          "altText": "Static pfp",
          "title": "PFP",
          "description": "Static"
        },
        {
          "id": 5,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-1.gif",
          "altText": "Animated pfp",
          "title": "PFP",
          "description": "Animated"
        },
        {
          "id": 6,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-2.gif",
          "altText": "Animated pfp",
          "title": "PFP",
          "description": "Animated"
        },
        {
          "id": 7,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-3.gif",
          "altText": "Animated pfp",
          "title": "PFP",
          "description": "Animated"
        },
        {
          "id": 8,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-6.gif",
          "altText": "Animated pfp",
          "title": "PFP",
          "description": "Animated"
        },
        {
          "id": 9,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-5.gif",
          "altText": "3D pfp",
          "title": "PFP",
          "description": "3D"
        },
        {
          "id": 10,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-4.gif",
          "altText": "3D pfp",
          "title": "PFP",
          "description": "3D"
        },
        {
          "id": 11,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-3.gif",
          "altText": "3D pfp",
          "title": "PFP",
          "description": "3D"
        },
        {
          "id": 12,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-pfp-portfolio-2.gif",
          "altText": "3D pfp",
          "title": "PFP",
          "description": "3D"
        }
      ]
    };
    this.filteredCardList = this.PortfolioPFPs.showCaseCardList;
  }


  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All PFPs') {
      this.filteredCardList = this.PortfolioPFPs?.showCaseCardList;
    } else if (option === 'Animated') {
      this.filteredCardList = this.PortfolioPFPs?.showCaseCardList?.filter(
        card => card.description === 'Animated' || card.description === '3D'
      );
    } else {
      this.filteredCardList = this.PortfolioPFPs?.showCaseCardList?.filter(
        card => card.description === option
      );
    }
  }
}
