import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { NgIf } from '@angular/common';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';

@Component({
  selector: 'app-portfolio-header-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './portfolio-header-banner.component.html',
  styleUrl: './portfolio-header-banner.component.css'
})
export class PortfolioHeaderBannerComponent implements OnInit {
  portfolioBanner: PortfolioShowcase | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getPortfolioBanner();
  }

  private getPortfolioBanner(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-header-banner`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.portfolioBanner = res;
        }, (error) => {
          console.error(error);
        });
  }
}
