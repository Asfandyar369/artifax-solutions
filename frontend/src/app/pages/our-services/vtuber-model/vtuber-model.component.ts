import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../components/common-components/header-banner/header-banner.component";
import { CarouselWithTextComponent } from "../../../components/common-components/carousel-with-text/carousel-with-text.component";
import { VirtualSpotlightComponent } from "../../../components/our-services-components/vtuber-model/virtual-spotlight/virtual-spotlight.component";
import { CustomVtuberModelsComponent } from "../../../components/our-services-components/vtuber-model/custom-vtuber-models/custom-vtuber-models.component";
import { FooterBannerComponent } from "../../../components/common-components/footer-banner/footer-banner.component";

@Component({
  selector: 'app-vtuber-model',
  standalone: true,
  imports: [HeaderBannerComponent, CarouselWithTextComponent, VirtualSpotlightComponent, CustomVtuberModelsComponent, FooterBannerComponent],
  templateUrl: './vtuber-model.component.html',
  styleUrl: './vtuber-model.component.css'
})
export class VtuberModelComponent {

}
