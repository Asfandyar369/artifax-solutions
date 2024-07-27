import { Component } from '@angular/core';
import { FilterByPriceComponent } from "./filter-by-price/filter-by-price.component";
import { SearchSectionComponent } from "./search-section/search-section.component";
import { SocialSectionComponent } from "../../shop-components/main-section/social-section/social-section.component";
import { ProductsRatingComponent } from './products-rating/products-rating.component';
import { CardsSectionComponent } from "./cards-section/cards-section.component";

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [FilterByPriceComponent, SearchSectionComponent, SocialSectionComponent, ProductsRatingComponent, CardsSectionComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

}
