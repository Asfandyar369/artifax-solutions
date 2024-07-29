import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../components/common-components/header-banner/header-banner.component";
import { UltimateDestinationComponent } from "../../components/about-components/ultimate-destination/ultimate-destination.component";
import { WhatWeCanDoForYouSectionComponent } from "../../components/home-components/what-we-can-do-for-you-section/what-we-can-do-for-you-section.component";
import { UpgradeStreamsComponent } from "../../components/our-services-components/gaming-room/upgrade-streams/upgrade-streams.component";
import { CounterCardSectionComponent } from "../../components/home-components/counter-card-section/counter-card-section.component";
import { ExpertsSectionComponent } from "../../components/home-components/experts-section/experts-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderBannerComponent, UltimateDestinationComponent, WhatWeCanDoForYouSectionComponent, UpgradeStreamsComponent, CounterCardSectionComponent, ExpertsSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
