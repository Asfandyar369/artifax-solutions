import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StreamerSection } from '../../../../../interface/StreamerSection';

@Component({
  selector: 'app-level-up-streams',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, NgClass],
  templateUrl: './level-up-streams.component.html',
  styleUrl: './level-up-streams.component.css',
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
export class LevelUpStreamsComponent {
  levelUpStream: StreamerSection | undefined | null;
  textVisible: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getLevelUpStreams();
  }

  private getLevelUpStreams(): void {
    this.levelUpStream = {
      "id": 1,
      "title": "3D Animated Gaming Room",
      "subTitle": "Level Up Your Streams With",
      "description": "Step into a new dimension of gaming with our 3D gaming room, where pixels are portal to adventure.",
      "videoUrl": "https://streamerstation.com/wp-content/uploads/2024/02/3D-Room.webm",
      "buttonText": "Get It Now",
      "buttonLink": "/shop",
      "headings": [
        "✓ Realistic experience",
        "✓ Unique content",
      ],
      "texts": [
        "3D gaming rooms offer an ultra-realistic gaming experience that keeps players deeply engrossed.",
        "Allowing you to create unique content that stands out in the crowded streaming landscape.",
      ],
    };
    // Initialize textVisible with the same number of elements as headings
    this.textVisible = this.levelUpStream?.headings!.map(() => false) || [];
    this.toggleTextVisibility(0); // Open the first heading by default
  }

  toggleTextVisibility(index: number): void {
    // Toggle the current index and ensure at least one is open
    this.textVisible = this.textVisible.map((visible, i) => i === index ? !visible : false);
    // If all are closed, open the current one
    if (!this.textVisible.includes(true)) {
      index = index === 0 ? 1 : 0;
      this.textVisible[index] = true;
    }
  }
}
