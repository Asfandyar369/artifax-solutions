import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../components/common-components/header-banner/header-banner.component";
import { CarouselWithTextComponent } from "../../../components/common-components/carousel-with-text/carousel-with-text.component";
import { PricingPlanComponent } from "../../../components/our-services-components/pricing-plan/pricing-plan.component";
import { RewardingCoverComponent } from "../../../components/our-services-components/graphics-design/rewarding-cover/rewarding-cover.component";
import { FooterBannerComponent } from "../../../components/common-components/footer-banner/footer-banner.component";

@Component({
  selector: 'app-streaming-graphics-design',
  standalone: true,
  imports: [HeaderBannerComponent, CarouselWithTextComponent, PricingPlanComponent, RewardingCoverComponent, FooterBannerComponent],
  templateUrl: './streaming-graphics-design.component.html',
  styleUrl: './streaming-graphics-design.component.css'
})
export class StreamingGraphicsDesignComponent {

}
