import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BackgroundImage } from '../../../../interface/CounterCardsSection';

@Component({
  selector: 'app-counter-card-section',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './counter-card-section.component.html',
  styleUrl: './counter-card-section.component.css'
})
export class CounterCardSectionComponent implements OnInit {
  counterCardsSection: BackgroundImage | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getCounterCardsSection();
  }

  private getCounterCardsSection(): void {
    this.counterCardsSection = {
      "id": 1,
      "imageUrl": "images/homepage-banner.jpg",
      "altText": "800 × 450 px Car Image",
      "counterCards": [
        {
          "id": 1,
          "countValue": 800,
          "icon": "bi bi-people",
          "label": "Satisfied Streamers"
        },
        {
          "id": 2,
          "countValue": 400,
          "icon": "bi bi-clock",
          "label": "Days Of Operation"
        },
        {
          "id": 3,
          "countValue": 1200,
          "icon": "bi bi-check2-circle",
          "label": "Complete Project"
        },
        {
          "id": 4,
          "countValue": 15,
          "icon": "bi bi-award",
          "label": "Achievements"
        }
      ]
    };
  }
}
