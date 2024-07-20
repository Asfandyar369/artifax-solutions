import { Component } from '@angular/core';
import { PortfolioBannerComponent } from '../../components/portfolio-components/portfolio-banner/portfolio-banner.component';
import { PortfolioShowcaseComponent } from "../../components/portfolio-components/portfolio-showcase/portfolio-showcase.component";
import { PortfolioPFPsComponent } from "../../components/portfolio-components/portfolio-pfps/portfolio-pfps.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioBannerComponent, PortfolioShowcaseComponent, PortfolioPFPsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
