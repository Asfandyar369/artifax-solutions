import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';

@Component({
  selector: 'app-our-services-header-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './our-services-header-banner.component.html',
  styleUrl: './our-services-header-banner.component.css'
})
export class OurServicesHeaderBannerComponent implements OnInit {
  ourService: PortfolioShowcase | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getOurServiceBanner();
  }

  private getOurServiceBanner(): void {
    this.ourService = {
      "id": 1,
      "title": "Our Services",
      "altText": "Cyber Ninja banner",
      "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/services-header-banner.jpg"
    };
  }

}
