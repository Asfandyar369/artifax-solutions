import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { RouterModule } from '@angular/router';
import { ButtonList } from '../../../../interface/Footer';

@Component({
  selector: 'app-portfolio-3-d-scenes',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterModule],
  templateUrl: './portfolio-3-d-scenes.component.html',
  styleUrls: ['./portfolio-3-d-scenes.component.css'],
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
export class Portfolio3DScenesComponent implements OnInit {
  portfolio3DScene: PortfolioShowcase | undefined | null;

  @Input() subTitle: string | undefined | null;
  @Input() title: string | undefined | null;
  @Input() view: ButtonList | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getPortfolio3DScene();
  }

  private getPortfolio3DScene(): void {
    this.portfolio3DScene = {
      id: 1,
      subTitle: this.subTitle || "3D Scenes",
      title: this.title || "Transport your viewers to immersive virtual worlds with lifelike 3D scenes.",
      description: "Discover unique and stylish 3d scenes frames tailored to your taste.",
      showCaseCardList: [
        {
          id: 1,
          imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-scenes-portfolio-3.gif",
          altText: "3D ANIMATED SCENES",
          title: "Scenes",
          description: "3D"
        },
        {
          id: 2,
          imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-scenes-portfolio-2.gif",
          altText: "3D ANIMATED SCENES",
          title: "Scenes",
          description: "3D"
        },
        {
          id: 3,
          imageUrl: "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/animated-3d-scenes-portfolio-1.gif",
          altText: "3D ANIMATED SCENES",
          title: "Scenes",
          description: "3D"
        }
      ]
    };
  }
}
