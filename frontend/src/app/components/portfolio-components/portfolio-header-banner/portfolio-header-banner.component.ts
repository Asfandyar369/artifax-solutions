import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';

@Component({
  selector: 'app-portfolio-header-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './portfolio-header-banner.component.html',
  styleUrl: './portfolio-header-banner.component.css'
})
export class PortfolioHeaderBannerComponent implements OnInit {
  portfolioBanner: PortfolioShowcase | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getPortfolioBanner();
  }

  private getPortfolioBanner(): void {
    this.portfolioBanner = {
      "id": 1,
      "title": "Our Portfolio",
      "altText": "Banner Image",
      "imageUrl": "/images/portfolio-header-banner.webp"
    };
  }
}
