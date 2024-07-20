import { Component, OnInit } from '@angular/core';
import { PortfolioBanner } from '../../../../interface/PortfolioBanner';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './portfolio-banner.component.html',
  styleUrl: './portfolio-banner.component.css'
})
export class PortfolioBannerComponent implements OnInit {
  portfolioBanner: PortfolioBanner | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getPortfolioBanner();
  }

  private getPortfolioBanner(): void {
    this.http
      .get<PortfolioBanner>(`${environment.apiUrl}/portfolio-banner`)
      .subscribe(
        (res: PortfolioBanner) => {
          this.portfolioBanner = res;
        }, (error) => {
          console.error(error);
        });
  }
}
