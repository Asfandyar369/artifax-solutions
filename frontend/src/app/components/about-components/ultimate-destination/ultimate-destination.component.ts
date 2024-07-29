import { Component, OnInit } from '@angular/core';
import { AcquireSection } from '../../../../interface/AcquireSection';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ultimate-destination',
  standalone: true,
  imports: [NgIf, NgFor, NgOptimizedImage, NgClass,],
  templateUrl: './ultimate-destination.component.html',
  styleUrl: './ultimate-destination.component.css'
})
export class UltimateDestinationComponent implements OnInit {
  data: AcquireSection | undefined | null;
  img: {
    url: string,
    altText: string,
  } = {
      url: '',
      altText: '',
    };
  activeButton: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getUltimateDestinationSection();
    if (this.data?.callToActions?.length) {
      this.activeButton = this.data.callToActions[0].id!;
    }
  }

  private getUltimateDestinationSection(): void {
    this.data = {
      id: 1,
      subTitle: "Ultimate Destination For Streamer",
      title: "Streamer Station",
      description: "Your go-to destination for all things streaming! We're passionate about helping streamers like you unleash your creativity and elevate your content to the next level.",
      callToActions: [
        {
          id: 1,
          buttonText: "Our History",
          buttonUrl: null,
          description: "Streamer Station was founded in 2020 by a team of passionate streamers and industry professionals who saw a need for high-quality services to help streamers and gamers succeed on platforms like Twitch."
        },
        {
          id: 2,
          buttonText: "Our Mission",
          buttonUrl: null,
          description: "Our mission is to empower streamers worldwide by providing them with innovative tools and services to enhance their streaming experience. We aim to be a trusted partner in their journey, offering top-quality solutions."
        },
        {
          id: 3,
          buttonText: "Our Vision",
          buttonUrl: null,
          description: "Our vision at Streamer Station is to create a world where every streamer's imagination takes flight, where creativity knows no limits, and where streaming becomes a platform for boundless expression and connection."
        },
        {
          id: 4,
          buttonText: "Support",
          buttonUrl: null,
          description: "We're committed to offering top-notch support as you build and grow your Twitch channel. Our experienced team is here to guide you every step of the way."
        },
      ],
      carouselSlides: [
        {
          id: 1,
          imageUrl: "https://streamerstation.com/wp-content/uploads/2024/02/static-pfp-about-1-768x768-1.jpg",
          altText: "static-pfp-about-1"
        }
      ]
    }
    this.img.url = this.data.carouselSlides![0].imageUrl!;
    this.img.altText = this.data.carouselSlides![0].altText!;
  }
}
