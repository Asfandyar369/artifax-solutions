import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpertSection } from '../../../../interface/ExpertSection';

@Component({
  selector: 'app-experts-section',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor, NgOptimizedImage],
  templateUrl: './experts-section.component.html',
  styleUrl: './experts-section.component.css'
})
export class ExpertsSectionComponent implements OnInit {
  expertsSection: ExpertSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getExpertSection();
  }

  getExpertSection(): void {
    this.expertsSection = {
      "id": 1,
      "carouselImages": [
        "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-7.jpg",
        "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-9.jpg",
        "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-8.jpg"
      ],
      "subtitle": "We Are",
      "title": "Experts!",
      "description": "We specialize in crafting Professional graphic designs that make your stream stand out. Let our expertise bring your vision to life!",
      "progressData": [
        {
          "id": 1,
          "label": "Innovation",
          "percent": 99
        },
        {
          "id": 2,
          "label": "Customization",
          "percent": 95
        },
        {
          "id": 3,
          "label": "Versatility",
          "percent": 93
        },
        {
          "id": 4,
          "label": "Creativity",
          "percent": 99
        }
      ]
    };
  }
}
