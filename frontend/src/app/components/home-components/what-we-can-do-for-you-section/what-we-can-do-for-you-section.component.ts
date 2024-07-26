import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { StreamerFeatureSection } from '../../../../interface/StreamerFeatureSection';

@Component({
  selector: 'app-what-we-can-do-for-you-section',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './what-we-can-do-for-you-section.component.html',
  styleUrl: './what-we-can-do-for-you-section.component.css'
})
export class WhatWeCanDoForYouSectionComponent implements OnInit {
  streamerFeature: StreamerFeatureSection | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getStreamerFeature();
  }
  private getStreamerFeature(): void {
    this.streamerFeature = {
      "id": 1,
      "sectionSubtitle": "What We Can Do For You?",
      "sectionTitle": "Welcome to Streamer Station",
      "sectionDescription": "Your one-stop shop for all streamers needs.",
      "cards": [
        {
          "icon": "bi-git",
          "title": "3D Scenes & Gaming Room",
          "description": "Turn your streams into visual realistic animations with immersive 3D scenes and gaming rooms."
        },
        {
          "icon": "bi-github",
          "title": "Streaming Graphics Design",
          "description": "Make your stream visually appealing with expertly designed custom graphics for your stream."
        },
        {
          "icon": "bi-gitlab",
          "title": "VTuber Models",
          "description": "Take your stream to the next level with a custom VTuber model that represents your unique personality and brand."
        }
      ]
    };
  }
}
