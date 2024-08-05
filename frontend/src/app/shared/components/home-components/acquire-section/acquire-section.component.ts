import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AcquireSection } from '../../../../models/AcquireSection';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-acquire-section',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, RouterLink, NgIf, LazyLoadImageModule, NgClass],
  templateUrl: './acquire-section.component.html',
  styleUrl: './acquire-section.component.css'
})
export class AcquireSectionComponent implements OnInit {
  acquireSection: AcquireSection | undefined | null;
  activeLink: string | null = null;

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
          "imageUrl": "images/static-pfp-home-4.jpg",
          "altText": "Static PFP Angry Dinosaur stand in front of sunset",
          placeholder: "images/static-pfp-home-default-4.jpg"
        },
        {
          "id": 2,
          "imageUrl": "images/static-pfp-home-5.jpg",
          "altText": "Static pfp A guy transform a ghost with dark scary background",
          placeholder: "images/static-pfp-home-default-5.jpg"
        },
        {
          "id": 3,
          "imageUrl": "images/static-pfp-home-6.jpg",
          "altText": "Static pfp A guy with glasses reading a book in library",
          placeholder: "images/static-pfp-home-default-6.jpg"
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

  public setActiveLink(linkText: string): void {
    this.activeLink = linkText;
  }

}
