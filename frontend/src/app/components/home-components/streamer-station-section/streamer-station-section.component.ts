import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StreamerSection } from '../../../../interface/StreamerSection';

@Component({
  selector: 'app-streamer-station-section',
  standalone: true,
  imports: [NgbModule, NgIf, NgFor, RouterModule],
  templateUrl: './streamer-station-section.component.html',
  styleUrl: './streamer-station-section.component.css'
})
export class StreamerStationSectionComponent implements OnInit {
  streamerSection: StreamerSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getStreamerSection();
  }

  private getStreamerSection(): void {
    this.streamerSection = {
      "id": 1,
      "carouselImages": [
        "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-1.jpg",
        "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-3.jpg",
        "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-2.jpg"
      ],
      "title": "The ultimate destination for streamers",
      "subTitle": "Streamer Station",
      "description": "Elevate your stream with our services.",
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
      "buttonText": "Contact Us Now",
      "buttonLink": "/about"
    };
  }
}
