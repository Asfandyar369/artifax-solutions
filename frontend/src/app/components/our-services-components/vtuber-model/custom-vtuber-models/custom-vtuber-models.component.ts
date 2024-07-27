import { Component, OnInit } from '@angular/core';
import { AcquireSection } from '../../../../../interface/AcquireSection';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-vtuber-models',
  standalone: true,
  imports: [NgbModule, NgFor, NgIf, RouterModule],
  templateUrl: './custom-vtuber-models.component.html',
  styleUrl: './custom-vtuber-models.component.css'
})
export class CustomVtuberModelsComponent implements OnInit {
  customVtuberModel: AcquireSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getRewardingCover();
  }
  private getRewardingCover(): void {
    this.customVtuberModel = {
      "id": 1,
      "subTitle": "Let's Make Your",
      "title": "Custom VTuber Models",
      "description": "2D & 3D-animated avatars that are designed to look and act like real human beings. They can be customized to resemble the creator or be designed to look like a completely original character.",
      "carouselSlides": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-half-body-3d-vtuber-1.jpg",
          "altText": "3d half body vtuber model with rigging"
        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-full-body-3d-vtuber-2.jpg",
          "altText": "3d Live full body model"
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-full-body-3d-vtuber-3.jpg",
          "altText": "3d Model"
        }
      ],
      "benefitList": [
        {
          "id": 1,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Character Rigging"
        },
        {
          "id": 2,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Character Model"
        },
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
