import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../../interface/PortfolioShowcase';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards-section',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgbModule],
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.css'
})
export class CardsSectionComponent implements OnInit {
  portfolioEmote: PortfolioShowcase | undefined | null;
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
  }

}
