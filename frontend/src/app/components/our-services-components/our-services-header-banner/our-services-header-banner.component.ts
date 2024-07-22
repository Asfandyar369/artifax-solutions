import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-our-services-header-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './our-services-header-banner.component.html',
  styleUrl: './our-services-header-banner.component.css'
})
export class OurServicesHeaderBannerComponent implements OnInit{
  ourService: PortfolioShowcase | undefined | null;

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
          this.ourService = res;
        }, (error) => {
          console.error(error);
        });
  }

}
