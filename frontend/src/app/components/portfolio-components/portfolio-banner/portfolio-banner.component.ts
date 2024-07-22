import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';


@Component({
  selector: 'app-portfolio-banner',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './portfolio-banner.component.html',
  styleUrl: './portfolio-banner.component.css',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class PortfolioBannerComponent implements OnInit {
  portfolioBanner: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Banners';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolioBanner();
  }

  private getPortfolioBanner(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-banner`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.portfolioBanner = res;
          this.filteredCardList = res.showCaseCardList;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Banners') {
      debugger
      this.filteredCardList = this.portfolioBanner?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioBanner?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.description === option
        );
    }
  }

}
