import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../shared/components/common/header-banner/header-banner.component";
import { QuestionsComponent } from "../../../shared/components/shop-components/checkout/questions/questions.component";
import { BillingDetailsComponent } from "../../../shared/components/shop-components/checkout/billing-details/billing-details.component";
import { AdditionalInformationComponent } from "../../../shared/components/shop-components/checkout/additional-information/additional-information.component";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HeaderBannerComponent, QuestionsComponent, BillingDetailsComponent, AdditionalInformationComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
