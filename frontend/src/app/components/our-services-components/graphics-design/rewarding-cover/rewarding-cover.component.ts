import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcquireSection } from '../../../../../interface/AcquireSection';

@Component({
  selector: 'app-rewarding-cover',
  standalone: true,
  imports: [NgbModule, NgFor, NgIf, RouterModule],
  templateUrl: './rewarding-cover.component.html',
  styleUrl: './rewarding-cover.component.css'
})
export class RewardingCoverComponent implements OnInit{
  rewardingCover: AcquireSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getRewardingCover();
  }
  private getRewardingCover(): void {
    this.rewardingCover = {
      "id": 1,
      "subTitle": "Get Yourself a",
      "title": "Simpler, smarter and more rewarding cover",
      "description": "Our team of skilled designers can help you create.",
      "carouselSlides": [
        {
          "id": 1,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-streaming-graphics-design-1.jpg",
          "altText": "Static Stream Pack"
        },
        {
          "id": 2,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-streaming-graphics-design-2.jpg",
          "altText": "Static Stream Pack"
        },
        {
          "id": 3,
          "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-stream-pack-streaming-graphics-design-3.jpg",
          "altText": "Static Stream Pack"
        }
      ],
      "benefitList": [
        {
          "id": 1,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Stream Packs"
        },
        {
          "id": 2,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Overlay"
        },
        {
          "id": 3,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Emotes"
        },
        {
          "id": 4,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Panels"
        },
        {
          "id": 5,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Logos"
        },
        {
          "id": 6,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Banners"
        },
        {
          "id": 7,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Alerts"
        },
        {
          "id": 8,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Badges"
        }
      ],
      "callToActions": [
        {
          "id": 1,
          "buttonText": "View More",
          "buttonUrl": "/portfolio"
        }
      ]
    };
  }
}

