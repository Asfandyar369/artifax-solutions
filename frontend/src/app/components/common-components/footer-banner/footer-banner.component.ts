import { Component, Input, OnInit } from '@angular/core';
import { FooterBanner } from '../../../../interface/FooterBanner';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicSelection } from '../../../../interface/DynamicSelection';

@Component({
  selector: 'app-footer-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './footer-banner.component.html',
  styleUrl: './footer-banner.component.css'
})
export class FooterBannerComponent implements OnInit {
  footerBanner: FooterBanner | undefined | null;
  @Input() dynamicSelection: DynamicSelection | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getStreamingCreativitySection();
  }
  private getStreamingCreativitySection(): void {
    if (this.dynamicSelection?.home) {
      this.footerBanner = {
        "id": 1,
        "imageUrl": "images/home-3d-scenes-gaming-room-banner.jpg",
        "mainTitle": "Spark your streaming creativity",
        "subtitle": "Immerse your audience in a visual journey that not only entertains but leaves a lasting impression.",
        "buttonText": "Contact Us",
        "buttonLink": "/contact"
      };
    } else if (this.dynamicSelection?.services) {
      this.footerBanner = {
        "id": 1,
        "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/services-cta-banner.jpg",
        "mainTitle": "Get Your Customized Design Services Now!",
        "subtitle": "We are here to boost your creativity and take your streams to new heights with our unique design services.",
        "buttonText": "Contact Us",
        "buttonLink": "/contact"
      };
    } else if (this.dynamicSelection?.graphicDesign) {
      this.footerBanner = {
        "id": 1,
        "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/home-streaming-graphics-design-banner.jpg",
        "mainTitle": "Signature Stream Designing",
        "subtitle": "Our stream designing services are a canvas of possibilities, meticulously tailored to elevate your stream beyond the ordinary.",
        "buttonText": "Contact Us",
        "buttonLink": "/contact"
      };
    } else if (this.dynamicSelection?.vtuberModel) {
      this.footerBanner = {
        "id": 1,
        "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/home-vtuber-banner.jpg",
        "mainTitle": "Streamer Station's Crafted VTuber Models",
        "subtitle": "Embark on a digital journey where imagination meets virtual reality. At Streamer Station, our VTuber model service bring your unique personality to life in the digital realm.",
        "buttonText": "Contact Us",
        "buttonLink": "/contact"
      };
    }
  }
}

