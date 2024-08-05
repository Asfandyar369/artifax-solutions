import { Component } from '@angular/core';
import { PortfolioBannerComponent } from '../../shared/components/portfolio-components/portfolio-banner/portfolio-banner.component';
import { PortfolioShowcaseComponent } from "../../shared/components/portfolio-components/portfolio-showcase/portfolio-showcase.component";
import { PortfolioModelsComponent } from "../../shared/components/portfolio-components/portfolio-models/portfolio-models.component";
import { PortfolioEmotesComponent } from "../../shared/components/portfolio-components/portfolio-emotes/portfolio-emotes.component";
import { PortfolioStreampackComponent } from "../../shared/components/portfolio-components/portfolio-streampack/portfolio-streampack.component";
import { Portfolio3DScenesComponent } from "../../shared/components/portfolio-components/portfolio-3-d-scenes/portfolio-3-d-scenes.component";
import { PortfolioPFPsComponent } from '../../shared/components/portfolio-components/portfolio-pfps/portfolio-pfps.component';
import { HeaderBannerComponent } from "../../shared/components/common/header-banner/header-banner.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioBannerComponent, PortfolioPFPsComponent, PortfolioShowcaseComponent, PortfolioModelsComponent, PortfolioEmotesComponent, PortfolioStreampackComponent, Portfolio3DScenesComponent, HeaderBannerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
