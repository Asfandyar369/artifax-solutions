import { Component } from '@angular/core';
import { OurServicesHeaderBannerComponent } from "../../components/our-services-components/our-services-header-banner/our-services-header-banner.component";
import { CustomizedDesignServicesComponent } from "../../components/our-services-components/customized-design-services/customized-design-services.component";
import { WhatWeCanDoForYouSectionComponent } from "../../components/home-components/what-we-can-do-for-you-section/what-we-can-do-for-you-section.component";
import { PricingPlanComponent } from "../../components/our-services-components/pricing-plan/pricing-plan.component";
import { CustomizedDesignBannerComponent } from "../../components/our-services-components/customized-design-banner/customized-design-banner.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [OurServicesHeaderBannerComponent, CustomizedDesignServicesComponent, WhatWeCanDoForYouSectionComponent, PricingPlanComponent, CustomizedDesignBannerComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

}
