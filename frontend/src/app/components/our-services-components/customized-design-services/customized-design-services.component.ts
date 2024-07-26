import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcquireSection } from '../../../../interface/AcquireSection';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customized-design-services',
  standalone: true,
  imports: [NgbModule, NgFor, NgIf, RouterModule],
  templateUrl: './customized-design-services.component.html',
  styleUrl: './customized-design-services.component.css'
})
export class CustomizedDesignServicesComponent implements OnInit {
  customizedServices: AcquireSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getCustomizedDesignServices();
  }
  private getCustomizedDesignServices(): void {
    this.customizedServices = {
      "id": 1,
      "subTitle": "Customized Design Services",
      "title": "Your Streaming Partner In Creativity",
      "description": "We believe that every streamer deserves to have their moment in the spotlight. Let us be your partner in creativity which offers personalized design solutions, 3D scenes, and VTuber models, enhancing your streaming experience with our talented team.",
      "carouselSlides": [
        {
          "id": 1,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/draf-Order-839-killacroc-1-static-logo-1.jpg",
          "altText": "Static PFP"
        },
        {
          "id": 2,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/draf-Order-758-ElCid8417-Static-Avatar-Without-Bg-A-boy-looks-like-prince-holding-sword-1.jpg",
          "altText": "Static Avatar Without Bg A boy looks like prince holding sword"
        },
        {
          "id": 3,
          "imageUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/draf-Order-660-Static-PFP-Without-bg.jpg",
          "altText": "Static PFP"
        }
      ],
      "benefitList": [
        {
          "id": 1,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Professional Expertise"
        },
        {
          "id": 2,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Customized Design Services"
        },
        {
          "id": 3,
          "icon": "bi bi-check-circle-fill elementor-heading-title",
          "benefit": "Comprehensive Services"
        }
      ],
      "callToActions": [
        {
          "id": 1,
          "buttonText": "Get It Now",
          "buttonUrl": "/shop"
        }
      ]
    };
  }
}

