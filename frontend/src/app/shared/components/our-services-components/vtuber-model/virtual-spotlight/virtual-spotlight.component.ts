import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StreamerSection } from '../../../../../models/StreamerSection';

@Component({
  selector: 'app-virtual-spotlight',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './virtual-spotlight.component.html',
  styleUrl: './virtual-spotlight.component.css'
})
export class VirtualSpotlightComponent implements OnInit {
  vTuberspootlight: StreamerSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getVtuberSpotlight();
  }

  private getVtuberSpotlight() {
    this.vTuberspootlight = {
      "id": 1,
      "title": "The Virtual Spotlight",
      "subTitle": "Let's Step Into",
      "description": "We expertly create digital avatars that are especially designed as per your unique personality and creative ideas to make you shine online.",
      "videoUrl": [
        "https://streamerstation.com/wp-content/uploads/2024/02/2D-VTuber-Rigged-Model-1.webm",
        "https://streamerstation.com/wp-content/uploads/2024/02/2D-VTuber-Rigged-Model-2.webm"
      ],
    };
  }
}
