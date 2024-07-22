import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-portfolio-showcase',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './portfolio-showcase.component.html',
  styleUrl: './portfolio-showcase.component.css'
})
export class PortfolioShowcaseComponent implements OnInit {
  portfolioShowcase: PortfolioShowcase | undefined | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolioShowcase();
  }
  private getPortfolioShowcase(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-showcase`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.portfolioShowcase = res;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
