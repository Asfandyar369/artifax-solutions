import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../shared/components/common/header-banner/header-banner.component";
import { CustomerFeedbacksComponent } from "../../../shared/components/about-components/customers-components/customer-feedbacks/customer-feedbacks.component";
import { GoogleRatingsComponent } from "../../../shared/components/about-components/customers-components/google-ratings/google-ratings.component";
import { TrustSectionComponent } from "../../../shared/components/about-components/customers-components/trust-section/trust-section.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HeaderBannerComponent, CustomerFeedbacksComponent, GoogleRatingsComponent, TrustSectionComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

}
