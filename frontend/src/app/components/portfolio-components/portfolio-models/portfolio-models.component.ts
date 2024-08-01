import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';
import { animate, style, transition, trigger } from '@angular/animations';
import { PortfolioImageLoaderComponent } from "../../common-components/portfolio-image-loader/portfolio-image-loader.component";


@Component({
  selector: 'app-portfolio-models',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgOptimizedImage, PortfolioImageLoaderComponent],
  templateUrl: './portfolio-models.component.html',
  styleUrl: './portfolio-models.component.css',
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
export class PortfolioModelsComponent implements OnInit {
  portfolioModel: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Models';

  constructor() { }

  ngOnInit(): void {
    this.getPortfolioModels();
  }

  private getPortfolioModels(): void {
    this.portfolioModel = {
      "id": 1,
      "subTitle": "Models",
      "title": "Personalize your stream with custom V-Tuber models that engage your audience.",
      "description": "Discover unique and stylish model frames tailored to your taste.",
      "filterOptions": [
        "All Models",
        "2D Models",
        "3D Models"
      ],
      "showCaseCardList": [
        {
          "id": 1,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-3.jpg",
          "altText": "static 2d half body model",
          "title": "Static",
          "description": "2D Models"
        },
        {
          "id": 2,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-2.jpg",
          "altText": "static 2d half body model",
          "title": "Static",
          "description": "2D Models"
        },
        {
          "id": 3,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-2d-half-body-model-portfolio-1.jpg",
          "altText": "static 2d half body model",
          "title": "Static",
          "description": "2D Models"
        },
        {
          "id": 4,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-3.gif",
          "altText": "2D ANIMATED",
          "title": "Animated",
          "description": "2D Models"
        },
        {
          "id": 5,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-2.gif",
          "altText": "2D ANIMATED",
          "title": "Animated",
          "description": "2D Models"
        },
        {
          "id": 6,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-2d-full-body-model-portfolio-1.gif",
          "altText": "2D ANIMATED",
          "title": "Animated",
          "description": "2D Models"
        },
        {
          "id": 7,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-3d-full-body-model-portfolio-3.jpg",
          "altText": "static 3d full body model",
          "title": "Static",
          "description": "3D Models"
        },
        {
          "id": 8,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-3d-full-body-model-portfolio-2.jpg",
          "altText": "static 3d full body model",
          "title": "Static",
          "description": "3D Models"
        },
        {
          "id": 9,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-3d-full-body-model-portfolio-1.jpg",
          "altText": "static 3d full body model",
          "title": "Static",
          "description": "3D Models"
        },
        {
          "id": 10,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-3d-full-body-model-portfolio-3.gif",
          "altText": "3D ANIMATED",
          "title": "Animated",
          "description": "3D Models"
        },
        {
          "id": 11,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-3d-full-body-model-portfolio-2.gif",
          "altText": "3D ANIMATED",
          "title": "Animated",
          "description": "3D Models"
        },
        {
          "id": 12,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/animated-3d-full-body-model-portfolio-1.gif",
          "altText": "3D ANIMATED",
          "title": "Animated",
          "description": "3D Models"
        }
      ]
    };
    this.filteredCardList = this.portfolioModel.showCaseCardList;
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Models') {
      debugger
      this.filteredCardList = this.portfolioModel?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioModel?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.description === option
        );
    }
  }
}
