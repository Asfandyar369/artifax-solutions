import { Component, OnInit } from '@angular/core';
import { StreamingCreativitySection } from '../../../../interface/StreamingCreativitySection';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customized-design-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './customized-design-banner.component.html',
  styleUrl: './customized-design-banner.component.css'
})
export class CustomizedDesignBannerComponent implements OnInit {
  designBanner: StreamingCreativitySection | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getDesignBanner();
  }
  private getDesignBanner(): void {
    this.designBanner = {
      "id": 1,
      "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/services-cta-banner.jpg",
      "mainTitle": "Get Your Customized Design Services Now!",
      "subtitle": "We are here to boost your creativity and take your streams to new heights with our unique design services.",
      "buttonText": "Contact Us",
      "buttonLink": "/contact"
    };
  }
}
