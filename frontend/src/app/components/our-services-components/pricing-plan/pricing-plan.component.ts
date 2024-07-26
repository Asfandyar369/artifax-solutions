import { Component, OnInit } from '@angular/core';
import { Pricing } from '../../../../interface/Pricing';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pricing-plan',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './pricing-plan.component.html',
  styleUrl: './pricing-plan.component.css'
})
export class PricingPlanComponent implements OnInit {
  pricing: Pricing | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getPricing();
  }

  private getPricing() {
    this.pricing = {
      "id": 1,
      "subTitle": "Our Budget Plan",
      "title": "Pricing Plan",
      "description": "Choose a pricing plan that best suits your needs.",
      "cardList": [
        {
          "id": 1,
          "title": "Entry Level",
          "price": "300",
          "description": "Stream Pack Static",
          "pricingServiceList": [
            {
              "id": 1,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Overlay"
            },
            {
              "id": 2,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Starting Soon Screen"
            },
            {
              "id": 3,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Ending Soon Screen"
            },
            {
              "id": 4,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Offline Screen"
            },
            {
              "id": 5,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Intermission Screen"
            },
            {
              "id": 6,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Be Right Back Screen"
            },
            {
              "id": 7,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Chatbox"
            },
            {
              "id": 8,
              "icon": "bi bi-check-circle-fill",
              "benefit": "9 Panels"
            },
            {
              "id": 9,
              "icon": "bi bi-check-circle-fill",
              "benefit": "4 Alerts"
            }
          ],
          "buttonText": "Purchase Now",
          "buttonLink": "https://streamerstation.com/cart/?add-to-cart=3417"
        },
        {
          "id": 2,
          "title": "Progressing",
          "price": "400",
          "description": "Stream Pack Animated",
          "pricingServiceList": [
            {
              "id": 10,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Overlay Animated"
            },
            {
              "id": 11,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Starting Screen Animated"
            },
            {
              "id": 12,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Ending Screen Animated"
            },
            {
              "id": 13,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Offline Screen Animated"
            },
            {
              "id": 14,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Intermission Screen Animated"
            },
            {
              "id": 15,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 BRB Screen Animated"
            },
            {
              "id": 16,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Chatbox Animated"
            },
            {
              "id": 17,
              "icon": "bi bi-check-circle-fill",
              "benefit": "9 Panels"
            },
            {
              "id": 18,
              "icon": "bi bi-check-circle-fill",
              "benefit": "4 Alerts Animated"
            }
          ],
          "buttonText": "Purchase Now",
          "buttonLink": "https://streamerstation.com/cart/?add-to-cart=3424"
        },
        {
          "id": 3,
          "title": "Elite",
          "price": "500",
          "description": "Stream Pack Animated with Music",
          "pricingServiceList": [
            {
              "id": 19,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Overlay Animated + Music"
            },
            {
              "id": 20,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Starting Screen Animated + Music"
            },
            {
              "id": 21,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Ending Screen Animated + Music"
            },
            {
              "id": 22,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Offline Screen Animated + Music"
            },
            {
              "id": 23,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Intermission Screen Animated + Music"
            },
            {
              "id": 24,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 BRB Screen Animated + Music"
            },
            {
              "id": 25,
              "icon": "bi bi-check-circle-fill",
              "benefit": "1 Chatbox Animated"
            },
            {
              "id": 26,
              "icon": "bi bi-check-circle-fill",
              "benefit": "9 Panels"
            },
            {
              "id": 27,
              "icon": "bi bi-check-circle-fill",
              "benefit": "4 Alerts Animated + Music"
            }
          ],
          "buttonText": "Purchase Now",
          "buttonLink": "https://streamerstation.com/cart/?add-to-cart=3425"
        }
      ]
    };
  }
}
