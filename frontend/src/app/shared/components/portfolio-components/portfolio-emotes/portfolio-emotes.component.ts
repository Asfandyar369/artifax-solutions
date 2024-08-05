import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../models/PortfolioShowcase';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { PortfolioShowcaseCard } from '../../../../models/PortfolioShowcase';
import { PortfolioImageLoaderComponent } from "../../common/portfolio-image-loader/portfolio-image-loader.component";


@Component({
  selector: 'app-portfolio-emotes',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgOptimizedImage, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-emotes.component.html',
  styleUrl: './portfolio-emotes.component.css',
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
export class PortfolioEmotesComponent implements OnInit {
  portfolioEmote: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Emotes';

  constructor() { }

  ngOnInit(): void {
    this.getPortfolioEmote();
  }

  private getPortfolioEmote(): void {
    this.portfolioEmote = {
      "id": 1,
      "subTitle": "Emotes",
      "title": "Enhance your stream's look with unique banner emotes that bring character and charm.",
      "description": "Discover unique and stylish emote frames tailored to your taste.",
      "filterOptions": [
        "All Emotes",
        "Static",
        "Animated"
      ],
      "showCaseCardList": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-6.jpg",
          "altText": "6 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-5.jpg",
          "altText": "6 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-4.jpg",
          "altText": "6 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 4,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-3.jpg",
          "altText": "5 Static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 5,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-2.jpg",
          "altText": "4 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 6,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-emotes-portfolio-1.jpg",
          "altText": "3 static emotes",
          "title": "Static",
          "description": "Emotes"
        },
        {
          "id": 7,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-5.gif",
          "altText": "5 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 8,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-4.gif",
          "altText": "6 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 9,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-3.gif",
          "altText": "4 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 10,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-2.gif",
          "altText": "6 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 11,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-1.gif",
          "altText": "6 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        },
        {
          "id": 12,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-emotes-portfolio-6.gif",
          "altText": "5 animated emotes",
          "title": "Animated",
          "description": "Emotes"
        }
      ]
    };
    this.filteredCardList = this.portfolioEmote.showCaseCardList;
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Emotes') {
      this.filteredCardList = this.portfolioEmote?.showCaseCardList;
    } else {
      debugger
      this.filteredCardList = this.portfolioEmote?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.title === option
        );
    }
  }
}
