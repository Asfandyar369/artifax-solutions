import { Component } from '@angular/core';
import { RoomHeaderBannerComponent } from "../../../components/our-services-components/gaming-room/room-header-banner/room-header-banner.component";
import { AnimatedRealmsComponent } from "../../../components/our-services-components/gaming-room/animated-realms/animated-realms.component";
import { UpgradeStreamsComponent } from "../../../components/our-services-components/gaming-room/upgrade-streams/upgrade-streams.component";
import { LevelUpStreamsComponent } from "../../../components/our-services-components/gaming-room/level-up-streams/level-up-streams.component";
import { Portfolio3DScenesComponent } from "../../../components/portfolio-components/portfolio-3-d-scenes/portfolio-3-d-scenes.component";
import { StreamingCreativitySectionComponent } from "../../../components/home-components/streaming-creativity-section/streaming-creativity-section.component";

@Component({
  selector: 'app-three-d-scenes-gaming-room',
  standalone: true,
  imports: [RoomHeaderBannerComponent, AnimatedRealmsComponent, UpgradeStreamsComponent, LevelUpStreamsComponent, Portfolio3DScenesComponent, StreamingCreativitySectionComponent],
  templateUrl: './three-d-scenes-gaming-room.component.html',
  styleUrl: './three-d-scenes-gaming-room.component.css'
})
export class ThreeDScenesGamingRoomComponent {

}
