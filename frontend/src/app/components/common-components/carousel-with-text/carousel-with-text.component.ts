import { Component, Input, OnInit } from '@angular/core';
import { CarouselWithText } from '../../../../interface/CarouselWithText';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DynamicSelection } from '../../../../interface/DynamicSelection';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel-with-text',
  standalone: true,
  imports: [NgIf, NgbModule, NgFor, RouterModule, NgClass],
  templateUrl: './carousel-with-text.component.html',
  styleUrl: './carousel-with-text.component.css',
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
export class CarouselWithTextComponent implements OnInit {
  @Input() carousel: DynamicSelection | undefined | null;
  data: CarouselWithText | undefined | null;
  textVisible: boolean[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    if (this.carousel?.gamingRoom) {
      this.data = {
        "title": "Bring Your Visions to Life",
        "subTitle": "Dive Into 3D Animated Realms",
        "description": "Step into the realm of captivating streams with Streamer Station's dynamic 3D animations. We're all about making your channel stand out from the crowd.",
        "carouselImages": [
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-3d-room-2.jpg",
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-3d-room-2.jpg",
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-3d-room-1.jpg",
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
      this.textVisible = this.data?.headings!.map(() => false) || [];
    } else if (this.carousel?.graphicDesign) {
      this.data = {
        "title": "Why Stream Graphic Designing Matters",
        "subTitle": "Enhance Your Channel With Stream Designing",
        "description": "In the streaming realm, design is key. It's not just about aesthetics; it's about standing out, fostering engagement, and building credibility. Discover how top-notch stream design from Streamer Station can amplify your streaming experience.",
        "carouselImages": [
          "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-streaming-graphics-design-1.jpg",
          "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-streaming-graphics-design-2.jpg",
          "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-streaming-graphics-design-3.jpg",
        ],
        "buttonText": "See How It Works",
        "buttonLink": "/shop",
        "headings": [
          "✓ Attract new viewers",
          "✓ Retain existing viewers",
          "✓ Establish a professional image",
          "✓ Reflect your unique personality",
        ],
        "texts": [
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
        ],
      };
      // Initialize textVisible with the same number of elements as headings
      this.textVisible = this.data?.headings!.map(() => false) || [];
    } else if (this.carousel?.vtuberModel) {
      this.data = {
        "title": "Virtual Creativity With VTuber Models",
        "subTitle": "Create Your Own VTuber Models",
        "description": "Unleash your inner virtual superstar with our custom VTuber model! Helping you stand out in the crowded world of streaming and make your stream unforgettable with a visually striking and unique VTuber model.",
        "carouselImages": [
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-half-body-2d-vtuber-3.jpg",
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-half-body-2d-vtuber-2.jpg",
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-half-body-2d-vtuber-1.jpg",
        ],
        "buttonText": "Get It Now",
        "buttonLink": "/shop",
        "headings": [
          "✓ Engage and retain viewers",
          "✓ Attract new viewers",
          "✓ Reflect your unique personality",
          "✓ Enhance aesthetic of your stream",
        ],
        "texts": [
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
          "Visually appealing graphics and logos can help draw in new viewers and make your stream stand out.",
        ],
      };
      // Initialize textVisible with the same number of elements as headings
      this.textVisible = this.data?.headings!.map(() => false) || [];
    }
  }
  public toggleTextVisibility(index: number): void {
    // Toggle the current index and ensure at least one is open
    this.textVisible[index] = !this.textVisible[index];
  }
}
