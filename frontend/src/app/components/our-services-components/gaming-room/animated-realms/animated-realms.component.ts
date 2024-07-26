// animated-realms.component.ts
import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { StreamerSection } from '../../../../../interface/StreamerSection';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animated-realms',
  standalone: true,
  imports: [NgIf, NgbModule, NgFor, RouterModule, NgClass],
  templateUrl: './animated-realms.component.html',
  styleUrls: ['./animated-realms.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      // State for when the element is hidden
      state('collapsed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden',
      })),
      // State for when the element is visible
      state('expanded', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden',
      })),
      // Transition from collapsed to expanded with animation
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out'),
      ])
    ])
  ]
})
export class AnimatedRealmsComponent implements OnInit {
  animatedRealms: StreamerSection | undefined | null;
  textVisible: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAnimatedRealms();
  }

  private getAnimatedRealms(): void {
    this.animatedRealms = {
      "id": 1,
      "title": "Bring Your Visions to Life",
      "subTitle": "Dive Into 3D Animated Realms",
      "description": "Step into the realm of captivating streams with Streamer Station's dynamic 3D animations. We're all about making your channel stand out from the crowd.",
      "carouselImages": [
        "https://streamerstation.com/wp-content/uploads/2024/02/static-3d-room-3.jpg",
        "https://streamerstation.com/wp-content/uploads/2024/02/static-3d-room-2.jpg",
        "https://streamerstation.com/wp-content/uploads/2024/02/static-3d-room-1.jpg",
      ],
      "buttonText": "Get It Now",
      "buttonLink": "/shop",
      "headings": [
        "Increase Visibility",
        "Variety & Creativity",
        "Streaming Community",
        "Quality Stream"
      ],
      "texts": [
        "Customize your live streams with visually engaging Tailored streamer graphics.",
        "Maintain a diverse and creative content strategy for your live streaming.",
        "Build your community with visually strong graphics design.",
        "Increase your stream quality through professional and customized visual elements."
      ],
    };
    // Initialize textVisible with the same number of elements as headings
    this.textVisible = this.animatedRealms?.headings!.map(() => false) || [];
  }

  toggleTextVisibility(index: number): void {
    // Toggle the visibility state of the text at the given index
    this.textVisible[index] = !this.textVisible[index];
  }
}
