import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trust-section',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, NgOptimizedImage],
  templateUrl: './trust-section.component.html',
  styleUrl: './trust-section.component.css'
})
export class TrustSectionComponent implements OnInit {
  images: { url: string, altText: string }[] = []
  constructor() { }
  ngOnInit(): void {
    this.getTrustSection();
  }
  private getTrustSection(): void {
    this.images = [
      {
        url: 'https://streamerstation.com/wp-content/uploads/2023/10/Testimonial-banner-Template-Briana-Mcflarren.jpg',
        altText: 'Testimonial-banner-Template-Briana-Mcflarren.jpg'
      },
      {
        url: 'https://streamerstation.com/wp-content/uploads/2023/10/Wither-banner.png',
        altText: 'Wither-banner.png'
      },
      {
        url: 'https://streamerstation.com/wp-content/uploads/2024/02/Scorpio-Dylan-Testimonial-Banner.jpg',
        altText: 'Scorpio Dylan Testimonial Banner'
      },
      {
        url: 'https://streamerstation.com/wp-content/uploads/2024/02/Cool-Buddy-Testimonial-Banner.jpg',
        altText: 'Cool Buddy Testimonial Banner'
      },
      {
        url: 'https://streamerstation.com/wp-content/uploads/2023/10/saltypence-banner.png',
        altText: 'saltypence-banner.png'
      },
      {
        url: 'https://streamerstation.com/wp-content/uploads/2023/10/AstriaStream-banner.png',
        altText: 'AstriaStream-banner.png'
      },
    ]
  }
}
