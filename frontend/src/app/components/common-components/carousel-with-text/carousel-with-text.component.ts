import { Component, Input, OnInit } from '@angular/core';
import { DynamicCarouselWithText } from '../../../../interface/DynamicCarouselWithText';
import { CarouselWithText } from '../../../../interface/CarouselWithText';

@Component({
  selector: 'app-carousel-with-text',
  standalone: true,
  imports: [],
  templateUrl: './carousel-with-text.component.html',
  styleUrl: './carousel-with-text.component.css'
})
export class CarouselWithTextComponent implements OnInit {
  @Input() carousel: DynamicCarouselWithText | undefined | null;
  data: CarouselWithText | undefined | null;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    if (this.carousel?.home.streamerStation) {
      this.data = {
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
    } if (this.carousel?.home.acquireSection) {
      this.data = {
        "title": "The Power of Streaming Design",
        "subTitle": "Hey! Acquire",
        "description": "In the fast-paced world of livestream, design plays a pivotal role in shaping the viewer experience and setting your stream apart from the rest. With a keen focus on creativity and innovation, Streamer Station offers a range of design solutions tailored to enhance your stream.",
        "carouselImages": [
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-6.jpg",
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-4.jpg",
          "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/static-pfp-home-5.jpg",
        ],
        "usefulLinks": [
          {
            "id": 1,
            "linkText": "Keeping pace with the evolving trends of streaming.",
            "url": "/"
          },
          {
            "id": 2,
            "linkText": "Creativity as the foundation of innovation and transformative ideas.",
            "url": "/"
          },
          {
            "id": 3,
            "linkText": "Tailored solutions for your unique needs in stream.",
            "url": "/"
          }
        ],
        "buttonText": "See How it works",
        "buttonLink": "/our-services"
      };
    }
  }
}
