import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { StreamerSection } from '../../../../../models/StreamerSection';
import { RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { DynamicSelection } from '../../../../../models/DynamicSelection';

@Component({
  selector: 'app-upgrade-streams',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, NgClass, NgOptimizedImage],
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
  @Input() checkComponent: DynamicSelection | undefined | null;
  image: string = '';
  constructor() { }

  ngOnInit(): void {
    this.getUpgradeStreams();
  }

  private getUpgradeStreams(): void {
    if (this.checkComponent?.gamingRoom) {
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
    } else if (this.checkComponent?.about) {
      this.upgradeStreams = {
        "id": 1,
        "title": "About Streamer Station",
        "subTitle": "Get To Know",
        "description": "We're a team of passionate individuals dedicated to helping streamers succeed. Our goal is to provide you with the tools and support you need to thrive in the world of streaming.",
        "carouselImages": [
          {
            "id": 1,
            "altText": "Streamer Station About Us Banner",
            "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-about-2-1024x1024.jpg",
          }
        ],
        "buttonText": null,
        "buttonLink": null,
        "headings": [
          "How we work?",
          "Why choose us?",
        ],
        "texts": [
          "With our skills and expertise, we're able to deliver top-quality results and provide ongoing support and guidance to keep our clients on track and growing. Let us help you turn your passion for streaming into a thriving experience.",
          "We understand the unique challenges of building a successful streaming experience. We take the time to get to know our clients and understand their needs, so we can create a customized solution that works for them.",
        ],
      };
      this.image = this.upgradeStreams.carouselImages![0].imageUrl!;
    }
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
