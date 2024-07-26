import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuildStreamSection } from '../../../../interface/BuildStreamSection';


@Component({
  selector: 'app-build-stream-section',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './build-stream-section.component.html',
  styleUrl: './build-stream-section.component.css'
})
export class BuildStreamSectionComponent implements OnInit {
  buildStreamSection: BuildStreamSection | undefined | null;

  constructor() { }

  ngOnInit(): void {
    this.getBuildStreamSection();
  }

  private getBuildStreamSection(): void {
    this.buildStreamSection = {
      "id": 1,
      "heading": "Enough Talk, Let's Build Your Stream Together!",
      "buttonText": "Shop Now",
      "buttonLink": "/shop"
    };
  }
}
