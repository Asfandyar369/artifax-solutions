import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-portfolio-streampack',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './portfolio-streampack.component.html',
  styleUrl: './portfolio-streampack.component.css',
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
export class PortfolioStreampackComponent implements OnInit {
  portfolioStreamPack: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Stream Pack';

  constructor() { }

  ngOnInit(): void {
    this.getPortfolioStreamPack();
  }

  private getPortfolioStreamPack(): void {
    this.portfolioStreamPack = {
      "id": 1,
      "subTitle": "Stream Pack",
      "title": "Get everything you need for a professional stream, including overlays, alerts, and screens.",
      "description": "Discover unique and stylish stream pack frames tailored to your taste.",
      "filterOptions": [
        "All Stream Pack",
        "Static",
        "Animated"
      ],
      "showCaseCardList": [
        {
          "id": 1,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-portfolio-6.jpg",
          "altText": "STATIC STREAM PACK",
          "title": "Stream Pack",
          "description": "Static"
        },
        {
          "id": 2,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-portfolio-1.jpg",
          "altText": "STATIC STREAM PACK",
          "title": "Stream Pack",
          "description": "Static"
        },
        {
          "id": 3,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-portfolio-5.jpg",
          "altText": "STATIC STREAM PACK",
          "title": "Stream Pack",
          "description": "Static"
        },
        {
          "id": 4,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-portfolio-4.jpg",
          "altText": "STATIC STREAM PACK",
          "title": "Stream Pack",
          "description": "Static"
        },
        {
          "id": 5,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-portfolio-3.jpg",
          "altText": "STATIC STREAM PACK",
          "title": "Stream Pack",
          "description": "Static"
        },
        {
          "id": 6,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-portfolio-2.jpg",
          "altText": "STATIC STREAM PACK",
          "title": "Stream Pack",
          "description": "Static"
        },
        {
          "id": 7,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-stream-pack-portfolio-6.gif",
          "altText": "animated stream pack",
          "title": "Stream Pack",
          "description": "Animated"
        },
        {
          "id": 8,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-stream-pack-portfolio-5.gif",
          "altText": "animated stream pack",
          "title": "Stream Pack",
          "description": "Animated"
        },
        {
          "id": 9,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-stream-pack-portfolio-4.gif",
          "altText": "animated stream pack",
          "title": "Stream Pack",
          "description": "Animated"
        },
        {
          "id": 10,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-stream-pack-portfolio-3.gif",
          "altText": "animated stream pack",
          "title": "Stream Pack",
          "description": "Animated"
        },
        {
          "id": 11,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-stream-pack-portfolio-2.gif",
          "altText": "animated stream pack",
          "title": "Stream Pack",
          "description": "Animated"
        },
        {
          "id": 12,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-stream-pack-portfolio-1.gif",
          "altText": "animated stream pack",
          "title": "Stream Pack",
          "description": "Animated"
        }
      ]
    };
    this.filteredCardList = this.portfolioStreamPack.showCaseCardList;
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Stream Pack') {
      debugger
      this.filteredCardList = this.portfolioStreamPack?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioStreamPack?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.description === option
        );
    }
  }

}
