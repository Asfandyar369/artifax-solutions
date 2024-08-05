import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../shared/components/common/header-banner/header-banner.component";
import { CarouselWithTextComponent } from "../../../shared/components/common/carousel-with-text/carousel-with-text.component";
import { PricingPlanComponent } from "../../../shared/components/our-services-components/pricing-plan/pricing-plan.component";
import { RewardingCoverComponent } from "../../../shared/components/our-services-components/graphics-design/rewarding-cover/rewarding-cover.component";
import { FooterBannerComponent } from "../../../shared/components/common/footer-banner/footer-banner.component";

@Component({
  selector: 'app-streaming-graphics-design',
  standalone: true,
  imports: [HeaderBannerComponent, CarouselWithTextComponent, PricingPlanComponent, RewardingCoverComponent, FooterBannerComponent],
  templateUrl: './streaming-graphics-design.component.html',
  styleUrl: './streaming-graphics-design.component.css'
})
export class StreamingGraphicsDesignComponent {

}
