import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../../shared/components/common/header/header.component';
import { BannerSectionComponent } from '../../shared/components/home-components/banner-section/banner-section.component';
import { StreamerStationSectionComponent } from '../../shared/components/home-components/streamer-station-section/streamer-station-section.component';
import { WhatWeCanDoForYouSectionComponent } from '../../shared/components/home-components/what-we-can-do-for-you-section/what-we-can-do-for-you-section.component';
import { AcquireSectionComponent } from '../../shared/components/home-components/acquire-section/acquire-section.component';
import { CounterCardSectionComponent } from '../../shared/components/home-components/counter-card-section/counter-card-section.component';
import { ExpertsSectionComponent } from '../../shared/components/home-components/experts-section/experts-section.component';
import { ShopNowSectionComponent } from '../../shared/components/home-components/shop-now-section/shop-now-section.component';
import { BlogHubSectionComponent } from '../../shared/components/home-components/blog-hub-section/blog-hub-section.component';
import { SocialSectionComponent } from '../../shared/components/home-components/social-section/social-section.component';
import { BuildStreamSectionComponent } from '../../shared/components/home-components/build-stream-section/build-stream-section.component';
import { FooterSectionComponent } from '../../shared/components/common/footer-section/footer-section.component';
import { FooterBannerComponent } from "../../shared/components/common/footer-banner/footer-banner.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WhatWeCanDoForYouSectionComponent,
    StreamerStationSectionComponent,
    CounterCardSectionComponent,
    BuildStreamSectionComponent,
    AcquireSectionComponent,
    ExpertsSectionComponent,
    ShopNowSectionComponent,
    BlogHubSectionComponent,
    SocialSectionComponent,
    FooterSectionComponent,
    BannerSectionComponent,
    FooterBannerComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
