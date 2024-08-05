import { Component } from '@angular/core';
import { FilterByPriceComponent } from "../../shared/components/shop-components/main-section/filter-by-price/filter-by-price.component";
import { MainSectionComponent } from "../../shared/components/shop-components/main-section/main-section.component";
import { HeaderBannerComponent } from "../../shared/components/common/header-banner/header-banner.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FilterByPriceComponent, MainSectionComponent, HeaderBannerComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
