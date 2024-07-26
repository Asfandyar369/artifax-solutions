import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../../interface/PortfolioShowcase';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-room-header-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './room-header-banner.component.html',
  styleUrl: './room-header-banner.component.css'
})
export class RoomHeaderBannerComponent implements OnInit {
  roomHeader: PortfolioShowcase | undefined | null;
  constructor() { }
  ngOnInit(): void {
    this.getBanner();
  }
  private getBanner(): void {
    this.roomHeader = {
      "id": 1,
      "title": "3D Scenes & Gaming Room",
      "altText": "Gaming Room Banner",
      "imageUrl": "https://streamerstation.com/wp-content/uploads/2024/02/home-3d-scenes-gaming-room-banner.jpg"
    }
  }
}
