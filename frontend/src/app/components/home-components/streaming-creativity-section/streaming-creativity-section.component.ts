import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StreamingCreativitySection } from '../../../../interface/StreamingCreativitySection';


@Component({
  selector: 'app-streaming-creativity-section',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './streaming-creativity-section.component.html',
  styleUrl: './streaming-creativity-section.component.css'
})
export class StreamingCreativitySectionComponent implements OnInit {
  streamingCreativitySection: StreamingCreativitySection | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getStreamingCreativitySection();
  }
  private getStreamingCreativitySection(): void {
    this.streamingCreativitySection = {
      "id": 1,
      "imageUrl": "images/home-3d-scenes-gaming-room-banner.jpg",
      "mainTitle": "Spark your streaming creativity",
      "subtitle": "Immerse your audience in a visual journey that not only entertains but leaves a lasting impression.",
      "buttonText": "Contact Us",
      "buttonLink": "/contact"
    };
  }
}
