import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StreamerSection } from '../../../../../interface/StreamerSection';
import { RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-upgrade-streams',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, NgClass],
  templateUrl: './upgrade-streams.component.html',
  styleUrls: ['./upgrade-streams.component.css'],
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
export class UpgradeStreamsComponent implements OnInit {
  upgradeStreams: StreamerSection | undefined | null;
  textVisible: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getUpgradeStreams();
  }

  private getUpgradeStreams(): void {
    this.upgradeStreams = {
      "id": 1,
      "title": "3D Animated Scenes",
      "subTitle": "Upgrade Your Streams With",
      "description": "Embark on a journey through realms of creativity and immersion with our dimensional stream magic.",
      "videoUrl": "https://streamerstation.com/wp-content/uploads/2024/02/3D-Scene.webm",
      "buttonText": "Get It Now",
      "buttonLink": "/shop",
      "headings": [
        "Interactive storytelling",
        "✓ Technical edge",
      ],
      "texts": [
        "A narrative with 3D animations that turn your gaming streams into interactive tales.",
        "Gain a competitive advantage with high-quality 3D animations, showcasing advanced gaming tech.",
      ],
    };
    // Initialize textVisible with the same number of elements as headings
    this.textVisible = this.upgradeStreams?.headings!.map(() => false) || [];
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
