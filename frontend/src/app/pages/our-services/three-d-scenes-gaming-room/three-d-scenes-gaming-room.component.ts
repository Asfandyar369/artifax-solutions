import { Component } from '@angular/core';
import { UpgradeStreamsComponent } from "../../../shared/components/our-services-components/gaming-room/upgrade-streams/upgrade-streams.component";
import { LevelUpStreamsComponent } from "../../../shared/components/our-services-components/gaming-room/level-up-streams/level-up-streams.component";
import { Portfolio3DScenesComponent } from "../../../shared/components/portfolio-components/portfolio-3-d-scenes/portfolio-3-d-scenes.component";
import { HeaderBannerComponent } from "../../../shared/components/common/header-banner/header-banner.component";
import { FooterBannerComponent } from "../../../shared/components/common/footer-banner/footer-banner.component";
import { CarouselWithTextComponent } from "../../../shared/components/common/carousel-with-text/carousel-with-text.component";

@Component({
  selector: 'app-three-d-scenes-gaming-room',
  standalone: true,
  imports: [UpgradeStreamsComponent, LevelUpStreamsComponent, Portfolio3DScenesComponent, HeaderBannerComponent, FooterBannerComponent, CarouselWithTextComponent],
  templateUrl: './three-d-scenes-gaming-room.component.html',
  styleUrl: './three-d-scenes-gaming-room.component.css'
})
export class ThreeDScenesGamingRoomComponent {

}
