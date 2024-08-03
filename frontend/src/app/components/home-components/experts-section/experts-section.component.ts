import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpertSection } from '../../../../interface/ExpertSection';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-experts-section',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor, LazyLoadImageModule],
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
        {
          "id": 1,
          "imageUrl": "images/static-pfp-home-7.jpg",
          "altText": "Carousel Image",
          placeholder: "images/static-pfp-home-7-default.jpg"
        },
        {
          "id": 2,
          "imageUrl": "images/static-pfp-home-8.jpg",
          "altText": "Carousel Image",
          placeholder: "images/static-pfp-home-8-default.jpg"
        },
        {
          "id": 3,
          "imageUrl": "images/static-pfp-home-9.jpg",
          "altText": "Carousel Image",
          placeholder: "images/static-pfp-home-9-default.jpg"
        }
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
