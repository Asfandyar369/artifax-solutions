import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../components/common-components/header-banner/header-banner.component";
import { CustomerFeedbacksComponent } from "../../../components/about-components/customers-components/customer-feedbacks/customer-feedbacks.component";
import { GoogleRatingsComponent } from "../../../components/about-components/customers-components/google-ratings/google-ratings.component";
import { TrustSectionComponent } from "../../../components/about-components/customers-components/trust-section/trust-section.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HeaderBannerComponent, CustomerFeedbacksComponent, GoogleRatingsComponent, TrustSectionComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

}
