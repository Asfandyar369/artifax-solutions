import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../shared/components/common/header-banner/header-banner.component";
import { CarouselWithTextComponent } from "../../../shared/components/common/carousel-with-text/carousel-with-text.component";
import { VirtualSpotlightComponent } from "../../../shared/components/our-services-components/vtuber-model/virtual-spotlight/virtual-spotlight.component";
import { CustomVtuberModelsComponent } from "../../../shared/components/our-services-components/vtuber-model/custom-vtuber-models/custom-vtuber-models.component";
import { FooterBannerComponent } from "../../../shared/components/common/footer-banner/footer-banner.component";

@Component({
  selector: 'app-vtuber-model',
  standalone: true,
  imports: [HeaderBannerComponent, CarouselWithTextComponent, VirtualSpotlightComponent, CustomVtuberModelsComponent, FooterBannerComponent],
  templateUrl: './vtuber-model.component.html',
  styleUrl: './vtuber-model.component.css'
})
export class VtuberModelComponent {

}
