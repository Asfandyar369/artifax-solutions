import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcquireSection } from '../../../../interface/AcquireSection';

@Component({
  selector: 'app-acquire-section',
  standalone: true,
  imports: [NgbModule, NgFor, RouterModule, NgIf],
  templateUrl: './acquire-section.component.html',
  styleUrl: './acquire-section.component.css'
})
export class AcquireSectionComponent implements OnInit {
  acquireSection: AcquireSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getAcquireSection();
  }
  private getAcquireSection(): void {
    this.acquireSection = {
      "id": 1,
      "title": "The Power of Streaming Design",
      "subTitle": "Hey! Acquire",
      "description": "In the fast-paced world of livestream, design plays a pivotal role in shaping the viewer experience and setting your stream apart from the rest. With a keen focus on creativity and innovation, Streamer Station offers a range of design solutions tailored to enhance your stream.",
      "carouselSlides": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-6.jpg",
          "altText": "Static PFP Angry Dinosaur stand in front of sunset"
        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-4.jpg",
          "altText": "Static pfp A guy transform a ghost with dark scary background"
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-5.jpg",
          "altText": "Static pfp A guy with glasses reading a book in library"
        }
      ],
      "usefulLinks": [
        {
          "id": 1,
          "linkText": "Keeping pace with the evolving trends of streaming.",
          "url": "/"
        },
        {
          "id": 2,
          "linkText": "Creativity as the foundation of innovation and transformative ideas.",
          "url": "/"
        },
        {
          "id": 3,
          "linkText": "Tailored solutions for your unique needs in stream.",
          "url": "/"
        }
      ],
      "callToActions": [
        {
          "id": 1,
          "buttonText": "See How it works",
          "buttonUrl": "/our-services"
        }
      ]
    };
  }
}
