import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StreamerSection } from '../../../../interface/StreamerSection';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-streamer-station-section',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor, RouterLink, LazyLoadImageModule],
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
        {
          "id": 1,
          "imageUrl": "images/static-pfp-home-1.jpg",
          "altText": "Static pfp A guy transform a ghost with dark scary background",
          placeholder: "images/static-pfp-home-1-default.jpg"
        },
        {
          "id": 2,
          "imageUrl": "images/static-pfp-home-2.jpg",
          "altText": "Static pfp A guy with glasses reading a book in library",
          placeholder: "images/static-pfp-home-2-default.jpg"
        },
        {
          "id": 3,
          "imageUrl": "images/static-pfp-home-3.jpg",
          "altText": "Static PFP Angry Dinosaur stand in front of sunset",
          placeholder: "images/static-pfp-home-3-default.jpg"
        }
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
