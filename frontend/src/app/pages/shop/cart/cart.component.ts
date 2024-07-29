import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../components/common-components/header-banner/header-banner.component";
import { MainSectionComponent } from "../../../components/shop-components/cart/main-section/main-section.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderBannerComponent, MainSectionComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
