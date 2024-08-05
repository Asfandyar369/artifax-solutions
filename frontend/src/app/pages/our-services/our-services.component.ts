import { Component } from '@angular/core';
import { CustomizedDesignServicesComponent } from "../../shared/components/our-services-components/customized-design-services/customized-design-services.component";
import { WhatWeCanDoForYouSectionComponent } from "../../shared/components/home-components/what-we-can-do-for-you-section/what-we-can-do-for-you-section.component";
import { PricingPlanComponent } from "../../shared/components/our-services-components/pricing-plan/pricing-plan.component";
import { HeaderBannerComponent } from "../../shared/components/common/header-banner/header-banner.component";
import { FooterBannerComponent } from "../../shared/components/common/footer-banner/footer-banner.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CustomizedDesignServicesComponent, WhatWeCanDoForYouSectionComponent, PricingPlanComponent, HeaderBannerComponent, FooterBannerComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

}
